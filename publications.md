---
layout: single
title: Publication
permalink: /publications/
author_profile: true
classes: wide     # 컨테이너 폭을 넓게
---

{% assign groups = "International|Under review|Domestic" | split:"|" %}
{% for g in groups %}
### {{ g }}
{:.archive__subtitle}

{% assign pubs = site.publications | where:"category", g | sort:"year" | reverse %}

<div class="pub-grid">
{% for p in pubs %}

  {% if p.list %}
  <!-- 묶음형(Domestic 한 파일) : 한 칸 카드로 출력 -->
  <div class="pub-card pub-card--list">
    <div class="pub-list">
      {{ p.output | default: p.content }}
    </div>
  </div>

  {% else %}
  <!-- 일반 카드 -->
  <div class="pub-card">
    {% if p.thumbnail %}
      <a href="{{ p.links[0].url | default: '#' }}">
        <img class="pub-thumb" src="{{ p.thumbnail }}" alt="{{ p.title }}" loading="lazy">
      </a>
    {% endif %}

    <div>
      <div class="pub-title">{{ p.title }}</div>
      <div class="pub-authors">{{ p.authors }}</div>
      <div class="pub-venue">
        {{ p.venue }}{% if p.year %} ({{ p.year }}){% endif %}
      </div>

      {% if p.links %}
      <div class="pub-actions">
        {% for l in p.links %}
          <a class="btn btn--primary btn--small" href="{{ l.url }}">{{ l.label }}</a>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
  {% endif %}

{% endfor %}
</div>

{% unless forloop.last %}
<hr style="margin:24px 0;">
{% endunless %}
{% endfor %}
