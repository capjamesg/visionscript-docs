---
title: ShowText[]
definition: Show text on an image
layout: std.njk
tags:
    - std
    - Output
---

### Syntax

```UseCamera[]
    ...
```
Where `...` is the code you want to run on each frame in the image.

### Examples

The following example loads a webcam, turns each frame greyscale, and shows the resultant frame:

```UseCamera[]
    Greyscale[]
    Show[]
```