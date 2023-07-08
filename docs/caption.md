---
title: Caption[]
definition: Generate a caption for an image.
layout: std.njk
tags: std
---

<div class="note">
<p>The model behind Detect[] will be downloaded automatically the first time you use it on your computer. This can take a few minutes depending on your internet connection.</p>
</div>

### Syntax

```
Caption[]
```

### Examples

The following example loads an image, generates a caption, and displays the results.

```
Load["./photo.jpg"]
Detect["person"]
Show[]
```

### Supported Models

- [BLIP](https://github.com/salesforce/BLIP)