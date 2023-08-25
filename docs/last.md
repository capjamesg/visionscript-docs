---
title: Last[]
definition: Get lasts item in list.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Find
signatures:
    - Last[]
    - Last[list]
    - Last[expr]
---

### Syntax

```
Last[]
Last[[1, 2, 3]]
```

## Arguments

- `list` (optional): A list of items.

## Examples

The following example loads an image, gets the last prediction from the list (predictions are always sorted by confidence in descending order, so this will return the prediction with the lowest confidence), and displays the results.

```
Load["./cats.png"]
Detect["cat"]
Last[]
```