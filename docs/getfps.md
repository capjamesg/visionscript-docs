---
title: GetFPS[]
definition: Get the FPS of a video or video stream.
layout: std.njk
tags:
    - std
    - Output
---

### Syntax

```GetFPS[]
```
### Examples

The following example loads a webcam, gets the webcam stream FPS, writes the FPS to the top left corner of the image, and displays the resultant image:

```UseCamera[]
    GetFPS[]
    Read[]
    WriteText[]
```