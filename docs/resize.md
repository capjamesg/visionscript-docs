---
title: Resize[]
definition: Resize an image
layout: std.njk
tags:
    - std
    - Process
---

### Syntax

```
Resize[100, 100]
```

### Arguments

- `width` - The width to resize the image to.
- `height` - The height to resize the image to.

### Examples

The following example loads an image, resizes it to 100x100, and displays it.

```
Load["./photo.jpg"]
Resize[100, 100]
Show[]
```