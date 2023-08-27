---
title: VisionScript
layout: default.njk
nomain: true
---

<div class="side_by_side">
    <div style="flex: 1;">
        <video controls autoplay loop muted playsinline style="width: 100%; height: auto;">
            <source src="/assets/intro.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>

    <div style="flex: 1;">
        <h1 class="p-name">VisionScript</h1>
        <p>VisionScript is an abstract programming language for doing common computer vision tasks, fast.</p>
        <p>With VisionScript, you can:</p>
        <ul>
            <li>Build an image search engine</li>
            <li>Replace objects in images</li>
            <li>Generate text descriptions of images</li>
            <li>Classify images</li>
            <li>Apply transformations to images (i.e. greyscale, resize, blur, cut out parts of the image, replace sections in an image)</li>
            <li>And more!</li>
        </ul>
    </div>
</div>

<main class="h-entry">
    <h2 id="demo">See VisionScript in Action</h2>
    <div style="position: relative; height: 300px; width: 100%;"><iframe src="https://player.vimeo.com/video/856043804?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="VisionScript Building Powerful Applications with Images and Videos"></iframe></div>
    <script src="https://player.vimeo.com/api/player.js"></script>
    <h2 id="install">Install VisionScript</h2>

    <p>The latest version of VisionScript is <a href="https://pypi.org/project/visionscript/">0.0.5</a>.</p>

    <p>Install VisionScript with <code>pip</code>:</p>
    <pre>pip install visionscript</pre>
    <p>Create a file with VisionScript:</p>
    <pre>
        Load["./image.jpg"]
        Detect["person"]
        Show[]
    </pre>
    <p>Run your program:</p>
    <pre>visionscript program.vic</pre>
    <h2>Run in a notebook</h2>
    <h3>Drag-and-drop</h3>
    <p>VisionScript provides a block-based, drag-and-drop web tool for building applications.</p>
    <p>To run the web tool, use the following command:</p>
    <pre>visionscript --notebook</pre>
    <p>The drag-and-drop interface will appear in your browser.</p>
    <p>The blocks in the drag-and-drop interface generate VisionScript code that you can export and deploy.</p>
    <img src="/assets/home_image_1.png" alt="A VisionScript notebook that counts the number of cats in an image" />
    <h3>Code-based notebook</h3>
    <p>You can write and run VisionScript code in an interactive web notebook. This system allows persistence of state, which is useful if you are using compute-heavy functions like building a search engine or using the image segmentation features available in VisionScript.</p>
    <p>To create a notebook, use the following command:</p>
    <pre>visionscript --notebook</pre>
    <p>Then, click the "Switch to code mode" button to enter into a code notebook.</p>
    <img src="/assets/counting_example.png" alt="A VisionScript notebook to count the number of objects in an image" />
    <h3>Run in a REPL</h3>
    <p>You can run code in a REPL session using the following command:</p>
    <pre>visionscript --repl</pre>
</main>