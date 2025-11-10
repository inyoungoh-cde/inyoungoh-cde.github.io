---
layout: single
title: Publication
permalink: /publications/
author_profile: true         # ← 왼쪽 사이드바 유지
---

{% assign groups = "International|Under review|Domestic" | split:"|" %}
{% for g in groups %}
### {{ g }}
{:.archive__subtitle}

{% assign pubs = site.publications | where:"category", g | sort:"year" | reverse %}
{% for p in pubs %}
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

    {% if p.links %}
      {% for l in p.links %}
      <a class="btn btn--primary btn--small" href="{{ l.url }}" style="margin-right:6px;">{{ l.label }}</a>
      {% endfor %}
    {% endif %}
  </div>
</div>
{% endfor %}

{% unless forloop.last %}
<hr style="margin:24px 0;">
{% endunless %}
{% endfor %}
