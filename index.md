---
layout: single
title: "Inyoung Oh"
classes: wide
author_profile: true
toc: false
---

Hi! I’m Inyoung Oh, a Ph.D. candidate in [School of Mechanical and Robotic Engineering](https://me.gist.ac.kr/meeng/index.do){:target="_blank" rel="noopener"} at [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html){:target="_blank" rel="noopener"}, Republic of Korea (Ph.D. awarded Feb 2026), advised by Prof. Kwanghee Ko in the [MODSIM](https://me.gist.ac.kr/modsim/){:target="_blank" rel="noopener"} Lab.

My research proposes Geometry-Aware Deep Learning as an efficient and principled approach to 3D vision. A core challenge in 3D perception is that real-world sensory data is sparse and irregular, especially for point clouds. While many approaches rely on scaling up model size, I focus on integrating geometric structure so that perception systems remain robust and deployable on robots and mobility platforms.

My work can be organized into three directions:
1) Explicit Geometric Reasoning: incorporating classical geometric reasoning to interpret 3D structures.
2) Geometry-Guided Perception: hybrid learning that uses geometric cues to guide representation learning and prediction.
3) Robust Real-world Application: building systems that remain stable under noise, missing data, and varying sampling patterns.

Across these directions, I have developed geometry-informed methods for sharp feature detection (SFD-Net), surface normal estimation, and normal-guided LiDAR semantic segmentation. I also work on 2D image-based 6-DoF pose estimation and deploy it in mixed reality remote collaboration systems.

Ultimately, my goal is to endow computer systems such as robots, autonomous vehicles, and drones with the capability to interpret sensory data in a human-like manner. To that end, I study the processing and analysis of multimodal signals including images, videos, point clouds, and motion signals, and I design learning systems where geometric structure is a first-class component rather than an afterthought.

Currently, as a postdoctoral researcher in the [Visual Intelligence Group](https://vig.kist.re.kr/){:target="_blank" rel="noopener"}, [Center for AI Research](https://cai.kist.re.kr/){:target="_blank" rel="noopener"}, [AI & Robotics Institute](https://airi.kist.re.kr/){:target="_blank" rel="noopener"} at the [Korea Institute of Science and Technology (KIST)](https://kist.re.kr//eng/index.do){:target="_blank" rel="noopener"}, I am expanding my work from geometry-aware point-cloud perception to RGB-driven 3D understanding of metric attributes such as 3D position and human height, emphasizing deployable perception for real-world platforms.

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
{% assign recents = site.publications
  | sort: "year" | reverse
  | where_exp: "p", "p.category"
  | where_exp: "p", "p.category != 'Domestic'"
  | where_exp: "p", "p.category != 'Patents'"
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
