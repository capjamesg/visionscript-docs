---
title: Equality (==, !=)
definition: Test for equality or inequality between two values.
layout: std.njk
tags:
    - std
    - Logic
---

### Syntax

```x == y
x != y
```
### Arguments

- `x` - The first statement to evaluate
- `y` - The second statemenet to evaluate

### Examples

The following example loads an image, reads the text in the image, and shows the image if it contains "tea".

```Load["./photo.jpg"]
GetText[]
If[Read[] == "tea"]
    Show[]
```