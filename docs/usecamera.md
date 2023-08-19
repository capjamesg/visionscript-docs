---
title: ShowText[]
definition: Show text on an image
layout: std.njk
works_in_notebook: false
tags:
    - std
    - Output
signatures:
    - UseCamera[]
---

### Syntax

```
UseCamera[]
    ...
```

Where `...` is the code you want to run on each frame in the image.

### Examples

The following example loads a webcam, turns each frame greyscale, and shows the resultant frame:

```
UseCamera[]
    Greyscale[]
    Show[]
```
