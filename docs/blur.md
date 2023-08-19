---
title: Blur[]
definition: Blur an image
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Process
signatures:
    - Blur[]
---

### Syntax

```
Blur[]
```

### Examples

The following example loads an image, detects people, blurs them, and displays the new image.

```
Load["./photo.jpg"]
Detect["person"]
Blur[]
Show[]
```
