---
title: Make[]
definition: Define a function.
layout: std.njk
tags:
    - std
    - Logic
---

### Syntax

#### Declaration

```
Make showgreyscale
    ...
```

#### Call

```
showgreyscale[]
```

### Arguments

- `name` - The name of the function.
- `...` - The body of the function.

### Examples

The following example declares a function that converts an image to greyscale and displays it.

This function is applied to all images in a folder.

```
Make showgreyscale
    Greyscale[]
    Show[]

In["./folder"]
    showgreyscale[]
```