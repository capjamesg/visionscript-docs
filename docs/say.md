---
title: Say[]
definition: Say a message
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
signatures:
    - string
    - expr
---

### Syntax

```
Say[]
Say["Hello, world!"]
```

### Arguments

- `message` - The message to say.

### Examples

The following example runs inference on an image and prints the results.

```
Load["./photo.jpg"]
Detect["person"]
Say[]
```
