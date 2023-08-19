---
title: ShowText[]
definition: Show text on an image
layout: std.njk
tags:
    - std
    - Output
---

### Syntax

```ShowText["Count: "]
```
### Examples

The following example loads a webcam, gets the webcam stream FPS, writes the FPS to the top left corner of the image, and displays the resultant image:

```UseCamera[]
    GetFPS[]
    Read[]
    WriteText[]
```