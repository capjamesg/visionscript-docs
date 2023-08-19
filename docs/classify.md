---
title: Classify[]
definition: Classify objects in an image
layout: std.njk
tags:
    - std
    - Find
---

Classify[] uses a zero-shot model which means you can specify any class you like.

<div class="note">
<p>The model behind Classify[] will be downloaded automatically the first time you use it on your computer. This can take a few minutes depending on your internet connection.</p>
</div>

### Syntax

```Classify["cat", "dog"]
```
### Arguments

- An arbitrary number of `class` arguments that specify the labels to use in classification.

### Examples

The following example loads an image, classifies if the image is a cat or a dog, and displays the results.

```Load["./tmp/cat.jpg"]
Classify["cat", "dog"]
Show[]
```
![A photo of a cat classified as a cat](/assets/classify.png)

### Supported Models

- [CLIP](https://github.com/openai/clip)