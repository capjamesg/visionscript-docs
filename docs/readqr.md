---
title: ReadQR[]
definition: Read a QR code and return the text associated with the QR code.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Find
signatures:
    - ReadQR[]
---

### Syntax

```
ReadQR[]
```

## Examples

The following example loads an image, detects a QR code, and displays the text associated with the QR code.

```
Load["./photo1.jpg"]
ReadQR[]
Say[]
```
