---
title: Select[]
definition: Select an item from a list.
layout: std.njk
tags:
    - std
    - Logic
---

### Syntax

```
Select[1]
```

### Arguments

- `idx` - The index of the item to select.

### Examples

The following example loads an image, finds all of the people, and retrieves the first three predictions.

```
Load["./photo.jpg"]
Select[3]
Show[]
```