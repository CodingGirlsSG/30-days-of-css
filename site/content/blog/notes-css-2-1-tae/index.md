---
title: 'Study Notes: Reading Introduction to CSS 2.1'
date: '2019-03-01'
---

Study notes by [tae](https://github.com/Ta2Rim), also posted [here](https://gist.github.com/Ta2Rim/8df3a47d3f50530e39d3c845c58f2ee9).

# Reading introduction to CSS 2.1 - Question

## What are the ways to include stylesheets to webpages?

CSS can be used with any structured document format.

1. HTML

- within HTML document (STYLE element)

```
<STYLE>
  h1 {color : red}
</STYLE>
```

- via an external style sheet (LINK element)

```
<LINK rel="stylesheet" href="app.css" type="text/css">
```

For maximum flexibility, the way that link to an exteral style sheet is better.

2. XML

- via an extenral style sheet (processing instruction)

```
  <?xml-stylehseet type="text/css" herf="app.css"?>
```

Unlike HTML, Element names in XML are case-sensitive. So a selector writen in lowercase is different from uppercase.

## How does CSS combine multiple stylesheets that apply to the same webpage?

When CSS combine multiple stylesheets, there would be a lot of confilcts between different values in CSS.
To resolve this problem, the rule determine the final presentation of document. Because CSS rule tries to influence only one of properties needed for rendering an HTML document.

## What are the steps a UA (browser) takes in order to apply styles to their underlying documents?

it's according to CSS processing model.

1. Parse the source document and create a document tree.
2. Identify the target media type. (e.g. print, screen, tty ...etc)
3. Retrieve all style sheets associated with the document that are specified for the target media type
4. Annotate every element of the document tree by assigning a single value to every property.
5. From the annotated document tree, generate a formatting structure.
6. Transfer the formatting structure to the target medium. (e.g. print the results, display them on the screen, render them as speech)

## Name a few strengths and constraints of CSS.

**Strengths (CIIR)**

- Compatibility

  CSS 2.1 user agent can understand CSS1 style sheet. and vice versa. Although it can't understand all of enhanced documents. but all content is presented.

- Isolation

  CSS let change the style sheet with little or no impact on the markup.

- Independence (to vendor, platform, device)

  CSS enable documents to remain vendor, platform, and device independent. and CSS 2.1 also allows authors to target a style sheet for a group of device.

- Richness

  Providing authors with a rich set of rendring effects.

**Constraints (LA)**

- Limited

  For all media, there is canvas that means 'the space where the formating structure is rendered'. The canvas is infinite for each dimension of the space. but in CSS established by user agent, User agent may render to a page impose width and height constraints.

- Abandonment

  In CSS rule, there's no more syntax for structure. only selector and declaration exist. So, in perspective of maintaining some style, CSS has weakness.

---

The more I study about CSS, the more I realize that CSS is amazing. Thanks for CSS, I can express what I imagined through CSS. I like CSS's richness very much. I'll show me to other people with my own website(with CSS).

---

we can comment or ask something or correct some mistakes... whatever reply on this markdown. thanks for reading! Let's study together, passionately!!! 😃
