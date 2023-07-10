---
title: GetEdges[]
definition: Uses Sobel edge detection to find the edges in an image.
layout: std.njk
tags: std
---

### Syntax

```
GetEdges[]
```

### Arguments

- `confidence`: The confidence threshold value represented as a percentage whole number (i.e. 20, 50, 90).

### Examples

The following example loads an image, gets the edges of objects in the image using Sobel edge detection, and shows the results of the Sobel edge detection process.

```
Load["./street.jpg"]
GetEdges[]
Show[]
```