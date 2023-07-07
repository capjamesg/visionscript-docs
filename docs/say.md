---
title: Say[]
definition: Say a message
layout: std.njk
tags: std
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