---
title: Count[]
definition: Count the number of predictions in an image
layout: std.njk
tags: std
---

### Syntax

```
Count[]
```

### Examples

The following example loads an image, detects solar panels, counts them, and says how many were identified in the image.

```
Load["./photo.jpg"]
Detect["solar panel"]
Count[]
```