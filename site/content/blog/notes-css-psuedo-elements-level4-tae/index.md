---
title: 'Study Notes: Reading CSS Pseudo-Elements Module Level 4'
date: '2019-03-06'
---

Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Pseudo-Elements Module Level 4](https://gist.github.com/Ta2Rim/9bf65384e2683c8e4ed940ffac7f3e70)

# Reading CSS Pseudo-Elements Module Level 4
that's little bit long spec.......... but finally I've done reading this!!
## what I newly learned !!!
### Typographic Pseudo-elements
#### ::first-line
  - `::first-line` pseudo-element can only have an effect when attached to a block container. (that's not out-of flow due to floating or positioning)
  - fictional tag sequence helps to show how properties are inherited.
#### ::first-letter
  - `::first-letter` pseudo-element can be used to create 'initial caps' and drop caps' 
    + *dropcap : the first character of the first paragraph is made larger, taking up several lines of text or the first few sentences in typographic effects.
    
    ![1](https://user-images.githubusercontent.com/41318449/53882058-9dc8e800-4058-11e9-9d48-d9a7dd545fc4.png)
    
  - basically, UA may calculate how many columns ::first-letter for dropcap expand. with `initial-letter` property, author can choose size of columns.
  
    ![2](https://css-tricks.com/wp-content/uploads/2017/01/css-almanac-initial-letter-calculate.gif) 
      
      (Changing the property to occupy 1, 2 and 4 lines)
      ** In pervious levels of CSS, User Agents were allowed to choose a line height, width and height based on the shape of the letter. This possibility has been intentionally removed, as it proved to be a poor solution for the intended use case (Drop caps). **

  - Following additional rules of each languages, `::first-letter` doesn't mean that 'ONE' character. In Dutch, the letter combination IJ appears at the beginning of an element.
  - inherit from `::first-line`
  - For now, `::first-letter` only applies block container desendant
  
  - ``` p:before { content : 'Note'; } ```
  If `:before` element exists, ::first-letter would be 'N' of note

### Highlight Pseudo-elements
- The UA should use the OS-default highlight colors for `::selction` when neigher `color` nor `background-color` has been specified by the author
- Due to security problem, UA that implement ::spelling-error and ::grammer-error must prevent pages from being able to read the styling of such highlighted segments.
- Priority to paint the highlight : ::grammer-error > ::spelling-error > ::selection
#### ::selection, ::inactive-selection
  - pseudo-elements represent the portion of a doucment that has been selected as the target or object of some possible future user-agent operations.
  - _Authors wanting multiple selections styles should use `root::selection` for their document-wide selection style. because `::selection` alone applies to every element in the tree ('*' is implied when a tag selector is missing)_
#### ::spelling-error
  - pseudo-element represents a portion of text that has been flagged by the user agent as misspelled.
#### ::grammer-error
  - pseudo-element represnets a portion of text that has been flagged by the user agent as grammatically incorrect.
  
### Tree-Abiding Pseudo-elements
Tree-abiding pseudo-elements always fit within the box tree. They inherit any inheritable properties form their *originating element*

#### ::before and ::after
  - As with the content of regular elements, the generated content of `::before` and `::after` pseudo-elements may be included in any `::first-line` and `::first-letter` pseudo-elements applied to its *originating element*
#### ::marker
  - The `::marker` pseudo-element represents the automatically generated marker box of a list item. In further CSS, list-item property will be deprecated. only `::marker` properties are allowed.
#### ::placeholder

### Specific implementation of CSS Object Model
The _`CSSPseudoElement`_ interface allows pseudo-elements to be event targets.
```
  [Exposed=Window]
  interface CSSPseudoElement : EventTarget {
    readonly attribute CSSOMString type;
    readonly attribute Element element;
  }
```
### Addition to the Element interface
```
  partial interface Element {
    CSSPseudoElement? pseudo(CSSOMString type)
  };
```
opposite side

### *Compatibility Syntax*
For compatibility with existing style sheets written agianst CSS Level 2, UA must also accept the previous one-colon notation. (`:before`, `:after`,  `:first-letter`, `first-line`) for the `::before`, `::after`, `::first-letter`, and `::first-line` pseudo-elements
  
  
## Important term
- Originating Element of Tree-Abiding pseudo-elements
- Fictional tag sequence that causes Overlapping Pseudo-element Interactions
- Compatibility