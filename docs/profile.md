---
title: Profile[]
definition: Enable the profiler to see how long each function takes to run.
layout: std.njk
tags:
    - std
    - Process
---

`Profile[]` groups run time by function rather than documenting the length of individual function calls.

### Syntax

```Profile[]
```
### Examples

The following code prints a statement saying how many cats are in an image if a cat is found in an image:

```Profile[]

Load["./garden.jpg"]
Detect["cat"]
Count[]
If[Read[] > 0]
    Say[]
End

Say[]
```
The code starts with a `Profile[]` statement, which enables the profiler.

This code runs and then shows the following information:

```--------------------
Profile:
--------------------
detect : 5.28s
read : 0.00s
gt : 0.00s
expr : 0.00s
load : 0.00s
say : 0.00s
count : 0.00s
if : 0.00s
make : 0.00s
Total run time: 5.28s
```
Here, we can see program execution time as well as the time spent to run each function type.