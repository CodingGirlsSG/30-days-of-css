---
title: 'Study Notes: CSS Grid Layout Module 1 - Chapter 4~6'
date: '2019-03-16'
---

Original post by [tae](https://github.com/Ta2Rim): [Day 17\~18 Reading CSS Grid Layout Module 1 - Chapter 4\~6](https://gist.github.com/Ta2Rim/c1f7f632f2911d6abe00337349944c1c)


# #TIL : CSS Grid Layout Module 1
## Reordering and Accessibility
**Authors must use 'order' and the grid-placement properties only for visual, no logical, reordering of content. Style sheets that use these features to perform logical reordering are non-conforming.**

## Grid Containers
### Establishing Grid Containers: the grid and inline-grid display values
name : 'display'
new values : grid | inline-grid

`grid` - this value causes an element to generate a block-level grid container box.
`inline-grid` - this value causes an element to generate an inline-level grid container box.

A grid container establishes a new grid formatting context for its contents

#### diffrence grid between block layout
  - floats / clear do not intrude into the grid container
  - grid container’s margins do not collapse with the margins of its contents.
  - vertical-align has no effect on a grid item.
  - the ::first-line and ::first-letter pseudo-elements do not apply to grid containers.
  
### Sizing Grid Containers
A grid container is sized following the rule in which contenxt it is

The max(min)-content size of a grid container is the sum of the grid container’s track sizes (including gutters) in the appropriate axis, when the grid is sized under a max(min)-content constraint

### Clamping Overly Large Grids
Due to memory limitation, UAs may clamp the possible size according to some rules.
- If the grid area would span outside the limited grid, its span is clamped to the last line of the limited grid.
- If the grid area would be placed completely outside the limited grid, its span must be *truncated* to 1 and the area repositioned into the last grid track on that side of the grid.

```
.grid-item {
  grid-row : 500 / 1500;
  grid-column : 2000 / 3000;
}

If case UA only only supported grids with at most 1000 tracks in each dimesion , UA may : 50 translate it like this.

.grid-item { 
  grid-row : 500 / 1001;
  grid-column : 1000 / 1001;
}
```

## Grid items 
the grid items of a grid container are boxes representing its in-flow contents.

grid item - Each in-flow child of a grid container.
each contiguous sequence of child text runs is wrapped in an anonymous block container grid item. when it contains only white space, it's instead not rendered.

```
<div style="display: grid">

    <!-- grid item: block child -->
    <div id="item1">block</div>

    <!-- grid item: floated element; floating is ignored -->
    <div id="item2" style="float: left;">float</div>

    <!-- grid item: anonymous block box around inline content -->
    anonymous item 3

    <!-- grid item: inline child -->
    <span>
        item 4
        <!-- grid items do not split around blocks -->
        <q style="display: block" id=not-an-item>item 4</q>
        item 4
    </span>
</div>

```
When you remove text 'anonymous item 3', You can find out that inter-element white space disappears.

### Grid Item Display
The display value of a grid item is blockified: if the specified display of an in-flow child of an element generating a grid container is an inline-level value, it computes to its block-level equivalent.

### Grid Item Sizing
Grid item calculations for auto widths and heights vary by their self-alignment values:
| alignment |	Non-replaced Element Size	| Replaced Element Size	 |
|:--------|:--------|:-------|
| `normal` | Fill grid area |  Use intrinsic size |
| `stretch` | Fill grid area | Fill grid area |
| `start`,`center`,etc | 'fit-content' sizing (like floats) | Use intrinsic size |

### the `order` property : Reordered Grid Items
**As with reordering flex items, the order property must only be used when the visual order needs to be out-of-sync with the speech and navigation order; otherwise the underlying document source should be reordered instead.**

### *Grid Item Margins and Paddings*
Percentage margins and paddings on grid items can be resolved against either:

- their own axis (left/right percentages resolve against width, top/bottom resolve against height)
- the inline axis (left/right/top/bottom percentages all resolve against width)
A User Agent choose one of these two behaviors, so authors are aware of each UAs' different behavior. should avoid using percentages in paddings or margins on grid items entirely

### the `z-index` property : Z-axis Ordering
The painting order of grid items is exactly the same as inline blocks

except that order-modified document order is used in place of raw document order, and z-index values other than auto create a stacking context even if position is static (behaving exactly as if position were relative).

Thus the z-index property can easily be used to control the z-axis order of grid items.

### Automatic Minimum Size of Grid Items
The automatic minimum size for a grid item in a given dimension is its specified size if it exists, otherwise its transferred size if that exists, else its content size.


## What's more?
[Holy Grail Layout](https://en.wikipedia.org/wiki/Holy_grail_(web_design))