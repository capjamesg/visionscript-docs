---
title: CountInRegion[]
definition: Count the number of predictions in a region of an image
layout: std.njk
tags:
    - std
    - Find
---

### Syntax

```
Count[]
```

### Examples

The following example loads an image, detects all the people in the image, gets the number of people in a region of the image, and shows how many detections were identified in the region.

```
Load["./photo.jpg"]
Detect["person"]
CountInRegion[0, 0, 100, 100]
Say[]
```