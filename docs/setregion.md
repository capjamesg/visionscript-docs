---
title: SetRegion[]
definition: Filter detections by region.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Input
signatures:
    - SetRegion[x, y, width, height]
---

SetRegion[] must be called before Detect[] or Segment[] to filter detections by region. If SetRegion[] is not called, the entire image is used as the region.

### Syntax

```
SetRegion[x, y, width, height]
```

### Arguments

- `x`, `y` - The x and y coordinates of the top left corner of the region.
- `width`, `height` - The width and height of the region.

### Examples

The following example loads an image and sets the region in which detections must appear to be returned by Detect[]. Then, Detect[] is run to detect solar panels. Predictions not in the specified region are not returned. Then, the filtered predictions are displayed on the the image on which detection was run.

The region is the top left quadrant of the image, assuming the image is 500x500 pixels.

```
Load["./photo.jpg"]
SetRegion[0, 0, 250, 250]
Detect["solar panel"]
Show[]
```
