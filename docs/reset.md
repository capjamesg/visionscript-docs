---
title: Reset[]
definition: Reset application state to a blank initialization.
layout: std.njk
tags: std
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