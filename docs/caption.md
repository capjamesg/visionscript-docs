---
title: Caption[]
definition: Generate a caption for an image.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Find
signatures:
    - Caption[]
---

<div class="callout info">
<p>The model behind Caption[] will be downloaded automatically the first time you use it on your computer. This can take a few minutes depending on your internet connection.</p>
</div>

### Syntax

```
Caption[]
```

## Examples

The following example loads an image, generates a caption, and displays the results.

```
Load["./tmp/bus.jpg"]
GetEdges[]
Show[]
```

![A caption reading "a bus is driving down the street in front of a building"](/assets/caption.png)

### Supported Models

- [BLIP](https://github.com/salesforce/BLIP)