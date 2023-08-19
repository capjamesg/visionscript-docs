---
title: Compare[]
definition: Show two or more images side by side
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
---

If you have called `Detect[]` or `Segment[]`, the respective bounding boxes or masks will be shown on the image.

### Syntax

```
Compare[]
```

### Examples

In this example, two images are loaded and displayed size-by-side for comparison.

```
Load["./photo.jpg"]
Load["./photo1.jpg"]
Compare[]
```
