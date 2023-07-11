---
title: Size[]
definition: Get the size of an image.
layout: std.njk
tags:
    - std
    - Process
---

### Syntax

```
Size[]
```

### Examples

The following example loads a folder of images. The code displays each image in the folder, then prints out the size of each image to the console.

```
In["./folder/"]
    Load[]
    Show[]
    Size[]
```