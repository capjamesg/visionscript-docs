---
title: Data Types
layout: default.njk
---

VisionScript has the following data types:

1. `Detection`: One or more detections from a `Detect[]` or `Segment[]` call.
2. `Image`: An image.
3. `Pose`: The results from a `DetectPose[]` call.
4. `String`: Text.
5. `Integer`: A whole number.
6. `Boolean`: A True or False statement.

You can inspect the type of the last item on the stack by using an `Is[]` statement:

```
Is[]
```

To inspect the value of a specific type, add the value whose type you want to inspect as an argument to `Is[]`:

```
Is[Detect["cat"]]
```