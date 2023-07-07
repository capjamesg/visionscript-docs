---
title: VisionScript Syntax
definition: The syntax for VisionScript.
layout: std.njk
tags: std
---

## Statements

VisionScript statements are action-oriented. <code>Detect["coffee cup"]</code> detects coffee cups. <code>Show[]</code> shows an image, including inference results if a computer vision model has been run on the image.

Functions and methods in the VisionScript standard library start with a capital letter, like so:

<pre>
Load["./cafe.jpeg"]
Detect["coffee cup"]
Show[]
</pre>

Statements that start with a hashtag ("#") are comments. Comments are not evaluated.

## Lexical Inference

VisionScript tries to guess what you want to do so you can write less code. We call this lexical inference.

Consider the following example:

<pre>
In["./folder/"]
    Load[]

Search["plane"]
Compare[]
</pre>

This code:

1. Loads all images in a folder
2. Searches images to find the ones most relevant to the query "plane"
3. Displays all of the search results for comparison

Behind the scenes, a lot is going on. All images are in a folder are being read to a buffer in LIFO order. That buffer contains all of the images that have been read in a VisionScript program. Then, a search index using CLIP embeddings is computed for all the loaded images on the buffer. This is cached for future use in the script. Then, images are ordered by similarity to the text query in descending order. Images are displayed in that order to the user.

This is a lot of logic for a popular vision task: do image search on a folder of images. VisionScript abstracts away this logic, allowing you to focus on saying what you want to do. The language handles low-level computer vision plumbing.