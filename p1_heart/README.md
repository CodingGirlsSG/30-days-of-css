# Week 1

## Day 1: Heart Shape

```
git checkout w1d1-heart-shape
```

Objective: Draw a heart on the screen.

[//]: <> " Add tutorial link here "

**Study Notes**

### The `margin` Shorthand

Remember the classic "trick" to horizontally center the boxes?

```css
margin: 0 auto;
```

And it reads, set vertical margins to `0`, and horizontal margins to `auto`. This way, the horizontal space beyond the box gets evenly distributed, thereby horizontally centralizing the box.

[//]: <> " TODO: add css specs link "

Turns out that is a "shorthand" for writing margins. Let's first read what the CSS specs says about the `margin` property:

> The `margin` property is a shorthand property for setting `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` at the same place in the style sheet.

When we use the shorthand form for `margin`, `padding`, etc, we can provide one, two, three, or four values. The specification explicitly defines which values it will use for the top, right, bottom, and left, respectively.
Are we going to remember all of those 😱.

> [//]: <> " TODO: quote the specs here "

I struggled to remember all those cases, too. But turns out I never had to. There's a very intuitive way of thinking about this:

- You always start with top
- You rotate clockwise: top, right, bottom, left
- When you do not provide enough (4) values, the undefined position first follows its opposite, then follows its prior value
  - `margin: 0 auto`: top gets `0` and right: `auto`, bottom follows top, yielding `0`, left follows right, yielding `auto`
  - `margin: 0`: everyone follows top, yielding `0`
  - `margin: 160px auto 0`: top gets `160px`, right gets `auto`, bottom gets `0`, left follows right and gets `auto`

There are many places where it follows the same convention:

- `padding`
- `border-width`
- `border-color`
- `border-style`
- ... and many more

Therefore, I call it "the css's flavor of orderness". Once you get used to the CSS' way of thinking of the space, you say everything in one place, so neat, concise, and all cases follow just naturally.

### `::before`, `::after`, and other "Pseudo-Element" Selectors

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

### `position: absolute` -> css positions

Work in Progress
