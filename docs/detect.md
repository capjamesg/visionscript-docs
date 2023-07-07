---
title: Detect[]
definition: Find objects in an image.
layout: std.njk
tags: std
---

Detect[] uses a zero-shot model which means you can specify any class you like.

<div class="note">
<p>The model behind Detect[] will be downloaded automatically the first time you use it on your computer. This can take a few minutes depending on your internet connection.</p>
</div>

### Syntax

```
Detect[]
Detect["person"]
```

### Arguments

- `class` - The class to detect.

### Examples

The following example loads an image, runs inference to find all objects matching the "person" class, and displays the results.

```
Load["./photo.jpg"]
Detect["person"]
Show[]
```

### Supported Models

TODO

### Synonyms

- Find[]