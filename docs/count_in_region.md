---
title: CountInRegion[]
definition: Count the number of images in a region
layout: std.njk
tags: std
---

### Syntax

```
CountInRegion[x1, y1, x2, y2]
```

### Arguments

- `x1` - The x coordinate of the top left corner of the region.
- `y1` - The y coordinate of the top left corner of the region.
- `x2` - The x coordinate of the bottom right corner of the region.
- `y2` - The y coordinate of the bottom right corner of the region.

### Examples

The following example loads an image, finds the cars, and counts how many cars are in a specific region.

```
Load["./photo1.jpg"]
Detect["car"]
CountInRegion[0, 0, 100, 100]
Say[]
```