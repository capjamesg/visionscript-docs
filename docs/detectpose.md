---
title: DetectPose[]
definition: Identify a human pose.
layout: std.njk
tags:
    - std
    - Find
signatures:
    - DetectPose[]
---

DetectPose[] records a numeric value that can be visualized or used to compare a pose with the [ComparePose[]](/docs/comaprepose) method. It does not explicitly say what pose a person is making in an image or video.

<div class="callout info">
<p>The model behind Detect[] will be downloaded automatically the first time you use it on your computer. This can take from a few seconds to a few minutes depending on your internet connection.</p>
</div>

### Syntax

```
DetectPose[]
```

### Examples

The following example loads an image, runs inference to detect keypoints for the person in the image, and displays the keypoints on the image:

```
Load["./person.jpg"]
DetectPose[]
Show[]
```

### Supported Models

- [Ultralytics YOLOv8s Pose](https://github.com/ultralytics/ultralytics)