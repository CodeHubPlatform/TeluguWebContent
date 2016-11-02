---
layout: post
title: "HTML <strong>ఎలెమెంట్స్</strong>"
subtitle: "HTML లో 2 ప్రధాన రకాల ఎలెమెంట్స్ ఉన్నాయి"
section: html
---

HTML లో, మీరు ప్రధానంగా 2 రకాల ఎలెమెంట్స్ చూడవచ్చు :

* **block** ఎలెమెంట్స్ అంటే :

    * paragraphs `<p>`
    * lists: unordered (with bullet points) `<ul>` or ordered lists (with numbers) `<ol>`
    * headings: from 1st level `<h1>` to 6th level headings `<h6>`
    * articles `<article>`
    * sections `<section>`
    * long quotes `<blockquote>`

* **inline** ఎలెమెంట్స్ అంటే :

    * links `<a>`
    * emphasised words `<em>`
    * important words `<strong>`
    * short quotes `<q>`
    * abbreviations `<abbr>`

**Block** ఎలెమెంట్స్ అనేవి మీ యొక్క వెబ్ పేజీ లో ప్రధాన భాగాలను  ** స్ట్రక్చర్  ** చేయడం కొరకు ఉపయోగపడును.

**Inline** elements are meant to differentiate _part_ of a text, to give it a particular function or meaning. Inline elements usually comprise a single or few words.


{% highlight html %}
<p>Have you seen this <a href="http://www.youtube.com">amazing video</a> on YouTube?</p>
{% endhighlight %}

### Opening and closing tags

అన్ని black-level ఎలిమెంట్లు ఒక ప్రారంభ మరియు ముగింపు tags కలిగి ఉన్నాయి.

As a result, self-enclosing elements are **inline** elements, simply because their syntax don't allow them to contain any other HTML element.

<div class="table">
  <table>
    <tr>
      <th class="empty"></th>
      <th>Have opening and closing tags</th>
      <th>Self-enclosing</th>
    </tr>
    <tr>
      <th>Block elements</th>
      <td>
        <code>&lt;p&gt;</code>
        <code>&lt;/p&gt;</code>
        <br>
        <code>&lt;ul&gt;</code>
        <code>&lt;/ul&gt;</code>
        <br>
        <code>&lt;ol&gt;</code>
        <code>&lt;/ol&gt;</code>
      </td>
      <td>
        <strong>Impossible</strong>
      </td>
    </tr>
    <tr>
      <th>Inline elements</th>
      <td>
        <code>&lt;a&gt;</code>
        <code>&lt;/a&gt;</code>
        <br>
        <code>&lt;strong&gt;</code>
        <code>&lt;/strong&gt;</code>
        <br>
        <code>&lt;em&gt;</code>
        <code>&lt;/em&gt;</code>
      </td>
      <td>
        <code>&lt;input&gt;</code>
        <br>
        <code>&lt;br&gt;</code>
        <br>
        <code>&lt;img&gt;</code>
      </td>
    </tr>
  </table>
</div>

### HTML ఎలెమెంట్స్ ఇతర రకాల

Black / inline ఎలెమెంట్స్ లో అనేక మినహాయింపులు ఉన్నాయి, కానీ మీరు చాలా తరచుగా ఎదుర్కొనేవి ఇవి ::

* **list items** for the `<li>`
* **table**, **table rows**, **table cells** for `<table>`, `<tr>` and `<td>` respectively
