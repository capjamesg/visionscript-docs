---
title: Use[]
definition: Declare a model to use
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Logic
signatures:
    - Use["string"]
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

See Supported Models section in <a href="/docs/detect">Detect[]</a>, <a href="/docs/segment">Segment[]</a>, <a href="/docs/classify">Classify[]</a>, and <a href="/docs/caption">Caption[]</a> to find which models are supported for the task type you are using.