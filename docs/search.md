---
title: Search[]
definition: Search a folder of images with a text query.
layout: std.njk
tags:
    - std
    - Find
---

### Syntax

```Search["query"]
```
### Arguments

- `query` - The text query.

### Examples

The following example loads a folder of images, searches for images related to a plane, and displays the images ordered by relevance in descending order.

```In["./folder/"]
    Load[]

Search["plane"]
Compare[]
```