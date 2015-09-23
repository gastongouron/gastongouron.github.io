# 3.5 Your website
#### Link to my website
http://gastongouron.github.io/index.html

#### What did you learn about CSS padding, borders, and margin by doing this challenge?
In CSS, you can define 3 different properties for your elements borders and those will affect the way they display:

**The padding property (inside the div):** define the space between the element border and the element content

**The margin property (outside the div):** define the space around elements.

**The border (of the div itself):** defines the style, size, and color of an element's border.

#### What did you learn about CSS positioning?
I learnt that positionning can be made few different ways depending on what you need:
```
/** The static positioning value is the "default" value for every HTML element. **/
position: static;

/** This value is very similar to position:static, with one vital difference: While a rendered element does get the width and height of the element, it doesn’t have to occupy the space designated for it. **/
position: relative;

position: absolute;
position: fixed;
position: inherit;

/** extra properties: top right bottom left **/
z-index:
```
CSS positioning can look tough on the first look. but once you start working with a grid system and some flex property and @media properties in order to adapt to screen size modification you can go kind of further in terms of responsiveness.

#### What aspects of your design did you find easiest to implement? What was most difficult?
The easiest: My Layout was quite simple by the way so everything was easy to implement.

The most difficult:
Fine tuning animations durations to have a fluid experience when navigating through the site was not so easy. Not using bootstrap was also a funny part of the challenge!

#### What did you learn about adding and formatting elements with CSS in this challenge?
Formatting elements requires skill and practice. It's very important to understand the principles of specificity, cascade and inherence. I learnt how to use more relationships in my CSS in order to have specific CSS applied to certain elements. Also I learnt that naming conventions are really important when creating your own css because you will have to deal with those names a lot!