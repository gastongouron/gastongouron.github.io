# 3.5 Your website
#### Link to my website
http://gastongouron.github.io

#### What did you learn about CSS padding, borders, and margin by doing this challenge?
In CSS, you can define 3 different properties for your elements borders and those will affect the way elements contained inside the div will display comparend to thei parents and the behaviour of their children:

**1. The padding property (inside the div):** define the space between the element border and the element content

**2. The margin property (outside the div):** define the space around elements.

**3. The border property (of the div itself):** defines the style, size, and color of an element's border.

#### What did you learn about CSS positioning?
I learnt that positionning can be made few different ways depending on what you need:
```
/** The static positioning value is the "default" value for every HTML element. **/
position: static;

/** This value is very similar to position:static, with one vital difference: While a rendered element does get the width and height of the element, it doesn’t have to occupy the space designated for it. **/
position: relative;

/** An element with position:absolute is removed from the document flow, which means the rest of the document acts as if the element weren't there. **/
position: absolute;

/** Elements with fixed positioning don't move. For example, pages with fixed navigation schemes generally use fixed **/
position: fixed;

/** Descendant elements **/
position: inherit;

/** Extra properties for positionning are **/
position: top right bottom left

/** Placing elements on the first plan or on the background, be careful with this one**/
z-index: [positive or negative value]

/** The default behavior is to make the overflowing content visible, but it can be changed so that the content is clipped to the confines of the element’s box, optionally providing a mechanism for scrolling the content. **/
overflow: [visible (the default), hidden, scroll, auto, inherit]
```

CSS positioning can seem tough on the first look. But once you start working with it, you will find that you often use the same kinds of positionnings, more over, with a grid system (some table, flex and @media properties in order to adapt to screen size modification) you will be able to go kind of further in terms of design and responsiveness. Also, using overflow on certain sections (and some other CSS tricks) you will be abble to enhance the user experience on your website.

#### What aspects of your design did you find easiest to implement? What was most difficult?
**The easiest:** My Layout was quite simple by the way so everything went good during the implementation.

**The most difficult:**
The details, fine tuning typography and elements's animations durations to have a fluid experience when hovering menu items, was not so easy. Not using bootstrap was also a funny part of the challenge because it forced me to build my own CSS rules `em` instead of `px` and grid system using `@media` and `table`!

#### What did you learn about adding and formatting elements with CSS in this challenge?
Formatting elements requires skill and practice. It's very important to understand the principles of specificity, cascade and inherence.
I learnt how to use more relationships and combinations in my CSS in order to have specific styles applied to certain elements. Hence I learnt that naming conventions of CSS elements are really important when creating your own stylesheet because you will have to continually re-work your site so, I'll probably consider starting to use [Emmet](https://emmet.io) ones in the future. An other thing I learned is about Sass, I can't wait to start working with it and since I'm planning to use it on my site I'm actually reading some informations about it. Will keep you updated!