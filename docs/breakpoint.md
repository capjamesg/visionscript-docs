---
title: Breakpoint[]
definition: Pause program runtime and start a debugging session.
layout: std.njk
tags:
    - std
    - Logic
---

### Syntax

```
Breakpoint[]
```

### Examples

The following example loads an image, then detects cats in the image. A breakpoint runs which starts an interactive [debugging session](/debugging). Once exiting from the debugging session, the program continues to run.

```
Load["./image.jpg"]
Detect["cat"]
Breakpoint[]
If[Count[] > 4]
    Say["There are more than four cats in this image!"]
```