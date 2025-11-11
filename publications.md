---
layout: single
title: Publication
permalink: /publications/
author_profile: true
classes: wide
---

{% assign groups = "International|Under review|Domestic" | split:"|" %}
{% for g in groups %}
### {{ g }}
{:.archive__subtitle}

{% assign pubs = site.publications | where:"category", g | sort:"year" | reverse %}
{% for p in pubs %}

{% if p.list %}
{::nomarkdown}
<div class="pub-item" style="margin:18px 0;">
  <div class="pub-list">
    {{ p.output }}
  </div>
</div>
{:/}
{% else %}
{::nomarkdown}
{% assign pid = p.title | slugify %}
<div class="pub-item" style="display:flex;margin:18px 0;">
  {% if p.thumbnail %}
  <div style="flex:0 0 160px;">
    <img class="pub-thumb" src="{{ p.thumbnail }}" alt="{{ p.title }}" loading="lazy">
  </div>
  {% endif %}

  <div style="flex:1;margin-left:16px;">
    <div class="pub-title" style="font-weight:600;margin-bottom:6px;">{{ p.title }}</div>
    <div class="pub-authors" style="margin-bottom:4px;">{{ p.authors }}</div>
    <div class="pub-venue" style="font-style:italic;margin-bottom:8px;">
      {{ p.venue }}{% if p.year %} ({{ p.year }}){% endif %}
    </div>

    <div class="pub-actions">
      {% if p.abstract %}
      <button class="btn btn--primary btn--small abs-toggle"
              type="button"
              data-target="abs-{{ pid }}"
              aria-expanded="false">abstract</button>
      {% endif %}
      {% if p.links %}
        {% for l in p.links %}
          <a class="btn btn--primary btn--small" href="{{ l.url }}" style="margin-right:6px;">{{ l.label }}</a>
        {% endfor %}
      {% endif %}
    </div>

    {% if p.abstract %}
    <div id="abs-{{ pid }}" class="abs-panel" hidden>
      {{ p.abstract | markdownify }}
    </div>
    {% endif %}
  </div>
</div>
{:/}
{% endif %}

{% endfor %}

{% unless forloop.last %}
<hr style="margin:24px 0;">
{% endunless %}
{% endfor %}

{::nomarkdown}
<script>
(function () {
  var buttons = document.querySelectorAll('.abs-toggle');
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('data-target');
      var panel = document.getElementById(id);
      if (!panel) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      panel.hidden = expanded;
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'abstract' : 'hide abstract';
    });
  });
})();
</script>
{:/}
