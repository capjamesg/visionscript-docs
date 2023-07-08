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
<h2>Install VisionScript</h2>
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
<p>You can run your code in an interactive web environment. This allows for persistence of state, which is useful if you are using compute-heavy functions like building a search engine or using the image segmentation features available in VisionScript.</p>
<p>To create a notebook, use the following command:</p>
<pre>visionscript --notebook</pre>
<img src="/assets/notebook.png" alt="A VisionScript notebook to find people in an image" />
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