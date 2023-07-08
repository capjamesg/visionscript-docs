---
title: Read[]
definition: Read the value at the top of the stack. Used in if statement conditionals.
layout: std.njk
tags: std
---

When writing an `if` statement, you may want to use a value from a previous computation.

To do so, you need to use `Read[]` to retrieve the last computed value before an if statement was evaluated.

### Syntax

```
Read[]
```

### Examples

The following example loads an image, reads the text in the image, and shows the image if it contains "tea".

```
Load["./photo.jpg"]
GetText[]
If[Read[] == "tea"]
    Show[]
```