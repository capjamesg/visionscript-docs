---
title: Count[]
definition: Count the number of predictions in an image
layout: std.njk
tags:
    - std
    - Find
---

### Syntax

```Count[]
```
### Examples

The following example loads an image, detects all the people in the image, counts the number of people, and says how many were identified in the image.

```Load["./photo.jpg"]
Detect["person"]
Count[]
Say[]
```
![A photo of people outside with a count below indicating there are eight people in the image](/assets/count.png)