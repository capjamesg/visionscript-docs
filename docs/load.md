---
title: Load[]
definition: Load an image from a file or a URL. Also, load all images in a folder.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Input
signatures:
    - Load["./photo.png"]
    - Load["https://example.com/photo.jpg"]
    - Load["./folder/"]
---

### Examples

```
Load["./photo.jpg"]
Load["https://example.com/photo.jpg"]
Load["./folder/"]
```

### Arguments

- `path` - The path to the image or folder to load.

### Example

The following example loads an image and displays it.

```
Load["./photo.jpg"]
Show[]
```
