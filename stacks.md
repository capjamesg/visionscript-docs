---
title: "Behind Implicit State: Stacks"
layout: default.njk
---

VisionScript embraces implicit state. This means that a programmer does not explicitly specify how pieces of data should work together.

Consider this program:

```
UseCamera[]
    Show[]
    Classify["a person making a fist", "a person holding up a flat hand", "two fingers"]
    Say[]
EndCamera
```

This program:

1. Starts a webcam
2. Shows the last frame from the webcam
3. Classifies the frame into one of the three user-provided categories
4. Shows the result of the Classify[] method

Behind the scenes, VisionScript is managing the state behind each of these methods. You don't need to say what you want to show, or say. You don't need to say what you want to classify. VisionScript manages this.

In a programming language like Python, the above program might be expressed as follows:

```
camera = cv2.VideoCapture(0)

while True:
    frame = camera.read()[1]

    cv2.imshow("frame", frame)
    cv2.waitKey(1)
    classification = classify(frame, "option 1", "option 2", "option 3")
    print(classification)
```

Here, the developer has to manage state. Variables are created for the camera, the frame, and the classification. These variables are passed into functions.

## How State is Managed

VisionScript programs have a global state that is accessible throughout the program. This state manages a range of information, such as whether a camera is being used, the classes from the last Detect[] call, and more.

Detection, Image and Pose objects have their own stacks:

- `detections_stack`: Holds results from Detect[] and Segment[] functions.
- `image_stack`: Holds every loaded image. Images are lazily loaded to ensure steady performance.
- `pose_stack`: Holds results from DetectPose[] functions.

Many functions, like Show[], Read[] and Say[] look for the value at the top of the stack that is relevant.

You can read these stacks as Python objects (the language in which VisionScript is implemented) in the VisionScript debugger. [Read instructions on how to use the debugger](/debug)

Here is how state is managed at a high level for the program we wrote earlier:

```
UseCamera[] # Adds a frame to the top of the image_stack
    Show[] # Reads the top of the image_stack
    Classify["a person making a fist", "a person holding up a flat hand", "two fingers"] # Reads the top of the image_stack
    Say[] # Reads the top of the image_stack
EndCamera
```

Some functions read more than value from the stack, such as Search[] and Compare[], which build an index for different images and show multiple images, respectively.

To reset state in a program, use the `Reset[]` method. This will reset every value, so code after the `Reset[]` method will run as if the program had started from scratch after that line.