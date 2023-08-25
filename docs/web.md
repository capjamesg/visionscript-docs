---
title: Web[]
definition: Show text on an image
layout: std.njk
works_in_notebook: false
tags:
    - std
    - Output
signatures:
    - Web["url"]
    - Web["url", associative_array]
---

### Syntax

```
Web["url"]
Web["url", {"item1": "item1", "item2": "item2"}]
```

## Arguments

- `url`: The URL to which you want to send a GET request.
- `body`: JSON-encoded parameters to send in a POST body. If `body` is provided, the request sent has the POST type.

## Examples

The following example makes a webhook request if a cat is found in a room:

```
UseCamera[]
    If[Count["cat"] > 0]
        Web["..."]
    Endif
EndCamera
```
