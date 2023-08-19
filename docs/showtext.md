---
title: ShowText[]
definition: Show text on an image
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
signatures:
    - ShowText["string"]
---

### Syntax

```
ShowText["Count: "]
```

### Examples

The following example loads a webcam, gets the webcam stream FPS, writes the FPS to the top left corner of the image, and displays the resultant image:

```
UseCamera[]
    GetFPS[]
    Read[]
    WriteText[]
```
