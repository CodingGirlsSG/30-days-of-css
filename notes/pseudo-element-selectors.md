# `::before`, `::after`, and other "Pseudo-Element" Selectors

We used a couple of fancy looking selectors, the `::before` and the `::after`, to draw the rounded parts of the heart. They belong to "pseudo-elements", to be differentiated from "pseudo-selectors", and are described in the following specs.

[//]: <> " TODO: Add link "

[_Specs: Pseudo-Elements Module Level 4_](https://www.w3.org/TR/css-pseudo-4/)

There are three types of "pseudo-element" selectors:

- Typographic: `::first-line`, `::first-letter`
- Highlight: `::selection` for user selected texts, `::spelling-error` for spelling errors detected by the browser according to users' language, the similar `::grammar-error`, etc
- Tree-Abiding: `::before`, `::after`, `::marker` for list items, and `::placeholder` for input

The `::before` and `::after` are "tree-abiding pseudo-elements".

> When their computed `content` value is not `none`, these pseudo-elements generate boxes as if they were immediate children of their originating element, and can be styled exactly like any normal document-sourced element in the document tree.

Because they are generated only when their computed content is not `none`, we need to put `content: ''` in order for them to appear on the screen.

And note that we could legitimately use two separate DOM elements, maybe we name them `.left` and `.right`, to achieve the exact same effect. But the `::before` and `::after` trick is very common in web development. It saves a couple of DOM nodes while making your DOM structure more expressive, i.e., your pseudo-elements are always affilicated to its _originating element_. All thanks to the fact that they are "born equal" with normal elements:

> ...and can be styled exactly like any normal document-sourced element in the document tree

To name a few more use cases, the `::before` and `::after` pseudo-elements are commonly used to:

<!-- TODO: add use cases here perhaps with links -->

Here's a bonus question: If you put `::before` to a paragraph, say:

```css
/* css */
p::before {
  content: "<3";
}
```

```html
<!-- html -->
<p>Hello, coding girl!</p>
```

What will `p::first-letter` select? The "H" in the content of the sentence, or the "<" in the `::before`` pseudo-element?

<!-- mentions the difference between selector rules? -->
<!-- _Specs: Selectors Level 4_ -->
