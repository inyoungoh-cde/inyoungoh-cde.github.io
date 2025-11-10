---
layout: single
title: News
permalink: /news/
author_profile: true
---

<ul>
{% for item in site.data.news %}
  <li><strong>{{ item.date }}</strong> — {{ item.text }}</li>
{% endfor %}
</ul>
