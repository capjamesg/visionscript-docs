---
title: Cutout[]
definition: Cut out the region of a bounding box returned by an object detection model.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - Cutout[]
---

### Syntax

```
Cutout[]
```

### Examples

In this example, an image is loaded, faces are detected, and the first face is cut out and added to the image stack. The original image preserves the cut out area.

```
Load["./photo.jpg"]
Detect["face"]
Compare[]
```
