---
title: If[]
definition: Run code if a statement is true.
layout: std.njk
tags: std
---

### Syntax

```
If[statement]
    ...
```

### Arguments

- `statement`: A statement to evaluate. The statement must evaluate to `True` or `False`.
- `...`: An arbitrary number of commands indented with a tab character. These commands are run if the `if` statement evaluates to `True`.

### Examples

The following example loads an image, reads the text in the image, and shows the image if it contains "tea".

```
Load["./photo.jpg"]
GetText[]
If[Read[] == "tea"]
    Show[]
```

In this example, `Read[] == "tea"` is the statement to evaluate. If this statement returns `True`, the indented statements are run. Otherwise, the indented statements are not run.