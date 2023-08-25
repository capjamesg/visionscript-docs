---
title: ShowText[]
definition: Show text on an image
layout: std.njk
works_in_notebook: false
tags:
    - std
    - Output
signatures:
    - UseCamera[]
---

### Syntax

```
UseCamera[]
    ...
EndCamera

UseCamera["background"]
    ...
EndCamera
```

Where `...` is the code you want to run on each frame in the image.

`UseCamera[]` has two modes:

- `UseCamera[]`: Runs all enclosed commands in a single thread. This is ideal for real-time use cases.
- `UseCamera["background"]`: Shows the webcam in one thread and runs commands in another thread. This allows you to add asynchronous logic (i.e. a 3, 2, 1 countdown) without freezing the webcam feed while the logic runs.

## Examples

The following example loads a webcam, turns each frame greyscale, and shows the resultant frame:

```
UseCamera[]
    Greyscale[]
    Show[]
```
