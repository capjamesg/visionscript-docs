---
title: Load[]
definition: Load an image from a file or a URL. Also, load all images in a folder.
layout: std.njk
tags: std
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

---
title: Search[]
definition: Search a folder of images with a text query.
layout: std.njk
tags: std
---

### Syntax

```
Search["query"]
```

### Arguments

- `query` - The text query.

### Examples

The following example loads an image by URL:

```
Load["https://example.com/photo.jpg"]
```