---
title: Replace[]
definition: Replace the region of a bounding box returned by an object detection model.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - Replace[]
    - Replace["color"]
---

### Syntax

```
Replace[]
Replace["blue"]
```

## Examples

In this example, an image is loaded, faces are detected, and the first face is replaced with a blue box. The new image is then saved to a file.

```
Load["./photo.jpg"]
Replace["blue"]
Save["./new_photo.jpg"]
```
