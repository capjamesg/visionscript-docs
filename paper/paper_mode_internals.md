---
title: Paper Mode in VisionScript Programs
layout: default.njk
permalink: /paper/internals
---

Under the hood, Paper Mode is powered by three lines of VisionScript:

```
Load["image.jpg"]
GetText[]
Say[]
```

This program:

1. Loads an image from a file;
2. Reads the text in the image, and;
3. Returns the text as plain text.

Behind the scenes, GetText[] calls the Google Cloud OCR API to read the text in the image. This API was chosen due to its superior performance over various well-known open source OCR libraries that were tested.

Then, error correction is applied to try and fix any errors present.

The text is returned to the Notebook and turned into a VisionScript program in Interactive Mode.