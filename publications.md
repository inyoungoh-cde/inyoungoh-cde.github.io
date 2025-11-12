---
layout: single
title: Publication
permalink: /publications/
author_profile: true
classes: wide
---

{%- comment -%}
원하는 표기 순서. 실제 문서에 해당 카테고리가 없어도 안전.
{%- endcomment -%}
{% assign desired = "International|Under review|Domestic|Patents Registered" | split:"|" %}

{%- comment -%}
실제 존재하는 카테고리(공백/대문자 섞여도 OK) 수집
{%- endcomment -%}
{% assign seen = site.publications | map: 'category' | compact | uniq %}

{%- comment -%}
desired + seen을 합쳐 중복 제거 → 실제 루프 순서 확보
{%- endcomment -%}
{% assign groups = desired | concat: seen | uniq %}

{% for g in groups %}
### {{ g }}
{:.archive__subtitle}

{%- comment -%}
견고 필터: 
- p.category 가 g 와(공백 제거·소문자) 같거나
- p.categories(배열)에 g 가 포함되어 있으면 통과
{%- endcomment -%}
{% assign pubs = site.publications | where_exp: "p",
  "(
      p.category and
      (p.category | strip | downcase) == (g | strip | downcase)
   ) or (
      p.categories and
      (p.categories | join: '||' | downcase) contains (g | strip | downcase)
   )"
%}

<div class="pub-grid">
{% for p in pubs %}

  {% if p.list %}
  <article class="pub-card pub-card--list">
    <div class="pub-list">
      {{ p.output | default: p.content }}
    </div>
  </article>

  {% else %}
  <article class="pub-card">
    {% if p.thumbnail %}
      <a class="pub-thumb-wrap" href="{{ p.links[0].url | default: '#' }}">
        <img class="pub-thumb" src="{{ p.thumbnail }}" alt="{{ p.title }}" loading="lazy">
      </a>
    {% else %}
      <div class="pub-thumb-wrap"></div>
    {% endif %}

    <div class="pub-body">
      <div class="pub-title">{{ p.title }}</div>
      <div class="pub-authors">{{ p.authors }}</div>
      <div class="pub-venue">
        {{ p.venue }}{% if p.year %} ({{ p.year }}){% endif %}
      </div>

      <div class="pub-actions">
        {% if p.abstract and p.abstract != "" %}
          <button class="btn btn--primary btn--small js-abs-toggle" type="button">abstract</button>
        {% endif %}
        {% if p.links %}
          {% for l in p.links %}
            {% assign lab = l.label | downcase %}
            {% if lab != "abstract" %}
              <a class="btn btn--primary btn--small" href="{{ l.url }}">{{ l.label }}</a>
            {% endif %}
          {% endfor %}
        {% endif %}
      </div>

      {% if p.abstract and p.abstract != "" %}
        <div class="pub-abs" hidden>
          {{ p.abstract }}
        </div>
      {% endif %}
    </div>
  </article>
  {% endif %}

{% endfor %}
</div>

{% unless forloop.last %}
<hr style="margin:24px 0;">
{% endunless %}
{% endfor %}

<script>
  document.addEventListener('click', function(e){
    if (!e.target.classList.contains('js-abs-toggle')) return;
    const card = e.target.closest('.pub-card');
    const abs  = card && card.querySelector('.pub-abs');
    if (!abs) return;
    const isOpen = !abs.hasAttribute('hidden');
    if (isOpen) { abs.setAttribute('hidden',''); e.target.textContent = 'abstract'; }
    else       { abs.removeAttribute('hidden');  e.target.textContent = 'hide abstract'; }
  });
</script>
