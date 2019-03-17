---
title: 'Days 23 - 24: Flex Item Width'
date: '2019-03-22'
---

# Flexbox Item Width

So far I haven't shared with you the "annoying" moments as a front end engineer.
One of such moments is dealing with edge cases.
And one of the most classic edge cases is very very very very very very very very long text.

## Objectives

Consider this

Render a one-line intro to someone, containing the person's name, title, and one or two badges.

But there are a few requirements from the PM:

- There is a fixed width to that intro, let's say 500px
- The badges should always be there, and should be one the rightmost end of the container
- If there are not enough space, however, truncate the title first with "..."
- But the title should at least display some characters, say 5
- Then, if there is still not enough space, truncate the person's name with "..."

**Note** If the title section has not reached its limit, should not truncate the name.
In other words, the name section has higher priority.
Should try to shrink the name first before the title runs out of space.

https://codepen.io/wgao19/pen/BbxMJg

## Reading

[Flexible Box Module 1](https://www.w3.org/TR/css-flexbox-1/), sections 1 - 6
