---
title: Quickstart
layout: default.njk
---

# Quickstart

In this tutorial, we will walk through a few VisionScript apps.

To begin, you will need a folder of images. Download our example images.

Let's begin! 🙌

## Introduction to VisionScript

VisionScript uses an action-oriented syntax. Syntax is the way that we express instructions to computers.

Let's walk through a few examples showing this syntax in action, while making a few cool projects.

## Find people in an image

```
Load["./data/people.jpg"]
Detect["person"]
Show[]
```

This will detect all the people in an image and show the image with a box around all the people:

<div class="callout">
Exercise: Replace "person" with something else and use a different photo. You can write in anything you want. Abstract words (i.e. "shoe", "tree", "house") will perform better.
</div>

## Build a search engine

Let's build a search engine on a folder of images. All it takes is four lines of code.

```
IN["./folder/"]
    Load[]

Search["plane"]
Compare[]
```

Here is what our code shows:

[add image]

In this code, we:

1. Load all images in a folder
2. Search for the term "plane"
3. Show all images in the folder, with all the planes at the top of the display

## Generate a caption for an image

Let's generate a written description for an image.

```
Load["./folder/image.jpg"]
Caption[]
```

This code returns:

```
[add text]
```

Our code has successfully generated a caption for our image.

## Classify an image

Does a photo contain a cat or a dog? Or a fish? Or a cookie? How do we solve this problem?

That's a job for classification! We can assign a category to an image in a few lines of code:

```
Load["./folder/image.jpg"]
Classify["cat", "dog", "fish"]
```

This code will return a label that is relevant to the image.

Here is the image we are using:

```
[add image]
```

Our code returns the label `cat`. Our code has successfully categorized our image!

## Make a function

A function is a block of code you can reuse throughout your program.

Let's declare a function.

```
Make blurplates
    Detect["license plate"]
    Blur[]
    Show[]

In["./folder/"]
    blurplates
```

This function blurs all of the license plates in all images in our folder.

Here's an image with a license plate that has been blurred:

```
[add image]
```

## Continue learning

Ready to start building more applications? Check out the full [library reference](/docs) which lists all of the functions available in VisionScript and how to use them.