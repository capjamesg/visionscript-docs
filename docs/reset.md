---
title: Reset[]
definition: Reset program state to a blank initialization.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Logic
---

### Syntax

```
Reset[]
```

### Examples

The following example loads an image, detects solar panels, then clears the program state.

```
Load["./photo.jpg"]
Detect["solar panel"]
Reset[]
```