---
title: Made with VisionScript
layout: default.njk
---

# Explore Projects Made with VisionScript

All projects come with notebooks you can download so you can run and remix the projects that interest you.

<ul class="gallery">
    {% for page in collections.gallery %}
        <li>
            <a href="{{ page.url }}">
                <img src="{{ page.data.image }}" alt="{{ page.data.title }} project photo">
                <h2>{{ page.data.title }}</h2>
                <p>{{ page.data.description }}</p>
            </a>
        </li>
    {% endfor %}
</ul>
