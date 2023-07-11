---
title: SetBrightness[]
definition: Set the brightness of an image
layout: std.njk
tags:
    - std
    - Process
---

### Syntax

```
SetBrightness[10]
```

### Arguments

- `brightness` - The percentage by which to increase or decrease the brightness of the image. Minimum value is -100, maximum value is 100.

### Examples

The following example loads an image, detects solar panels, increases the brightness of the solar panels by 10%, and displays the new image.

```
Load["./photo.jpg"]
Segment["solar panel"]
SetBrightness[10]
Show[]
```