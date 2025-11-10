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
[Show more](/news/)

---

## Recent Publications
{% assign recents = site.publications | sort: 'year' | reverse | slice: 0, 4 %}
{% for p in recents %}
- **{{ p.title }}**  
  {{ p.authors }}  
  _{{ p.venue }}_ ({{ p.year }})  
  {% if p.links %}{% for l in p.links %}
  [{{ l.label }}]({{ l.url }}){% if forloop.last == false %} · {% endif %}
  {% endfor %}{% endif %}
{% endfor %}
