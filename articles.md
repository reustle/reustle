---
title: Articles
layout: post
---

<ul>
  {% for post in site.posts %}
    {% unless post.draft %}
      <li>
        <a href='{{ post.url | prepend: site.baseurl | replace:'.html','' }}'>{{ post.title }}</a>
        ({{ post.date | date: '%b %Y' }})
      </li>
    {% endunless %}
  {% endfor %}
</ul>

