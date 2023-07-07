---
title: Similarity[]
definition: Get the similarity between two or more images.
layout: std.njk
tags: std
---

### Syntax

```
Similarity[]
Similarity[3]
```

### Arguments

- `n` - The number of images to compare. Defaults to 2.

### Examples

The following example loads two images, compares them, and displays a similarity score.

```
Load["./photo.jpg"]
Load["./photo1.jpg"]
Similarity[]
Say[]
```