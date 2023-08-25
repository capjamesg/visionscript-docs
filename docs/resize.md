---
title: Resize[]
definition: Resize an image
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - Resize[width, height]
---

### Syntax

```
Resize[100, 100]
```

## Arguments

- `width` - The width to resize the image to.
- `height` - The height to resize the image to.

## Examples

The following example loads an image, resizes it to 100x100, and displays it.

```
Load["./tmp/cat.jpg"]
Resize[250, 250]
Show[]
```

![A photo of a cat resized to 250x250](/assets/resize.png)