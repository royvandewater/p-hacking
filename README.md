# p-hacking

Try to see if creating p value milestones will let me hit statsig with a smaller overall sample size when running multiple experiments.

## Conclusion

#### When run WITH milestones

```
┌───────────────┬───────────┬────────────────┬───────┬─────────┐
│     name      │ knownLift │ conversionRate │   p   │ statsig │
├───────────────┼───────────┼────────────────┼───────┼─────────┤
│ experiment 1  │      0.01 │ 0.493          │ 0.469 │ false   │
│ experiment 2  │      0.02 │ 0.528          │ 0.101 │ false   │
│ experiment 3  │      0.03 │ 0.520          │ 0.158 │ false   │
│ experiment 4  │      0.04 │ 0.512          │ 0.234 │ false   │
│ experiment 5  │      0.05 │ 0.543          │ 0.003 │ true    │
│ experiment 6  │      0.06 │ 0.575          │ 0.001 │ true    │
│ experiment 7  │      0.07 │ 0.559          │ 0.001 │ true    │
│ experiment 8  │       0.1 │ 0.609          │ 0.001 │ true    │
│ experiment 9  │      0.11 │ 0.611          │ 0.001 │ true    │
│ experiment 10 │      0.12 │ 0.622          │ 0.001 │ true    │
└───────────────┴───────────┴────────────────┴───────┴─────────┘

Achieved in 12009 runs
```

#### When run WITHOUT milestones

```
┌───────────────┬───────────┬────────────────┬───────┬─────────┐
│     name      │ knownLift │ conversionRate │   p   │ statsig │
├───────────────┼───────────┼────────────────┼───────┼─────────┤
│ experiment 1  │      0.01 │ 0.496          │ 0.457 │ false   │
│ experiment 2  │      0.02 │ 0.495          │ 0.428 │ false   │
│ experiment 3  │      0.03 │ 0.522          │ 0.095 │ false   │
│ experiment 4  │      0.04 │ 0.534          │ 0.025 │ true    │
│ experiment 5  │      0.05 │ 0.542          │ 0.008 │ true    │
│ experiment 6  │      0.06 │ 0.531          │ 0.037 │ true    │
│ experiment 7  │      0.07 │ 0.592          │ 0.001 │ true    │
│ experiment 8  │       0.1 │ 0.607          │ 0.001 │ true    │
│ experiment 9  │      0.11 │ 0.621          │ 0.001 │ true    │
│ experiment 10 │      0.12 │ 0.623          │ 0.001 │ true    │
└───────────────┴───────────┴────────────────┴───────┴─────────┘

Achieved in 16509 runs
```