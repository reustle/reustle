---
title: Articles
layout: basic-post
---

<ul>
  {% for post in site.posts %}
    {% unless post.draft %}
      <li>
        <a href='{{ post.url | prepend: site.baseurl | replace:'.html','' }}'>{{ post.title }}</a>
        <em>({{ post.date | date: '%b %Y' }})</em>
      </li>
    {% endunless %}
  {% endfor %}
</ul>
