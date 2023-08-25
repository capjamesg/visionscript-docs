---
title: First[]
definition: Get first item in list.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Find
signatures:
    - First[]
    - First[list]
    - First[expr]
---

### Syntax

```
First[]
First[[1, 2, 3]]
```

## Arguments

- `list` (optional): A list of items.

## Examples

The following example loads an image, gets the first prediction from the list (predictions are always sorted by confidence in descending order, so this will return the prediction with the highest confidence), and displays the results.

```
Load["./cats.png"]
Detect["cat"]
First[]
```