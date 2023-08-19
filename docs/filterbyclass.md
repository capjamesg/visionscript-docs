---
title: FilterByClass[]
definition: Filter predictions by class(es)
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - FilterByClass[]
    - FilterByClass["class"]
    - FilterByClass["class1", "class2", ...]
---

You can set a class filter before or after you run `Detect[]` or `Segment[]`. By default, no classes are filtered.

To reset the class filter, use `FilterByClass[]`.

### Syntax

```
FilterByClass[]
FilterByClass[class]
FilterByClass[class1, class2, ...]
```

### Arguments

- `class`: The class(es) to filter by. Can be a single class or a list of classes.

### Examples

The following example finds cats in an image called `house.jpg`. `Detect[]` finds all the objects in the image. Then, a filter is applied so that only cats are used in future cells. Then, the cat predictions are displayed on the `house.jpg` image that was loaded at the beginning of the example.

```
Load["./house.jpg"]
Detect["cat"]
SetConfidence[90]
Show[]
```
