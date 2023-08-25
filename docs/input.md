---
title: Input[]
definition: Get user input.
layout: std.njk
works_in_notebook: true
tags:
    - std
    - Deploy
signatures:
    - Input["string"]
---

Inputs let you accept image or text input from a user.

Inputs are used as part of VisionScript Cloud, a method through which you can deploy code to an API or a HTML web page that you can share with others.

If a script contains an `Input[]`, it cannot be executed as a VisionScript script from the command line or a notebook environment. We recommend adding `Input[]` when you have already written the logic for your program and are ready to share it with the world.

### Syntax

```
Input["Form Name"]
```

## Arguments

- `Form Name`: A unique identifier for the input. This will be shown as the form name in VisionScript Cloud deployments.

## Examples

The following example asks a user to provide an imagei and will classify whether the image is a cat or a dog. The text response is then displayed.

```
Load[Input[]]
Classify["cat", "dog"]
Show[]
```
