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
  {% assign pid = p.title | slugify %}
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

      {% if p.links or p.abstract %}
      <div class="pub-actions">
        {%- comment -%}
        links 배열 중 label이 "abstract"이고 p.abstract가 있으면
        외부 링크 대신 토글 버튼을 렌더링
        {%- endcomment -%}
        {% if p.links %}
          {% for l in p.links %}
            {% assign lbl = l.label | downcase %}
            {% if lbl == "abstract" and p.abstract %}
              <button type="button" class="btn btn--primary btn--small" data-abs="abs-{{ pid }}">abstract</button>
            {% else %}
              <a class="btn btn--primary btn--small" href="{{ l.url }}">{{ l.label }}</a>
            {% endif %}
          {% endfor %}
        {% endif %}

        {% if p.abstract and p.links == nil %}
          <!-- links가 없어도 abstract만 토글로 보여줄 수 있게 -->
          <button type="button" class="btn btn--primary btn--small" data-abs="abs-{{ pid }}">abstract</button>
        {% endif %}
      </div>
      {% endif %}

      {% if p.abstract %}
      <div id="abs-{{ pid }}" class="abs-panel" style="display:none;">
        {{ p.abstract }}
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

<!-- abstract 토글 스크립트 -->
<script>
document.addEventListener('click', function(e){
  const btn = e.target.closest('[data-abs]');
  if(!btn) return;
  const id = btn.getAttribute('data-abs');
  const panel = document.getElementById(id);
  if(!panel) return;
  panel.style.display = (panel.style.display === 'none' || panel.style.display === '') ? 'block' : 'none';
  e.preventDefault();
});
</script>
