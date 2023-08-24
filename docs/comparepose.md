---
title: ComparePose[]
definition: Compare two poses.
layout: std.njk
tags:
    - std
    - Find
signatures:
    - ComparePose[]
    - ComparePose[pose1, pose2]
---

### Syntax

```
DetectPose[]
```

### Arguments

- `pose1`, `pose2`: The poses to compare.

### Examples

The following example:

1. Loads an image
2. Runs inference to detect keypoints for the person in the image
3. Starts a webcam
4. Waits 3 seconds
5. Takes a photo from the webcam
6. Calculates keypoints from the photo
7. Compares the two poses

```
Load["./person.jpg"]
DetectPose[]

UseCamera[]
    Wait[3]
    
    DetectPose[]
    Break[]
EndCamera

ComparePose[]
Say[]
```