---
title: Style Guide
layout: default.njk
---

Writing code in a consistent style helps preserve the readability of your work. The [viclint](/lint) tool lets you apply the official VisionScript style guide to your code.

The style guide for VisionScript is below.

## Indentation

Statements inside the following blocks should be indented:

- `If[]`
- `In[]`
- `UseCamera[]`

## Function Names

<div class="callout info">
    <p><i class="fas fa-info-circle"></i>&nbsp; <code>viclint</code> does not change function names when linting.</p>
</div>

Self-declared function names should start with a lower case character. For example:

```
Make myfunction[]
    Say["Hello, world!"]
```

This helps distinguish between functions that are part of the VisionScript language and standard libraries and user-defined functions.