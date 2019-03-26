---
title: 'Study Notes: Reading CSS Flex Layout Module 1 - Chapter 7~8'
date: '2019-03-26'
---

Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Flex Layout Module 1 - Chapter 7\~8](https://gist.github.com/Ta2Rim/fe873dcf3eadb53e2f6d8f63077dc77d)


# TIL - Reading CSS Flex Layout Module 1 - Chapter 7~8

## Flexibility
A flex ontainer distributes free space to its items to fill the container, or shirinks them to prevent overflow with `flex` properties

### The `flex` Shorthand
- Name : `flex`
- Value : none | [<`flex-grow`> <`'flex-shirk`>? || <`flex-basis`> ]
- Initial : 0 1 auto

`flex factors` = `flex grow and shrink`

**Authors are encouraged to control flexibillity using the `flex` shorthand rather than with its longhand properties directly, as the shorthand correctly resets any unspecified components to accommodate common uses**

- `<flex-grow>` : this <number> component sets `flex-grow` longhand and specifies the flex grow factor, which determines how much the flex item will grow reltive to the rest of the flex items in the flex container when positive free space is distributed.
- `<flex-shrink>` : this <number> component sets `flex-shrink` longhand and specifies the flex shirnk factor which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.
  *small item won't shirnk to zero before a larger item has been noticeably reduced*
- `<flex-basis>` : the inital main size of the flex item, before free space is distributed according to the flex factors.
  + Value : `auto` | `content` | `<width>` | `none`
 
By default, flex items won't shrink below their minimum content size. To change this, set the `min-width` or `min-height` property

## Alignment
`margin` in flex layout is powerful than what margins can do in block layout
### Alignning with `auto` margins
- During calculations of flex bases and flexible lengths, auto margins in block flow:
- Prior to alignment via `justify-content` and `align-self`, any positive free space is distributed to auto margins in that dimension.
- Overflowing boxes ignore their auto margins and overflow in the end direction.
*if free space is distributed to auto margins. the alignment properties will have no effect in that dimension because the margins will have stolen all the free space left over after flexing*

### Main Axis Alignment : the `justify-content` property
- Value : `flex-start` | `flex-end` | `center` | `space-between` | `space-around`
It aligns flex items along the main axis of the current line of the flex container. This is done after any flexible lengths and any auto margins have been resolved.
![image](https://user-images.githubusercontent.com/41318449/55010807-3b944f00-5028-11e9-9ef2-968ca852779a.png)

### Cross Axis Alignment : the `align-items` and `align-self` property
- Name : `align-items`
- Value : `flex-start` | `flex-end` | `center` | `baseline` | `stretch`
- Initial : `stretch`

`align-items` sets the default alignment for all of the flex container's items, including anonymous flex items.

- Name : `align-self`
- Value : `flex-start` | `flex-end` | `center` | `baseline` | `stretch`
- Initial : `auto`

`align-self` allows this default alignment to be overridden for individual flex items.
![image](https://user-images.githubusercontent.com/41318449/55011244-f9b7d880-5028-11e9-8737-69dbeaa24e2c.png)

### Packing Flex Lines : the `align-content` property
- Name : `align-content`
- Value : `flex-start` | `flex-end` | `center` | `space-between` | `space-around`
- Initial : `stretch`
- Applies to : multi-line flex containers
it aligns a flex container's lines within the flex container when there is extra space in the cross-axis.
![image](https://user-images.githubusercontent.com/41318449/55011570-67fc9b00-5029-11e9-9892-6e6d6267d37a.png)

### Flex Container Baselines
the baselines of a flex container are determined as follows
- first/last main-axis baseline set
 1. If any of the flex items on the flex container's startmost/endmost flex line participate in baseline alignment, the flex container's first/last main-axis baseline set is generated form te shared alignment baseline fo those flex item.
 2. Otherwise, if the flex container has at least one flex item, the flex container's first/last main-axis baseline set is generated from the alignment baseline of the startmost/endmost flex item.
 3. Otherwise, the flex container has no first/last main-axis basline set, and one is synthesized if needed according to the rules of its alignment context.
 
- first/last cross-axis baseline set
 1. If the flex container has at least one flex item, the flex container’s first/last cross-axis baseline set is generated from the alignment baseline of the startmost/endmost flex item.
 2. Otherwise, the flex container has no first/last cross-axis baseline set, and one is synthesized if needed according to the rules of its alignment context.
 
 