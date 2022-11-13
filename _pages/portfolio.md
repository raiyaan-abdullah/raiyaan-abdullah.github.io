---
layout: archive
title: ""
permalink: /projects/
author_profile: true
---

{% include base_path %}

* Research Projects

{% for post in site.researchprojects %}
  {% include archive-single.html %}
{% endfor %}

* Academic Projects

{% for post in site.academicprojects %}
  {% include archive-single.html %}
{% endfor %}

