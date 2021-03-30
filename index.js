const R = require('ramda')
const genstats = require('genstats')
const {format: asTable} = require('obj-array-table')

const totalPopulationSize = 1000

const pValue = (control, experiment) => {
  const controlData = R.map(run => run ? 1 : 0, control.runs)
  const experimentData = R.map(run => run ? 1 : 0, experiment.runs)

  return genstats.student(controlData, experimentData).p
}

const main = () => {
  const control     = {name: 'control',      liftToBaseProbability: 0.0, runs: []}
  const experiment1 = {name: 'experiment 1', liftToBaseProbability: 0.1, runs: []}
  const experiment2 = {name: 'experiment 2', liftToBaseProbability: 0.2, runs: []}

  const experiments = [control, experiment1, experiment2]

  for (let i = 0; i < totalPopulationSize; i++) {
    const experiment = experiments[i % experiments.length]

    const rand = Math.random() + experiment.liftToBaseProbability
    const outcome  = rand > 0.5
    experiment.runs.push(outcome)
  }

  experiments.forEach((experiment) => {
    const {runs} = experiment
    const successes = R.filter(R.identity, runs)
    experiment.conversionRate = successes.length / runs.length
    experiment.p = pValue(control, experiment)
  })

  console.log(asTable(R.map(R.pick(['name', 'liftToBaseProbability', 'conversionRate', 'p']), experiments)))
}
main();