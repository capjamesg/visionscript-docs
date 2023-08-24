---
title: Not[]
definition: Turn a True statement into a False statement, or a False statement into a True statement.
layout: std.njk
works_in_notebook: false
tags:
    - std
    - Output
signatures:
    - Not[statement]
---

### Syntax

```
Not[statement]
```

### Arguments

- `statement`: A statement that evaluates to True or False.

### Examples

The following example makes a web request if a car is not found in a video:

```
UseCamera[]
    If[Not[Count["car"]]]
        Web["..."]
    Endif
EndCamera
```
