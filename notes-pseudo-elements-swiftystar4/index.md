---
title: 'Study Notes: Pseudo Elements'
date: '2019-03-09'
---

Original post by [swifty_star4](https://github.com/swiftystar4): [Understanding about Pseudo Elements]
(https://gist.github.com/swiftystar4/0ecd102e6da2df0b1461c72d1a295632)

# Understanding about Pseudo Elements - #30DaysofCSSGirls

## Pseudo Element

### Definition

#### Psuedo Element represent abstract elements of the document beyond those elements explicitly created by the document language.

### What is the difference between pseudo-element selectors and pseudo-selectors?

#### Pseudo-Elements

- Represent entities that aren't included inside HTML
- Represent abstract about the document tree beyond those sepcified by the document tree beyond those specified by the document language
- Allow style sheet for assign style to content that didn't exist on the source document

#### Pseudo-Selectors (Pseudo-classes)
- Allow the selectors of elements based on state information that isn't contained in the document tree
- Classify elements on characteristic other than name, attributes or content and principle characteristic can't be removed by the document tree
- Dynamic-based that an element can obtain or lose a pseudo-class while a user interacts with the document

### What are three types of pseudo-element selectors? (Taken from CSS Selectors)

1.  :first-line pseudo-element
- Select special styles to the contents of the first formatted line of a paragraph
- Example:

- ` p:first-line { text-transform: uppercase }` = "change the letters of the first line of every paragraph to uppercase". " p:first-line " didn’t select HTML element but select a pseudo-element that telling to insert uppercase at the beginning (first line) of every paragraph

- I wish I have a map of my mind, so I could find a way through my thoughts without always getting lost in fields of daydreams. And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.

- Output: **I WISH I HAVE A MAP OF MY MIND, SO I COULD FIND A WAY THROUGH MY THOUGHTS WITHOUT ALWAYS GETTING LOST IN FIELDS OF DAYDREAMS.** And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.

2. :first-letter pseudo-element
- Select the first letter of the first line of a block and not preceded by other content such as images or inline tables on the line.
- Used for “initial caps” and “drop caps” that common typographical effects for the start of the paragraph. 

`p { line-height: 1.1 }`
`p:first-letter { font-size: 3em; font-weight: normal }`
`span { font-weight: bold }`
`<p> <span> I wish I have a map of my mind </span>, so I could find a way through my thoughts without always getting lost in fields of daydreams. And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.  </p>`
 
- Output: _**I**_ **wish I have a map of my mind**, so I could find a way through my thoughts without always getting lost in fields of daydreams. And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.  

3. :before and :after pseudo-elements
- Used to insert generated content before or after an element's content

`p.special:before { content: "Daydream! " }`
 `p.special:first-letter { color: blue }`
 
- Before: Daydream
- After: **D** aydream!

### What is the criterion for pseudo-element selectors to show up?

- **Tree-Abiding Pseudo-Elements** required to fit within the box tree
- Inherited any inheritable properties from their originating elements

**Generated Content Pseudo-Elements: ':before' and ':after'**
- **':before'**  represents a styleable child pseudo-element immediately _before_ the originating element's actual content
> `p.note::before { content: "Note: "}`
- **':after'** resepresents a styleable child pseudo-element immediately _after_ the originating element's actual content

**List Markers: the '::marker' pseudo-element**
- Represent the automatically generated marker box of a list item
- **Font Properties**
- **Colour Property**
- **Text-Combine-Upright**
> `::marker {font-variant-numeric: tabular-nums; }`

**Placeholder Input: the '::placeholder' pseudo-element**
- Represent the placeholder text in an input field: text
- Provides a hint to the user on how to input on the text form 

## References:
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
- https://drafts.csswg.org/css2/selector.html#universal-selector
- https://www.sitepoint.com/css-selectors/
- https://www.w3.org/TR/css-pseudo-4/#generated-content
