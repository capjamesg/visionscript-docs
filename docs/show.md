---
title: Show[]
definition: Display an image.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
signatures:
    - Show[]
---

If you have called `Detect[]` or `Segment[]`, the respective bounding boxes or masks will be shown on the image.

### Syntax

```
Show[]
```

## Examples

The following example loads an image, detects the people, and displays the image with bounding boxes around the people.

```
Load["./photo.jpg"]
Detect["person"]
Show[]
```
