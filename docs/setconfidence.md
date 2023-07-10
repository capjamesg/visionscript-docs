---
title: SetConfidence[]
definition: Set the confidence percentage that must be met for predictions to be returned by a model
layout: std.njk
tags: std
---

### Syntax

```
SetConfidence[confidence]
```

### Arguments

- `confidence`: The confidence threshold value represented as a percentage whole number (i.e. 20, 50, 90).

### Examples

The following example finds cats in an image. Predictions must have a 90% confidence or higher to be returned by the `Detect[]` function. Then, the predictions that meet the criteria are displayed on the image of the cat.

```
Load["./cat.jpg"]
SetConfidence[90]
Detect["cat"]
Show[]
```