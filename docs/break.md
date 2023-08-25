---
title: Break[]
definition: Exit out of an In[] or UseCamera[] statement.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Logic
signatures:
    - Break[]
---

### Syntax

```
In["./folder/"]
    ...
    If[...]
        Break[]
```

## Examples

The following example loads a folder of images, looks for a cat in each image, and exits the loop if more than three cats were found in an image:

```
In["./folder/"]
    Load[]
    Detect["cat"]
    If[Count[] > 3]
        Break[]
```
