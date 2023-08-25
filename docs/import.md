---
title: Import[]
definition: Import a .vic file.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Logic
signatures:
    - Import["string"]
---

### Syntax

```
Import["./file.vic"]
```

## Arguments

- `path` - The path to the .vic file to import.

## Examples

The following example laods a .vic file and calls a function within it:

```
Import["./counter.vic]

countcars
Say[]
```
