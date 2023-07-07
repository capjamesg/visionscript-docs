---
title: What is VisionScript?
definition: More information about VisionScript.
layout: std.njk
tags: std
---

VisionScript is an abstract programming language for computer vision tasks.

VisionScript is focused on helping you solve specific vision problems: detect objects in images, remove objects of interest from an image, generate image captions, and more.

VisionScript offers high-level primitives through which you can interact with state-of-the-art models.

## Who is VisionScript For?

VisionScript is designed with two audiences in mind:

1. People who are new to computer vision and want to explore the field, and;
2. Young people who want to learn programming.

Because VisionScript is visual in nature, we see potential in the language being used by young people who want to learn how to code. When you evaluate VisionScript code, you can see or read results.

Find all the cats in an image, turn them blue, describe what's in an image, search for a teddy bear in a folder of images. All are possible in a few lines of code with VisionScript.

## Principles

VisualScript is designed with the following principles in mind:

1. You should be able to state what you want to do common computer vision tasks without having to worry about plumbing and low-level programming;
2. You should only write the code you absolutely need to write;
3. Code should be easy to read for people with all coding experience levels (or, as the author likes to say, "it should be usable by a 10 year old!"), and;
4. VisionScript should focus on vision tasks and do the best it can at those tasks.

## Progression from VisionScript

VisionScript is designed to help you get tasks done in as little code as possible, especially for people new to computer vision.

With that said, we envision two progression paths from VisionScript as your knowledge grows.

If you are interested in diving deeper into computer vision, we recommend using Python. Python is widely used throughout the industry (VisionScript is written in Python!) and there are many utilities and tutorials on which you can depend for learning.

If you like the logic-based side of VisionScript, we recommend researching the Wolfram Language. Supported in Mathematica, the Wolfram Language offers hundreds of functions you can use for tasks from computer vision to text processing to mathematics. Indeed, the syntax for VisionScript was inspired by the Wolfram Language.

## Limitations

There is one big limitation with VisualScript: the compute resources required to use image prediction features. The language itself runs with minimal overhead, but when you start to run inference compute requirements grow.

At present, the language requires a minimum of 8 GB of RAM to use detection, segmentation, and classification models. Further, VisionScript would require installation of the Windows Subsystem for Linux for use on Windows machines, a limitation for a number of potential users.