# The `margin` Shorthand

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
