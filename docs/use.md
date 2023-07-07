---
title: Use[]
definition: Declare a model to use
layout: std.njk
tags: std
---

### Syntax

```
Use["model"]
```

### Examples

The following example declares that the YOLOv8 (COCO checkpoint) model should be used, before loading an image, detecting objects, and saying what they are.

```
Use["yolov8"]
Load["./photo.jpg"]
Detect[]
Say[]
```

### Supported Models

TODO