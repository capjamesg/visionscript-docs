---
title: Library Reference
layout: default.njk
---

Functions available in the VisionScript language.

<h2>Input</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Input" %}
            <li>
                <a href="{{ page.url }}" class="Input language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<h2>Process</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Process" %}
            <li>
                <a href="{{ page.url }}" class="Process language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<h2>Find</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Find" %}
            <li>
                <a href="{{ page.url }}" class="Find language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<h2>Output</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Output" %}
            <li>
                <a href="{{ page.url }}" class="Output language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<h2>Logic</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Logic" %}
            <li>
                <a href="{{ page.url }}" class="Logic language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

<h2>Deploy</h2>

<ul class="language_list">
    {% for page in collections.std %}
        {% if page.data.tags contains "Deploy" %}
            <li>
                <a href="{{ page.url }}" class="Deploy language_card">
                    <p style="font-weight: bold;">{{ page.data.title }}</p>
                    <p>{{ page.data.definition }}</p>
                </a>
            </li>
        {% endif %}
    {% endfor %}
</ul>