---
layout: single
title: "Inyoung Oh"
classes: wide
author_profile: true
toc: false
---

Hi, I’m Inyoung Oh, a Postdoctoral Fellow in the [Visual Intelligence Group](https://vig.kist.re.kr/){:target="_blank" rel="noopener"}, [Center for Artificial Intelligence](https://cai.kist.re.kr/){:target="_blank" rel="noopener"}, AI & Robotics Institute at the [Korea Institute of Science and Technology (KIST)](https://kist.re.kr/eng/index.do){:target="_blank" rel="noopener"}. I received my Ph.D. in [Mechanical and Robotics Engineering](https://me.gist.ac.kr/meeng/index.do){:target="_blank" rel="noopener"} from [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html){:target="_blank" rel="noopener"}, advised by Prof. Kwanghee Ko in the [MODSIM](https://me.gist.ac.kr/modsim/){:target="_blank" rel="noopener"} Lab.

My research focuses on geometric deep learning for robust 3D perception and spatial intelligence. I develop geometry-aware learning frameworks that explicitly incorporate geometric structure—such as surface normals, curvatures, discontinuities, and spatial relationships—into neural networks, enabling reliable representation learning under sparse, noisy, and real-world sensing conditions.

My work spans sharp feature detection, surface normal estimation, normal-guided LiDAR semantic segmentation, and monocular 6DoF pose estimation, with applications in robotics, autonomous systems, and mixed reality. These systems are designed to remain stable under real-world variability and to support deployable perception in practical environments.

At KIST, I am expanding this research toward RGB-driven 3D perception and monocular spatial understanding, focusing on estimating metric attributes such as 3D position and human height from monocular RGB input, enabling physically grounded spatial understanding. My goal is to advance spatial AI systems that achieve robust, physically grounded scene understanding across sensing modalities and real-world conditions.

Ultimately, I aim to develop representation learning frameworks where geometric structure serves as a fundamental inductive bias, enabling scalable and deployable perception for intelligent systems operating in complex physical environments.

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
