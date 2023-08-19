---
title: Save[]
definition: Save an image or detections to a file
layout: std.njk
tags:
    - std
    - Output
---

You can save two types of data to a file:

1. An image
2. Detections from Detect[] or Segment[]

### Syntax

```Save["filename"]
```
### Arguments

- `filename` - The name of the file to save the image or detections to. Use `.csv` as the file extension to save detections. Use `.jpg` or `.png` to save an image.

### Examples

```Load["./photo.jpg"]
Detect["people"]
Save["./photo_with_detections.jpg"]
```