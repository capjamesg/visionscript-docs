---
title: Save[]
definition: Save an image or detections to a file
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
signatures:
    - Save["image.png"]
    - Save["predictions.csv"]
---

You can save two types of data to a file:

1. An image
2. Detections from Detect[] or Segment[] as a CSV

### Syntax

```
Save["image.png"]
Save["predictions.csv"]
```

## Arguments

- `filename` - The name of the file to save the image or detections to. Use `.csv` as the file extension to save detections. Use `.jpg` or `.png` to save an image.

## Examples

```
Load["./photo.jpg"]
Detect["people"]
Save["./photo_with_detections.jpg"]
```
