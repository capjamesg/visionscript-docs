---
title: Rotate[]
definition: Rotate an image
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - Rotate[degrees]
---

### Syntax

```
Rotate[90]
```

### Arguments

- `angle` - The angle to rotate the image by, in degrees.

### Examples

The following example loads an image, rotates it by 90 degrees, and displays it.

```
Load["./photo.jpg"]
Rotate[90]
Show[]
```
