---
title: 'Study Notes: Reading CSS Image Values and Replaced Content Module Level3'
date: '2019-03-10'
---

Original post by [tae](https://github.com/Ta2Rim): [Reading CSS Image Values and Replaced Content Module Level3](https://gist.github.com/Ta2Rim/29af0d2b9ca5725982fde476a82e7a6c)

* In markdown I wrote, the content is simillar 99% with specfication.. because I've never known the spec exists relates to Image Values and Replaced Content. And I newly learned about css grammer. It's brilliant. I may be able to make my own language with it. I wish I could read English well. I feel the limitation of to get those spec. it's not that 100% clear for me.

And I get little confused about diffrence with specs and real implementation of UA. I don't know which one I have to study.
* 

In this specification, `<image>` doesn't mean that HTML tag. `<image>` means CSS type.

# Reading CSS Image Values and Replaced Content Module Level - #TIL
This Module introduces additinal ways of representing 2D images, for example as a list of URILs denoting fallbacks, or as a gradient.

This module also defines several properties for manipulating raster images and for sizing or positioning replaced elements such as images within the box determined by the CSS layout algorithms.

It also defines in a generic way CSS's sizing algorithm for images and other replaced elements.
## Value : the \<resolution\> type
- *dpi* : dots per inch
- *dpcm* : dots per centimeter
- *dppx* : dots per px unit
  
## Value : the \<image\> type - denotes a 2D image
`<image = <url> | <image-list> | <element-reference> | gradient`
In some case, an image is invalid, such as a `<url>` pointing to a resource that is not valid image format. An invalid image is rendered as a solid-color transparent image with no intrinsic dimensions.

### url notation : `background-image : url(bg.png)`
### image notation 
 ```
 <image-list> = image( [ <image-decl> , ]* [ <image-decl> | <color> ] )
 <image-decl> = [<url> | <string> | <element-reference> ]
 ```
 
 `image()` function allows an author to :
 
 - clip out a portion of an image
 
  `background-image : image('sprites.svg#xywh=40,0,20,20')`
  
  ```
  background-image : url('fallback.png'); /* old UAs */
  background-image : image('sprites.png#xywh=10,30,60,20'); /* new UAs */
  ```
 - specify fallback images
 
    `background-image : image('tree.svg', 'tree.png', 'tree.gif');`
    
    `background-image : image('tree.svg', 'tree.png', 'tree.gif', #000000);`
    
    `background-image : image('nyan-cat.gif#frame-5', 'nyan-cat.png')`
 - use a solid color
 
 `background-image : image(rgba(0, 0, 255, .5)), url('bg-image.png');`
 
 In the above, the background is the image 'bg-image.png', overlaid with partially-transparent
 - annotate an image with a directionality
 
 ## Value : gradients
 ```
  <gradient = [
    <linear-gradient> | <radial-gradient> |
    <repeating-linear-gradient | <repeating-radial-gradient> ]
 ```
  As with the other `<image>` types defined in this specfication, gradients canbe used in any property that accepts images.
    - `background : linear-gradient(white, grey);`
### linear-gradients notation
```
  <linear-gradient> = linear-gradient (
    [ [ <angle> | to <side-or-corner> ] ,]?
    <color-stop>[, <color-stop]+
  )
  
  <side-or-corner> = [left | right] || [top | bottom]
```
The first argument to the function specifies the gradient line, thiat gives the gradient a direction and determine how color-stops are positioned. it defaults to 'to bottom'.

`linear-gradient(yellow, blue) /*defaults to 'to bottom'*/`

`linear-gradient(to left top, yellow, blue)`

`linear-gradient(-45deg, blue, yellow)`

`linear-gradient(yellow, blue 20%, #0f0)`

#### what can I do with linear-gradient?
 magical things. - https://codepen.io/yuanchuan/pen/NLXZLm

### radial-gradients notation
```
  <radial-gradient> = radial-gradient(
    [ [ circle || <length> ] [ at <position> ]? , |
      [ ellipse || [ <length> | <percentage ]{2} ] [ at <position> ]? , |
      [ [ circle | ellipse ] || <extent-keyword> ]
      at <positon>,
    ]?
    <color-stop> [ , <color-stop> ]+
  )
  <extent-keyword> = closest-corner | closest-side | fathest-corner | farthest-side
```

`radial-graident(5em circle at top left, yellow, blue)`

`<position>` is also used for 'background-position'.
`<shape>` can be either 'circle' or 'ellipsis', determines whether the gradient's ending shape is a circle or an ellipsis. If `<shape>` is omitted, the ending shape defaults to a circle if the <size> is a single <length>, and to an ellipse otherwise.

#### Placing Color Stops
Color-stops are placed on a **gradient ray**, simillar to the gradient line of linear gradients. The gradient ray is anchored at the center of the gradient and extends toward the right. The 0% location is at the start of the gradient ray, and the 100% location is on the point where the gradient ray intersects the ending shape.

The point's color is then the color of the gradient ray at the location where this ellipse intersects it.

#### what can I do with radial-gradient?
 magical things. too. - https://codepen.io/yuanchuan/pen/JxjJJL


#### `repeating-linear-gradient()` and `repeating-radial-gradient` : Repeating Gradients
Unlike <linear-gradient> and <radial-gradient>, When rendered, the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the diffrence between the last specified color-stop's position and the first specfied color-stop's position.
  
  `repeating-linear-graident(red 10px, blue 50px)` is equivalent to `linear-gradient(..., red -30px, blue 10px, red 10px, blue 50px, red 50px, blue 90px, ...)`
  
#### Gradient Color-Stops
```<color-stop> = <color> [ <percentage> | <length> ]```

Color-stops are points placed along the line defined by the gradient line at the beginning rule.
At each color-stop, the line is the color of the color-stop. Betwwen two color-stops, the line's color is linearly interpolated between the colors of the two color-stops. 

Even if author doesn't write position, UA set its position corresponding CSS rules
  
## CSS <=> Object Negotiation
1. When an iamge or object is specified in a document, such as through a `url()` value in a `background-image` property, CSS queries the object for its *intrinsic dimensions*
2. CSS then computes a concrete object size using *intrinsic dimensions,* the specified size. This defines the size and position of the region the object will render in.
3. CSS asks the object to render itself at the concrete object size. The object may adjust itselft to match the concrete object size in some way to satisfy sizing constraints of its own, not CSS.
4. Unless otherwise specified by CSS, the object is then clipped to the **concrete object size**.

## Concrete Object Size Resolution
### How do UA define **concrete object size**?
1. Default Sizing Algorithm.
2. Cover and Contain Consraint Sizing.
#### exmaples

| property name | sizing | default object size | remarks| 
|:--------|:--------|:--------|:--------|
| `background-image` | default sizing algorithm with no specified size |  | `background-size` property can give a sizing constraint, invoking either the default sizing algorithm
| `list-style-image` | default sizing algorithm with no specified size. | 1em square | |
| `border-image` | default sizing algorithm | | sized twice. tie first sizing operation is defulat sizing algorithm with no specified size, the second operaiton is default sizing algorithm is used to determine an initial size for each slice with the corresponing border image area part 
| `cursor` | | UA-defined size | |
| `content` | | | [CSS21] note tat such anonymous elements have al their non-inherited properties set to their initial value

### `object-fit` property : Sizing Objects
`object-fit` property specifies how the contents of a replaced element should be fitted to the box stablished by its used height and width. it concerns which object sizing algorithm is used.
it has smilliar semantics to the SVG11 - `preserveAspectRatio`
- value : fill | contain | cover | none | scale-down
![img_scale](https://user-images.githubusercontent.com/41318449/54081232-7027bb80-4344-11e9-9f9c-59ee1547ca20.png)

### `object-position` property : Positioning Objects.
`object-position` property determines the alignment of the replaced element inside its box.
- value : \<position\>

## Image Processing
### `image-resolution` property : Overriding Image Resolutions.
- image resoltion is defined as the number of image pixels per unit length. Some image formats can record information about the resolution of images. this information can be helpful when determinig the actual size of the image in the formatting process.
- `image-resolution` property specifies the intricsic resloution of all raster iamges used in or on the element. If affects both content iages and decorative images.
- As vector images such as SVG do not have an intrinsic resolution, this property has no effect on vectior images
#### example
Printers tend to have higher resolution than computer motinors. due to this, and iamge that looks fine on the screen may look pixellated when printed out. The `image-resolution` property can be used to embed a high-resolution image into the document and main tain an appropriate size, ensureing attractive display both on screen and on paper
```
  @media print(
  img{
    image-resolution : 300dpi;
  }
```
### `image-orientation` property : Orienting an Image on the page
If a picture is taken with a camera turned on its side, or a document isn't positioned correctly within a scanner, the resultant image maybe 'sideways' or even upside down. The `image-orientation` property provides a way to apply an 'out-of-band' rotation to image source data to correctly orient an image. (But it's not for arbitrary rotation or flipping the image. it should be used to correct incorrectly-oriented images)
- value : \<angle\>

![image](https://user-images.githubusercontent.com/41318449/54081632-15de2900-434b-11e9-852a-69965f51d2bd.png)
The computed value of the property is calculated by rounding the specified angle to the nearest quarter-turn.

