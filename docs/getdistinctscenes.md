---
title: GetDistinctScenes[]
definition: Get the distinct scenes in a video
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Output
---

You can only use this function after you have used `In["video.mov"]` on a video and applied a `Classify[]` operation to each frame.

### Syntax

```
GetDistinctScenes[]
```

### Examples

The following example loads a video, classifies each frame, and returns the timestamps at which classifications change:

```
In["video.mov"]
    Classify["sports", "cafe", "beach"]

GetDistinctScenes[]
```
