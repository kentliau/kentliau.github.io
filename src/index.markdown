---
layout: default
title: Blog
---

<div id="home">
  <ul class="posts">
    {% for post in site.posts %}
      <li><span><time datatime="{{ post.date }}">{{ post.date | date_to_string }}</time>:</span> <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>