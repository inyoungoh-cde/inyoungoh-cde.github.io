---
layout: single
title: "Inyoung Oh"
classes: wide
author_profile: true
toc: false
---

Hi, I'm Inyoung Oh, a Postdoctoral Researcher in the [Visual Intelligence Group](https://vig.kist.re.kr/){:target="_blank" rel="noopener"}, [Center for AI Research](https://cai.kist.re.kr/){:target="_blank" rel="noopener"}, AI & Robotics Institute at the [Korea Institute of Science and Technology (KIST)](https://kist.re.kr/eng/index.do){:target="_blank" rel="noopener"}. I received my Ph.D. in [Mechanical and Robotics Engineering](https://me.gist.ac.kr/meeng/index.do){:target="_blank" rel="noopener"} from the [Gwangju Institute of Science and Technology (GIST)](https://www.gist.ac.kr/en/main.html){:target="_blank" rel="noopener"}, advised by Prof. Kwang Hee Ko in the [MODSIM](https://me.gist.ac.kr/modsim/){:target="_blank" rel="noopener"} Lab.

Reliable spatial perception needs two things at once: recognizing what is where, and pinning down where exactly, in metric 3D. Learned and foundation models handle the recognition well but stay geometrically loose, blurring the boundaries and discontinuities where 3D structure lives and losing absolute scale. I build the geometric half of this picture and inject it into learned and semantic models, so the recovered 3D becomes metric and structurally consistent.

The constant across my work is not a tool but a principle: identify the geometric relation a representation gets wrong, then supply the explicit cue the problem demands. For one problem that cue is a surface-normal field, for another a sharp-feature descriptor, for another a ground plane. Each project surfaced its own geometric bottleneck, and I built the module that resolved it.

On point clouds I established this geometric half: prior-free structure recovery, normal-guided LiDAR segmentation, noise-robust normal estimation, and SFD-Net, an architecture-agnostic sharp-feature descriptor that transfers across backbones and from synthetic CAD to real scans. I then carried the same scene-intrinsic geometry into images, first hardening real-time RGB pose, and now, at KIST, recovering metric 3D from a single moving camera where learned depth and feed-forward reconstruction each fall short.

I am extending this toward image-grounded, semantic foundation models: supplying the geometric half they lack so their rich but up-to-scale output becomes metric, consistent, and structured. My aim is spatial perception in which explicit geometry is a first-class inductive bias, fused with learned recognition rather than left for it to infer.

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
