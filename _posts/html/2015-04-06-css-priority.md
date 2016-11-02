---
layout: post
title: "CSS <strong>Priority</strong>"
subtitle: "When several rules <strong>collide</strong>"
section: css
---

ఒక HTML ఎలిమెంట్  బహుళ CSS నియమాలు లక్ష్యం చేసుకుంటుంది.  ఉదాహరణకు ఒక సాధారణ paragraph ఉపయోగిస్తాను::

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

మేము కేవలం దాని **tag** పేరు ఉపయోగించి ఈ paragraph మార్చుకోగలం:


{% highlight css %}
p{ color: blue;}
{% endhighlight %}

లేదా మేము దాని **Class** పేరు ఉపయోగించవచ్చు:
{% highlight css %}
.message{ color: green;}
{% endhighlight %}

లేదా మేము దాని **id** పేరు ఉపయోగించవచ్చు:

{% highlight css %}
#introduction{ color: red;}
{% endhighlight %}

బ్రౌజర్ ఒక రంగును మాత్రమే  ఈ పేరా కు  దరఖాస్తు ఎంచుకోవచ్చు  ఎందుకంటే, ఇది నిరణయించుకొంటూ  ఉంటుంది ఇతర వాటి నుండి  ఏ  CSS రూల్స్ ప్రాధాన్యత తీసుకొంటాయి. ఇది  CSS ప్రాధాన్యత (లేదా CSS విశిష్టత గురించి).

మా ఉదాహరణలో, పేరా ఎరుపు ఉంటుంది ఎందుకంటే ఒక #ID సెలెక్టర్ మరింత నిర్దిష్ట మరియు ఇతర సెలెక్టర్లు కన్నా మరింత ముఖ్యం.

### Order of CSS rules

 మీ CSS లో ఇలాంటి సెలెక్టర్లు ఉంటే, చివరిగా నిర్వచించిన ఒక దానికి ప్రాధాన్యత ఉంటుంది.

{% highlight css %}
p{ color: green;}
p{ color: red;}
/* Paragraphs will be red */
{% endhighlight %}

### The 100 measure

ఎలా "శక్తివంతమైన" ఒక CSS పాలన గుర్తించడానికి ఒక శీఘ్ర మార్గం, సెలెక్టర్ల విశిష్టత కొలవడం ద్వారా ఉంది:

* `#id` selectors విలువ 100
* `.class` selectors విలువ 10
* `tag` selectors విలువ 1

The selector with the highest "score" will prevail, _no matter the order in which the CSS rules appear_.

{% highlight css %}
#introduction{ color: red;}
.message{ color: green;}
p{ color: blue;}
{% endhighlight %}

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

<div class="result">
  <p style="color: red;">
    MarkSheet is a free HTML and CSS tutorial.
  </p>
</div>

The `#introduction{ color: red;}` rule is more _specific_ than the others because ids must be **unique** throughout a webpage, and can thus only target **one** element.

`.message{ color: green;}` can target _any_ HTML element with a `class="message"` attribute, and is consequently less specific. Same goes for `p{ color: blue;}` which can target _any_ HTML paragraph.

### How to avoid conflicts

While writing your CSS, it's easy to write **conflicting rules**, where the same _property_ is applied several times.

To avoid that:

* only use **classes**: use `.introduction` instead of `#introduction`, even if that element only appears once in your webpage
* avoid applying **multiple classes** on a single HTML element: don't write `<p class="big red important">` but rather `<p class="title">` which is more semantically descriptive
* don't use **inline styles** like `<div style="background: blue;">`
