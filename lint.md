---
title: Linting Code with viclint
layout: default.njk
---

# Linting Code with viclint

`viclint` is the official VisionScript linter.</p>

`viclint` cleans up the formatting of your code in accordance with the standard VisionScript style. Running viclint helps ensure the style of your code is consistent, which aids in preserving the readability of your work. `viclint` does not validate your code for correctness.

`viclint` is separate from the VisionScript language, so you need to install it separately.

To install `viclint`, run the following command:

```pip install viclint
```
To run `viclint`, use the following command:

```viclint program.vic
```
To run `viclint` on a folder of VisionScript files, use the following command:

```viclint folder/
```
If linting succeeds, you will see the following message:

```✨ {file} is now prettier! ✨
```
If linting fails for any reason, you will see the following message:

```🚨 {file} failed to lint. 🚨
```
## See Also

- [viclint GitHub repository](https://github.com/capjamesg/viclint)