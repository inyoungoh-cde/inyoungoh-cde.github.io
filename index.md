---
layout: single
title: "Inyoung Oh"
classes: wide
author_profile: true
toc: false
---

Hi! I am a Ph.D. candidate in the [Department of Mechanical and Robotics Engineering](https://me.gist.ac.kr/meeng/index.do){:target="_blank" rel="noopener"} at [GIST](https://www.gist.ac.kr/en/main.html){:target="_blank" rel="noopener"}, Republic of Korea. My research focuses on understanding human perception of 2D and 3D environments, developing geometry-based deep learning methods, integrating analytic geometric priors with modern neural architectures, and designing AR/VR/MR remote-collaboration platforms.

I study the practical obstacles people face in 2D and 3D tasks and build geometry-informed AI systems that genuinely help them. By combining modern deep learning with explicit geometric structure, I aim to deliver AR, VR, and MR platforms that are reliable, efficient, and easy to use in day-to-day collaboration.

I will receive my Ph.D. from the School of Integrated Technology at GIST, advised by Prof. Kwanghee Ko in the [MODSIM](https://me.gist.ac.kr/modsim/){:target="_blank" rel="noopener"} Lab, with the degree to be awarded at the Winter Commencement Ceremony in February 2026.

---

## News
<ul id="news-list">
{% for item in site.data.news %}
  <li class="{% if forloop.index > 5 %}extra-news{% endif %}">
    <strong>{{ item.date }}</strong> — {{ item.text | markdownify | strip_newlines | remove: '<p>' | remove: '</p>' }}
  </li>
{% endfor %}
</ul>

<p>
  <a id="news-toggle" class="btn btn--small" href="#" role="button" aria-expanded="false">Show more</a>
  <!-- <a class="btn btn--small" href="/news/" style="margin-left:8px;">View all</a> -->
</p>

<style>
  #news-list .extra-news { display: none; }
  #news-list li { margin: .4rem 0; }
</style>

<script>
(function () {
  var LIMIT = 5;
  var list = document.querySelectorAll('#news-list li');
  var btn  = document.getElementById('news-toggle');

  function setState(expanded) {
    for (var i = LIMIT; i < list.length; i++) {
      list[i].style.display = expanded ? 'list-item' : 'none';
    }
    btn.textContent = expanded ? 'Show less' : 'Show more';
    btn.setAttribute('aria-expanded', expanded);
  }

  setState(false);

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    setState(!expanded);
  });
})();
</script>

---

## Recent Publications
{::nomarkdown}
{% assign recents_all = site.publications | sort: "year" | reverse %}
{% assign recents = recents_all
  | where_exp: "p", "p.category and p.category != 'Domestic' and p.category != 'Patents'"
  | slice: 0, 4 %}

{% for p in recents %}
<div class="pub-item" style="display:flex;margin:18px 0;">
  {% if p.thumbnail %}
  <div style="flex:0 0 160px;">
    <a href="{{ p.links[0].url | default: '#' }}">
      <img class="pub-thumb" src="{{ p.thumbnail }}" alt="{{ p.title }}" loading="lazy">
    </a>
  </div>
  {% endif %}
  <div style="flex:1;margin-left:16px;">
    <div style="font-weight:600;margin-bottom:6px;">{{ p.title }}</div>
    <div style="margin-bottom:4px;">{{ p.authors }}</div>
    <div style="font-style:italic;margin-bottom:8px;">
      {{ p.venue }}{% if p.year %} ({{ p.year }}){% endif %}
    </div>
    {% if p.links %}
      {% for l in p.links %}
        <a class="btn btn--primary btn--small" href="{{ l.url }}" style="margin-right:6px;">{{ l.label }}</a>
      {% endfor %}
    {% endif %}
  </div>
</div>
{% endfor %}
{:/}

[See all publications →](/publications/)

