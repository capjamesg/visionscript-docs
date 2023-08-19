---
title: Segment[]
definition: Find objects in an image at a pixel level.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Find
signatures:
    - Segment[]
    - Segment["string"]
---

Segment[] uses a zero-shot model which means you can specify any class you like.

<div class="callout info">
<p>The model behind Segment[] will be downloaded automatically the first time you use it on your computer. This can take a few minutes depending on your internet connection.</p>
</div>

### Syntax

```
Segment[]
Segment["person"]
```

### Arguments

- `class` - The class to detect. If no class is specified, all objects will be segmented.

### Examples

The following example loads an image, runs inference to find all objects matching the "person" class, and displays the results.

```
Load["./photo.jpg"]
Segment["person"]
Show[]
```

### Supported Models

- [GroundedSAM](https://github.com/autodistill/autodistill-grounded-sam)