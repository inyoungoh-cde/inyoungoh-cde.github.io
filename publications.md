---
layout: single
title: Publication
permalink: /publications/
author_profile: true
classes: wide
---

{% assign groups = "International|Under review|Domestic|Patents Registered" | split:"|" %}
{% for g in groups %}
### {{ g }}
{:.archive__subtitle}

{%- comment -%}
  robust filter:
  - category == g (대소문자/공백 무시)
  - 또는 categories 배열에 g 포함
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
  <!-- 묶음: 한 칸 카드로 그대로 렌더 -->
  <article class="pub-card pub-card--list">
    <div class="pub-list">
      {{ p.output | default: p.content }}
    </div>
  </article>

  {% else %}
  <!-- 일반 카드 -->
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
