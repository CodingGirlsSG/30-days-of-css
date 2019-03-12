---
title: 'Study Notes: Reading CSS Variables'
date: '2019-03-12'
---

Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Variables](https://gist.github.com/Ta2Rim/6fc0aeda85a585a22ee5f56adda9bda0)

# #TIL CSS Variables Level 1
## Introduction
Many of the values in the CSS file will be duplicate data. It may error-prone and diffcult, also not be ameanable to Find-and-Replace.
This module introduces a family of custom author-defined properties known collectively as custom properties. One only has to change the value once, in the custom property, and the change will propagate to all uses of that variable automatically.

## The `--*` family of properties : Defining Custom Properties
A **custom property** is any property whose name starts with two dashes like `--foo`
The `<custom-property-name>` production corresponds to this : it's defined as any valid identifier that starts with two dashes.

Unlike other CSS properties, custom property names are case-sensitive.

The CSS-wide keywords can be used in custom properties, with the same meaning as in any another property.

** [CSS-wide keywords: initial, inherit and unset](https://www.w3.org/TR/css3-values/#common-keywords)

## Custom Property Value Syntax
The allowed syntax for custom properties is permissive. The <declaration-value> production matches any sequence of one or more tokens, so long as the sequence does not contain <bad-string-token>, <bad-url-token>, un matched <-) token> , or<}-token> or top-level <semicolon-tken> tokens or <delim-token> tokens with a value of '!'
  
For example, the following is a valid custom property:
```
  --foo: if(x > 5) this.width = 10;
```
While this value is obviously useless as a variable, as it would be invalid in any normal property, it might be read and acted on by Javascript.

- The initial value of a custom property is an empty value; that is, nothing at all. This initial value has a special interaction with the `var()` notation.
- custom properties are ordinary properties, so they can be declared on any element....
  + are resolved with the normal inheritance and cascade rules
  + can be conditional with `@media` and other conditional rules
  + can be usedin HTML's style attribute
  + can be read or set using the CSSOM
  + etc
  
- it's important to note that custom properties resolve any `var()` functions in their values at computed-value time, which occurs before the value is inherited. In general cyclic dependencies occur only when multiple custom properties on the same element refer to each other;

valid example
```
  <one><two><three/></two></one>
  one { --foo : 10px; }
  two { --bar : calc(var(--foo) + 10px); }
  three { --foo : calc(var(--bar) + 10px); }
```

## the `var()` notation : Using Cascading Variblaes
The value of a custom property can be subsitituted into the value of another property with the `var()` function.
```
  **var()** = var( <custom-property-name> [, <declaration-value> ]? )
  
  <custom-property-name> - name of custom property to be subsititued.
  <declaration-value> - if provided, is a fallback value used as the substituion value when the referenced custom property is invalid.1

  var(--foo, red, value)
```
But the `var()`function cannot be used as property names, selectors, or anything else besides property values.

```
  author can't build up a single token where part of it is provided by a variable
  
  .foo {
    --gap: 20;
    margin-top: var(--gap)px;
   }
   
   
   valid example
   
  .foo {
    --gap: 20;
    margin-top: calc(var(--gap) * 1px);
   }
   
    
```

** `var()` functions are substitued at computed-value time. If a declaration, once all `var()` functions are substitued in, is invalid, the declaration is invalid at computed value time.**

### Invalid Variables
A declaration can be invalid at computed-value time if it contains a `var()` that references a custom property with its initail value.
When this happens, the computed value of the property is either the property's inherited value or its initial value depending on whether the property is inherited or not, repectively as if the property's value had been specified as the 'unset' keyword.

### Variables in Shorthand Properties
The use of `var()` functions in shorthand properties presents some unique difficulties.

`margin : 10px -> margin-top: 10px; margin-left:10px; margin-bottom:10px; margin-right:10px;`

If a `var()` functions is used in a shorthand, however, one can't tell what values are meant to go where; it may in fact be impossible to separate it out at parse time.

To get around this, implementations must fil in longhands with a special, unobservable-to-authors pending-substitution value that indicates the shorthand contains a variable, and thus the longhand's value is pending variable substitution.

## APIs
All custom property declarations have the case-insensitive flag set.

## Serializing custom Properties
Custom property names must be serialized with the casing as provided by the author.


## What's more?
[CSS-EXTENSIONS](https://drafts.csswg.org/css-extensions/) - custom properties can also be used as actual custom properties, parsed by and acted on by script. I'ts expcted that the CSS Extensions spec will expand on these use-cases and make them easier to do.

Fallback - With fallback, the component author can supply defaults, so the app author only needs to supply values for the values for the variables they wish to override.

