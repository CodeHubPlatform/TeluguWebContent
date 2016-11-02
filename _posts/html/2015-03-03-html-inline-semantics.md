---
layout: post
title: "<strong>Inline</strong> semantics"
subtitle: "The small parts <em>within</em> a block of text"
section: html
---


 పేరాగ్రాఫులు మరియు జాబితాలు  మొత్తం  బ్లాక్స్  యొక్క సమాచారాన్ని  గుర్తించడానికి ఉదేశించబడినవి. అయితే మేము కొన్ని సందర్భాలలో వాటి గురించి వివరణ ఇస్తాము.
### Strong

కొన్ని  ముఖ్యమైన  పదాలు కోసం `<strong>` ట్యాగ్ను వాడవచ్చును
{% highlight html %}
<p>
  ఇది <strong> ముఖ్యమైంది , </ strong> ట్యాగ్ను దీనికి  అంతగా ప్రదానము లేదు .
</p>
{% endhighlight %}

<div class="result">
  <p>
    ఇది <strong> ముఖ్యమైంది , </ strong>ఈ ట్యాగ్ను దీనికి  అంతగా ప్రదానము లేదు.
  </p>
</div>

By default, `<strong>` కొన్ని అంశాలు బోల్డ్ లో   కనిపిస్తాయి , కానీ అది బ్రౌజరుయొక్క డిఫాల్ట్  అని గుర్తుంచుకోండి . బోల్డ్ లో కొంత టెక్స్ట్ ఉంచాలి `<strong>` _only_ కానీ ఉపయోగించడానికి వేలు  లేదు, దిలీకి బదులుగా ఇంకా నమాచరం ఇస్తాము 

### Emphasis

_emphasized_ పదాలు కోసం, `<em>`ఈ ట్యాగ్ను వాడవచ్చును
{% highlight html %}
<p>
 ఇది <em> emphasizeds </ em>ఈ ట్యాగ్ను కానీ ఇది కాదు.
</p>
{% endhighlight %}

<div class="result">
  <p>
 ఇది <em> emphasizeds </ em>ఈ ట్యాగ్ను కానీ ఇది కాదు.
  </p>
</div>

మీరు `<em>` అని రాస్తే అది _italic_ భాషాలో ప్రదశించబడుతుంది 
### Abbreviations

W3C లేదా CD వంటి నిర్వచనాలు  `<abbr>` లో  ఉపయోగించవచ్చు:
{% highlight html %}
<p>
  I just bought a <abbr>CD</abbr>.
</p>
{% endhighlight %}

మీరు ముఖ్యమైన అంశాల్ని `title` ** వ్రాసుకోవచ్చు  **:
{% highlight html %}
<p>

 మీరు  <abbr title = "Compact Disc">CD </ abbr> అని రాస్తే అది CD మీద  క్లిక్ చేసినపుడు అది నిర్వచనం ఇస్తుంది </p>
{% endhighlight %}

<div class="result">
  <p>
 మీరు  <abbr title = "Compact Disc">CD </ abbr> అని రాస్తే అది CD మీద  క్లిక్ చేసినపుడు అది నిర్వచనం ఇస్తుంది </p>
  </p>
</div>

### Inline quotes

<Blockquote>` అనేది  ఒక ** బ్లాక్ స్థాయి ** అంశం. `<Q>`: ఇది ఒక ** online **వార్సిన్.
{% highlight html %}
<p>
అతను చెప్పారు <q> "HELLO World" </ q> మరియు '/'  అనేది ఎడమ వైపు ఉండాలి</p>
{% endhighlight %}

<div class="result">
  <p>
అతను చెప్పారు <q> "HELLO World" </ q> మరియు '/'  అనేది ఎడమ వైపు ఉండాలి</p>
  </p>
</div>

### Other inline elements

మీరు ఎంపికచేసుకోవడనికి  ఇతర [inline అర్థ అంశాలు] (https://developer.mozilla.org/en/docs/Web/HTML/Element#Inline_text_semantics) అందుబాటులో  ఉన్నాయి
*[CD]: Compact Disc
*[W3C]: World Wide Web Consortium
