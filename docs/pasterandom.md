---
title: PasteRandom[]
definition: Paste the last item on the stack to a random x,y coordinate.
layout: std.njk
tags: std
---

### Syntax

```
PasteRandom[]
```

### Examples

The following example cuts out the first cat in an image then pastes it at a random x, y coordinate in the image.

This function is applied to all images in a folder.

```
Load["./image.jpg"]
Detect["cat"]
Get[1]
Cutout[]
PasteRandom[]
```