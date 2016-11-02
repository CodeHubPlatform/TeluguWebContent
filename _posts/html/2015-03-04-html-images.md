---
layout: post
title: "HTML <strong>చిత్రాలు</strong>"
subtitle: "The major <strong>media</strong> on the Web"
section: html
---

Images అన్ని లో ఉంటాయి `.jpg`, `.gif` formats లో ఉంటాయి .
### Syntax

**Images** use the `<img>` element, which is a **self-closing** element (it only has an opening tag).

'src'_relative_ లేదా _absolute_ URL లు ఉపయోగించవచ్చు.
<ul class="files">
  <li>
    <i class="fa fa-folder-o"></i>
    my-first-website
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        home.html
      </li>
      <li>
        <i class="fa fa-image"></i>
        soyuz-spacecraft.jpg
      </li>
    </ul>
  </li>
</ul>

{% highlight html %}
<p>
  Look at this spacecraft landing!
  <br>
  <img src="soyuz-spacecraft.jpg">
</p>
{% endhighlight %}

<div class="result">
  <p>
    Look at this spacecraft landing!
    <br>
    <img src="https://codehubplatform.github.io/EnglishWebContent/images/soyuz-spacecraft.jpg">
  </p>
</div>

### Dimensions

ప్రతి చిత్రం  2 కొలతలు ఉంటాయి. ఒక ** వెడల్పు ** మరియు ఒక ** ఎత్తు 
HTML లో ఒక చిత్రం insert చేసినప్పుడు, మీరు దాని కొలతలు పేర్కొనాలి
మీరు HTML లో వాకా అవకాశం ఉంది  అది చిత్రం యొక్క కొలతలు మార్చుకోవచ్చు
### Block or inline?


ఒక చిత్రం వెడల్పు మరియు ఎత్తు, మరియు దృష్టి ఒక పెద్ద చతురస్రం అయినప్పటికీ, ఒక చిత్రం  ఒక HTML బ్లాక్ యోక్క  element ఇన్లైన్ element గా ఉన్నటుంది 
`<img>` అనీ వక మూలకం ఒక  స్వీయ ముగింపు మూలకం: ఇది సాంకేతికంగా ఏ ఇతర HTML మూలకం ఉండకూడదు, ఇటువంటి `<a>` `<strong>`లేదా` <em> టాగ్స్  ద్వారా రాస్తారు 
 ఈ inline ఊహించని ఫలితాలు ఇస్తుంది 
{% highlight html %}
<p>
  There is a frog
  <img src="frog.jpg">
  in the middle of the paragraph!
</p>
{% endhighlight %}

<div class="result">
  <p>
    There is a frog
    <img src="https://codehubplatform.github.io/EnglishWebContent/images/frog.jpg">
    in the middle of the paragraph!
  </p>
</div>

ఎందుకంటే HTML లో  content is king చిత్రాలు  కాబట్టి  quality ప్రదర్శించబడుతుంది.