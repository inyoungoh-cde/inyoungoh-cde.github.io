---
layout: single
title: "Inyoung Oh"
classes: wide
author_profile: true     # ← 왼쪽 사이드바 표시
toc: false
---

## Hi!
간단 자기소개 2~4문장. 연구 분야, 현재 소속, 관심 키워드 등.

---

## News
<ul>
{% for item in site.data.news limit:5 %}
  <li><strong>{{ item.date }}</strong> — {{ item.text }}</li>
{% endfor %}
</ul>
#[Show more](/news/)
<p><a class="btn btn--small" href="/news/">Show more</a></p>

---

## Recent Publications
{% assign recents = site.publications | sort:"year" | reverse | slice: 0, 4 %}
{% for p in recents %}
<div class="pub-item" style="display:flex;gap:14px;margin:18px 0;">
  {% if p.thumbnail %}
  <div style="flex:0 0 160px;">
    <a href="{{ p.links[0].url | default: '#' }}"><img src="{{ p.thumbnail }}" alt="{{ p.title }}" style="width:160px;height:auto;border-radius:6px;"></a>
  </div>
  {% endif %}
  <div style="flex:1;">
    <div style="font-weight:600;margin-bottom:6px;">{{ p.title }}</div>
    <div style="margin-bottom:4px;">{{ p.authors }}</div>
    <div style="font-style:italic;margin-bottom:8px;">{{ p.venue }}{% if p.year %} ({{ p.year }}){% endif %}</div>
    {% if p.links %}{% for l in p.links %}
      <a class="btn btn--primary btn--small" href="{{ l.url }}" style="margin-right:6px;">{{ l.label }}</a>
    {% endfor %}{% endif %}
  </div>
</div>
{% endfor %}

[See all publications →](/publications/)
