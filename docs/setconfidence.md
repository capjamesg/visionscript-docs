---
title: SetConfidence[]
definition: Set the confidence percentage by which to filter predictions
layout: std.njk
tags:
    - std
    - Process
---

You can set the confidence threshold before or after you run `Detect[]` or `Segment[]`. The default confidence value is 50%.

### Syntax

```SetConfidence[]
SetConfidence[confidence]
```
### Arguments

- `confidence`: The confidence threshold value represented as a percentage whole number (i.e. 20, 50, 90). Min: 0, Max: 100. If no value is provided, the default value of 50 is used.

### Examples

The following example finds cats in an image. `Detect[]` finds all the cats in the image. Then, a filter is applied so that only predictions with a confidence of 90% or higher are returned. Then, the predictions that meet the criteria are displayed on the image of the cat.

```Load["./cat.jpg"]
Detect["cat"]
SetConfidence[90]
Show[]
```