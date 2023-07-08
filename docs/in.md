---
title: In[]
definition: Iterate over all images in a folder.
layout: std.njk
tags: std
---

### Syntax

```
In["./folder/"]
    ...
```

### Arguments

- `query` - The text query.
- `...` - Statements to evaluate for each image in the specified folder.

### Examples

The following example loads a folder of images, searches for images related to a plane, and displays the images ordered by relevance in descending order.

```
In["./folder/"]
    Load[]

Search["plane"]
Compare[]
```