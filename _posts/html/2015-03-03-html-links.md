---
layout: post
title: "HTML <strong>Links</strong>"
subtitle: "The <strong>core</strong> of the Web"
section: html
---

ప్రతి ఇతర మధ్య సమాచార  అందిపుచ్చుకోవడానికి , HTML అవసరం.
ఈ "HyperText"అనేది HTML లో వక భాగము. ఇది మీరు ఎటువంటి Links ని ఉపయోగిస్తున్నారో తెలుపుతుంది 
HTML లో  inline element ను `<a>`ఈ  ట్యాగ్ తో రాస్తారు.
`Href` అనేది  (హైపర్టెక్స్ట్ సూచన)  (మీరు  దేనిని క్లిక్ చేసినప్పుడు అది నావిగేషన్  లో )  నిర్వచిస్తుంది సూచిస్తుంది 
{% highlight html %}
<p>
 ఇతర సమాచారం కొరకు  <a href="http://www.google.com"> Google </a> సందర్శించండి.</p>
{% endhighlight %}

<div class="result">
  <p>
    ఇతర సమాచారం కొరకు  <a href="http://www.google.com"> Google </a> సందర్శించండి.
  </p>
</div>

webpages లో links ప్రాధమిక  సమాచారం  కోసం ఉన్నాయి మీరు లింక్లపై క్లిక్ చేయడం ద్వారా మరి కొంత సమాచారం పొందవచ్చు 

ఇందులో 3 భాగాలు ఉన్నాయి 
* **anchor**లక్ష్యాలు మరియు నావిగేషన్ వక పేజీ లో ఉంటాయి 
* **relative** URLs లు, సాధారణంగా ఒకే వెబ్ సైట్లో ఉంటాయి 
* **absolute**URLs లు, సాధారణంగా వేరొక వెబ్ సైట్లో ఉంటాయి

### Anchor targets

**Anchor** లక్ష్యాలు మరియు నావిగేషన్ వక పేజీ లో ఉంటాయి .  `#` తో మీరు ఒక నిర్దిష్టమైన  ID`ద్యారా  ఒక HTML లక్ష్యంగా చేసుకోవచ్చు.

For example, `<a href="#footer">` will navigate to the `<div id="footer">` within the same HTML document. This type of href is often used to navigate back to the top of the page.

### Relative URLs

మీరు అదే వెబ్సైట్ మరొక పేజీకి వెళ్లాలి అంటి  URL లు ఉపయోగించవచ్చు
But relative to what? Well, relative to the **current page**.


వక ఉదాహరణ చూదాం
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
        <i class="fa fa-file-code-o"></i>
        contact.html
      </li>
    </ul>
  </li>
</ul>

`ఈ home.html`, మీరు` contact.html` ఒక లింక్ను వివరించేందుకు ఉపయోగపడుతుంది .


రెండు ఫైళ్లను వకి ఫోల్డర్  లో ఉంటి  కేవలం `home.html` వ్రస్థి సరిపోతింది 
{% highlight html %}
<p>
  Go to the <a href="contact.html">contact page</a>.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Go to the <a href="contact.html">contact page</a>.
  </p>
</div>

ఒక వాస్తవ వెబ్సైట్లో, ప్రక్రియ పోలి ఉంటుంది.
ఈ website లో http://ireallylovecats.com ,index.html మరియు gallery.html అనీ  2 webpages ఉన్నాయి 
<ul class="files">
  <li>
    <i class="fa fa-folder-o"></i>
    ireallylovecats.com
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        index.html
      </li>
      <li>
        <i class="fa fa-file-code-o"></i>
        gallery.html
      </li>
    </ul>
  </li>
</ul>

In `index.html` you could write the following link:

{% highlight html %}
<p>
  Visit the <a href="gallery.html">Gallery</a>!
</p>
{% endhighlight %}

Remember: websites are hosted on **computers** just like the one you're currently using. They are simply called **"servers"** because their sole purpose is to host websites. But they still have **files** and **folders** like "regular" computers.
{: .info}

### Absolute URLs

మీరు ఒక friends తో మీ childrens గ్యాలరీ భాగస్వామ్యం అనుకుంటే, మీరు కేవలం gallery.html` పంపడానికి కుదురుతుంది ,URL కేవలం  కంప్యూటర్లో ఉండే HTML డాక్యుమెంట్లకు పనిచేస్తుంది 
పూర్తి సమాచారం కొరకు  `http://ireallylovecats.com/gallery.html`.

ఈ URL 3 భాగాలు విభజింపబడినది 

* **protocol** `http://`
* **domain** `ireallylovecats.com`
* **file path** `gallery.html`

ఈ URL ఉపయోగించి మీరు యకుడైన పూర్తి సమాచారం పొందవచ్చు 
మీరు సాధారణంగా వెబ్ URL ద్యారా వక WEB SITE నుండీ కావచ్చు 

In your `http://ireallylovecats.com/gallery.html` file, you could write:

{% highlight html %}
<p>
  Find more images of my cats on my <a href="https://twitter.com/ireallylovecats">Twitter account</a>!
</p>
{% endhighlight %}

### Relative or absolute links?

ఉదాహరణకు  మొదటి నుండి రెండవ లింకు అనుకుందాం. మీరు పూర్తిగా URL ఉపయోగిస్తారు. సో మీరు href="http://ireallylovecats.com/gallery.html"> వెళ్ళండి రెండవ పేజీ </a> `మీ` index.html` ఫైలులో `<a అని రాయండి 
రెండు ఫైళ్లను అదే డైరెక్టరీలో ఉంటాయి ఎందుకంటే, మీరు `<a href="first-blog-post.html">` ఉపయోగించారు . మీరు ఒకేసారి రెండు ఫైళ్లు తరలించి  మరియు అదే డైరెక్టరీ ఉంచారు   డొమైన్లు మారినప్పుడు ఈ సంబంధిత విధానం ఉపయోగపడుతుంది.