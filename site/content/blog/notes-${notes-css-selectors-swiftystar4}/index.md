---
title: CSS Selectors
date: '2019-03-07'
---

Original post by [swifty_star4](https://github.com/swiftystar4): [Understanding about CSS Selectors](https://gist.github.com/swiftystar4/926f675e010d2d2532f1f00e38006a5a)

# Understanding about CSS Selectors - #30DaysofCSSGirls

## CSS Selectors

### Definition

#### CSS selectors are used to find or select HTML elements based on their element name, id, class, attribute and etc. 

### Different types of Selectors

1. Universal Selectors 
- Selects all elements and restricted to a specific namespace or to all namespaces. 
- Syntax: `* us | * *|*`
- Example using * to select all elements of the document.

2. Type Selectors
- Selects all elements that match the given node name.
- Syntax: `elementname`
- Example: input will match any <input> element.

3. Attribute Selectors
- Select elements based on the value of the given attribute which have certain attributes defined inside the code.
- Syntax:
 1.	`[attr]` -> Match when element sets “att” attribute (no matter what the value of the attribute)
 2.	`[att = val]` -> Match when the element’s “att” attribute value (is exactly)
 3.	`[att ~= val]` -> Represent an element with “att” attribute which the value is a white space-separated list of words, one of word is exactly “val”
 4.	`[att|=val]` -> Represent an element with “att” attribute which exactly “att” or starts with “att” and followed by “-”
- Example:
 1.	`h1 [title] { color: blue }` = matches all h1 elements that specify the “title” attribute (no matter what value)
 2.	`span [class = example] { color: blue; }` matches all span elements which “class” attributes has exactly the value 
 3.	`span[hello="Cleveland"][goodbye="Columbus"]` { color: blue; } matches all span elements that “hello” attribute has value of “Cleverland” and “Goodbye” attribute has value of “Columbus”
 4.	`a[rel~="copyright"]` value “copyright copyleft copyeditior” for “rel” attribute
`a[href="http://www.w3.org/"]` match when “ref” has the value of “http://www.w3.org/”
matches the differences between “=” and “~”. 

4.  ID Selectors
- Select an element based on the value of the id attribute. Only one with a given ID in a document. 
- Syntax: `#idname`
- Example: #name will match the element that has the value of ID “name”.

### Different types of Combination

1. Adjacent Sibling Combination
- E1 + E2 (subject of the selectors). The selector matches if E1 & E2 share same parent in the code, E1 merge with E2 and ignore text and comments inside the code.
- Syntax:  `h1 + h2 { margin-top: -5mm }`
- Example: E1 + E2 can merge together when the selector matches if E1 & E2 share same parent inside the code.

2. Child Combination
- Selects an element that an element is the child of some element and also made up of two or more selectors separated by “>”.
- Syntax:
> `Body > P { line-height : 1.3}`
> `Div ol> li p`
- Example:
1.	P element that is descendant of LI
2.	LI element must be the child of an OL element
3.	OL element must be a descendant of DIV

3. Descendant Selectors
- Selects an element that the descendant of another element belongs in the document tree and also made of two or more selectors separated by white space.
- Syntax: 
> `h1 { color : red }`
> `em { color : red }`
> `h1 em { color : blue }`
- Example: using same `{ color : red }` at h1, em but near h1, em change colour into blue instead of red.

### Different types of Pseudo-Classes

1. :first-child pseudo-class
- Select an element that is the first child element of some other element
- Example:
- `div > p:first-child { text-indent: 0 } = selector` matches any P element that is the first child of a DI element and rule suppresses indentation for the first paragraph of a DIV
> `* > a:first-child = A` is first child of any element
> `a:first-child` = Same

2. link pseudo-classes: :link and :visited
- Mutally Exclusive 
- Provide the pseudo-classes ‘:link’ and ‘:visited’ to differentiate them
- `:link` applies link that haven’t yet been visited by the user
-	`:visited` applies once the link has been visited by the user
- Return a visited link to the (unvisited) ‘:link’ state at certain point of time
- `:link  { color: red }` = the link is not visited yet by the user
- `a.external:visited { color: blue }` = the link is visited already by the user

3. language pseudo-class: :lang
- Possible to write selectors in CSS that match an element based on its assigned language.
- Example: 
- HTML – combination of the “lang” attribute, META element and information from the protocol (such as HTTP Headers)
- XML – attribute using xml:lang
- C Language – ':lang(C)' matches if the element is in language C and based only on C (equal to hyphen-separated substring of, language value and '|=' operator

### Different types of Pseudo-Elements

1.  :first-line pseudo-element
- Select special styles to the contents of the first formatted line of a paragraph
- Example:

- ` p:first-line { text-transform: uppercase }` = "change the letters of the first line of every paragraph to uppercase". " p:first-line " didn’t select HTML element but select a pseudo-element that telling to insert uppercase at the beginning (first line) of every paragraph

- I wish I have a map of my mind, so I could find a way through my thoughts without always getting lost in fields of daydreams. And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.

- Output: **I WISH I HAVE A MAP OF MY MIND, SO I COULD FIND A WAY THROUGH MY THOUGHTS WITHOUT ALWAYS GETTING LOST IN FIELDS OF DAYDREAMS.** And in the morning, they shook their pillows violently, hoping all the dreams they lost that night would tumble out. You can drive all night looking for the answer in the pouring rain. You want to find peace of mind looking for the answer inside the pouring rain.

2. :first-letter pseudo-element
- Select the first letter of the first line of a block and not preceded by other content such as images or inline tables on the line. - - Used for “initial caps” and “drop caps” that common typographical effects for the start of the paragraph. 

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

## References:
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
- https://drafts.csswg.org/css2/selector.html#universal-selector
- https://www.sitepoint.com/css-selectors/
