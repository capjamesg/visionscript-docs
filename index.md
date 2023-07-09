---
title: VisionScript Documentation
layout: default.njk
---

<h1>VisionScript</h1>
<p>VisionScript abstract programming language for using computer vision.</p>
<p>With VisionScript, you can:</p>
<ul>
    <li>Build a semantic search engine</li>
    <li>Use OCR on images</li>
    <li>Apply transformations to images (i.e. greyscale, resize, blur, cut out parts of the image, replace sections in an image)</li>
    <li>And more!</li>
</ul>
<p>The latest version of VisionScript is 0.0.2.</p>
<h2 id="install">Install VisionScript</h2>
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
<img src="/assets/image_similarity.png" alt="A VisionScript notebook to find the similarity between two images" />
<h3>Code-based notebook</h3>
<p>You can write and run VisionScript code in an interactive web notebook. This system allows persistence of state, which is useful if you are using compute-heavy functions like building a search engine or using the image segmentation features available in VisionScript.</p>
<p>To create a notebook, use the following command:</p>
<pre>visionscript --notebook</pre>
<p>Then, click the "Switch to code mode" button to enter into a code notebook.</p>
<img src="/assets/counting_example.png" alt="A VisionScript notebook to count the number of objects in an image" />
<h3>Run in a REPL</h3>
<p>You can run code in a REPL session using the following command:</p>
<pre>visionscript --repl</pre>
<h2>Library Reference</h2>
<ul>
    {% for page in collections.std %}
        {% if page.data.title != title %}
            <li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>