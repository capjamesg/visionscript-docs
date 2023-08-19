---
title: Documenting Code
layout: default.njk
---

# How to Document VisionScript Code

While you are writing your VisionScript code, we encourage you to write notes that are relevant to your code. For example, you may want to write why you are using a particular function, or comments that you or another coder may find useful in the future.

To write comments in VisionScript code, start a new line and add a `#` symbol. Then, write your comment.

Here is an example:

```Load["./garden.jpg"]
# we are detecting in the bottom region because
# the top region does not show the garden
DetectInRegion["bottom"]
Count[]
```
We recommend documenting all of the custom functions you write in your code like this:

```Make rundetection[]
    # look for cats
    # if a cat is found, save the location of the cat
    # to a CSV file
    Detect["cat"]
    If[Count[] > 0]
        Save["./cats.csv"]
    End
```
## Creating Shareable Documentation

You can use the `vicdocs` tool to generate shareable documentation. This tool will create a HTML document that you can publish with a description of your code.

You will need to install the `vicdocs` tool with `pip`:

```pip install vicdocs
```
Once you have installed `vicdocs`, you can run it on any `.vic` file:

```vicdocs program.vic
```
This will create a folder called `program/`, where `program` is the name of your `.vic` file. Inside this folder, you will find a `index.html` file that you can open in your browser.

[View an example of a documentation page generated with `vicdocs`](https://visionscript.org/vicdocs-example/).