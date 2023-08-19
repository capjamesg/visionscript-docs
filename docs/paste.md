---
title: Paste[]
definition: Paste the last item on the stack to an x,y coordinate.
layout: std.njk
tags:
    - std
    - Process
---

### Syntax

```Paste[x, y]
```
### Arguments

- `x` - The x position to start pasting the image.
- `y` - The y position to start pasting the image.

### Examples

The following example cuts out the first cat in an image then pastes it in the top corner of the image.

This function is applied to all images in a folder.

```Load["./image.jpg"]
Detect["cat"]
Get[1]
Cutout[]
Paste[0, 0]
```