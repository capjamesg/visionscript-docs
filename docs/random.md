---
title: Random[]
definition: Get a random item from a list.
layout: std.njk
works_in_notebook: false
tags:
    - std
    - Output
signatures:
    - Random[item1, item2, ...]
---

### Syntax

```
Random[item1, item2, ...]
```

### Arguments

- `items`: An arbitrary number of items. A random item will be selected from the list.

### Examples

The following example gets a random value from a list.

```
answer = Random["rock", "paper", "scissors"]
```
