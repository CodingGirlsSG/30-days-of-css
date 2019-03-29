---
title: 'Study Notes: Reading CSS Transitions Level 1'
date: '2019-03-27'
---

Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Transitions Level 1](https://gist.github.com/Ta2Rim/d110f5e6429870cea83748f5124501ac)


# #TIL - Reading CSS Transitions Level 1
## Introduction
new CSS features to enable implicit transitions, that describe how CSS properties can be made to change smoothly from one value to another over a given duration.

## Transition
the UA must calculate its used value by repeating the list of values until there are enough. that behavior is analogous to behavior of the `background-*` properties.
```
 div {
  transition-property : opacity, left, top, width;
  transition-duration: 2s, 1s;
 }
```
### `transition-property` Property
- Name : `transition-property`
- Value : none | <single-transition-property>#
- Initial : all
 
`<single-transition-property> = all | <custom-ident>;`
it specifies the name of the CSS property to which the transition is applied

### `transition-duration` Property
- Name : `transition-duration`
- Value : `<time>`#
it specifies how long the transition form the old value to the new value should take.

### `transition-timimg-function` Property (Easing Function)
it describes how the intermediate values used during a transition will be calculated.
- Name : `transition-timimg-function`
- Value : `<timing-function>`#
- Initial : `ease`
Timing functions are defined in te separate (CSS Easing functions module.): [https://www.w3.org/TR/css-easing-1/]

### `transition-delay` Property
- Name : `transition-delay`
- Value : `<time>`#
It defines when the transition will start.

### `transition` Shorthand Property
- Name : `transition`
- Value : `<single-transition>#`
``` <single-transition> = [ none | <single-transition-property> ] || <time> || <timimg-function> || <time>```

## Implementations - .;(..... it's difficult to me I've read this 5 times but I can't get it right. I guess this section is for UA implementors
Implementations must maintain a set of *running transitions* and *completed transitions*
This specification maintins the invariant that there is never both a running transition and a completed transition for the same property and element.

Each of these transitions also has a 
- start time
- end time
- start value
- end value
- reversing-adjusted start value
- revesing shortening factor

+ *style change event* : the simultaneous style changes that is caused by updating computed value
+ *before-change style* : If an element is not in the doucment during that style schange event, then transitions are not started. to avoid it, author can define the before-change style. except with any styles derived form declarative animatioons.
+ *after-change style* : single change can start a transition on the same property when a property change is inherited form one element with `transition-*` properties

*matching transiton-property value* : each element with a `before-change style` and an `after change style` and each property define that `matching transtion-property`

When comparing the `before-change` style and `after-change style` for a given property, the property values are **transitionable** if the have an animation type that is neither not animatable nor discrete.

another rule : `transition-*` properties changes at the same time as a property whose change might transition.
```
li {
 transition : background-color linear 1s;
 background: blue;
}
li:hover {
 background-color : green;
 transition-duration : 2s; /* the transition caused hovered <li>, it takes 2s */
}
```

## Applicaiton of transitions

Implementations must add
 - computed values resulting from CSS transitions can inherit to descentdants just like any other computed values.
 - this value to the cascade if and only if that property is not currently undergoing a CSS Animation on the same Element.
 - during the duration phase of the trasition, the current value is a specified style that will compute to the result of interpolating propert using the following values.
   + Vα : start value of the transition
   + Vβ : end value of the transition
   + p : the output of the timimg function for input ( current time - start time ) / (end time - start time)
   
## Completion of transtions
Running transitions complete at a time that is equal to or after their end time. When a transition completes, implementations must move all transitions that complete at that time from the set of running transitions to the set of completed transitions and then *fire the events*(relates to transition events) for those completions.

## Transition Events
The creation, beginning, and cancellation of CSS transitions generate corresponding DOM Events.
transtion event handlers must be supported by all HTML elements, event handler content attributes and event handler IDL attributes must be supported by all `Document` and `Window` objects.

transition event browser implementations for now
– chrome, safari: webkitTransitionEnd
– opera 10.5: oTransitionEnd
– opera 12: otransitionend
– opera 12.10: transitionend
– standard, firefox, ie10+: transitionEnd

## Security Considerations
Implementations should take care to ensure that Web content cannot trigger unsafe out-of-memory handling by using large numbers of animations or animations on elements covering large areas(such as `transform` and `opacity`)

## Privacy Considerations
users who would benefit from these mitigations may face a tradeoff between keeping their disability private form the Web content or benefiting form the mitigation.

## Accessibility Considerations
Implemetations may provide mitigations to help users with disabilities.
1. Motion : Providing a declarative mechanism : to be easier to make, for user agents to modify those animations if such modifications are needed to meet a user's accessibility needs.

UA implementors should be aware that Web content may depend on the firing of transition events. so implemations avoid to fire transition events even if the transitions were not run as continuous animations.

2. Cascade
The cascade also allows users to disable transtions entirely by overriding the transition properties.
