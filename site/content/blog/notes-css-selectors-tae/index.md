---
<<<<<<< HEAD
title: Reading CSS Selectors
date: '2019-03-04'
---
=======
title: 'Study Notes: Reading CSS Selectors'
date: '2019-03-04'
---

>>>>>>> a86f269b5db7ab3c5154ab799c1fe343471cbe35
Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Selectors](https://gist.github.com/Ta2Rim/c408589579176c2483fd601ca87ec6be)

# Days 7~8 : Reading CSS Selectors

I already know almost CSS selector yet, but I decide to read again, and remind it.
I like CSS selectors, especially pseudo-elements & pseudo-classes
those enable isolated struction between styling and mark up. I love it. there's no need to make useless div intented to only style thanks for those.

## What I newly learned after reading spec
**Attribute selectors**

- `[att|=val]` Represents an element with the att attribute whose value is a white space-separated list of wrds, one of which is exactly 'val'

**Compare pseudo-elements with pseudo-classes**

- Pseudo-elemnts create abstractions about the document tree beyond those specified by the document language.
  CSS pseudo-element allow style some parts that document language doesn't offer to access. (e.g. `:first letter`, `:first line`, `:before` , `:after`)
- Pseudo-classes classify elements on chracteristics other than their name, attributes or content.
- Neither pseudo-element s nor pseudo-classes appear in the document source or document tree.

**Pseudo-classes**

- UA are not required to reflow a currently displayed document due to pseudo-class transitions.

It means UA may ignore the style rule when dynamic pseudo classes cause change position and canvas reflow. + `a:hover` must be placed after `a:link` and `a:visited` rules. + The language pseudo-class : `:lang(ko)`

**Pseudo-elements**

- UA rewrite HTML paragraph due to pseudo-element, by including the fictional tag sequence.
- `:first-line` pseudo-lement can only be attached to a "block container element",
- while `:first-line` pseudo-element start tag is inserted right after the start tag of the block element,
  the :first-letter pseudo-element tags abut the content.( After the rule p:before {content:'note'}, the selector p:first-letter matches the 'n' of note.

- The `:before` and `:after` pseudo-elements can be used to inset generated content before or after an element's content
>>>>>>> a86f269b5db7ab3c5154ab799c1fe343471cbe35
