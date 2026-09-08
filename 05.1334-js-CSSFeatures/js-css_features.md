# JavaScript CSS Features

[Back to JS page](../index.html)

Table of Contents
- [JavaScript CSS Features](#javascript-css-features)
  - [Hover Effects](#hover-effects)
    - [Example 1](#example-1)
  - [Transitions](#transitions)
    - [Example 2](#example-2)
  - [Show and Hide Content](#show-and-hide-content)
    - [Example 3](#example-3)
  - [Responsive Layouts](#responsive-layouts)
    - [Example 4](#example-4)
  - [CSS Animations](#css-animations)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Hover Effects

Many interactive effects that previously required JavaScript can now be achieved with CSS alone using the `:hover` pseudo-class:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.btn {
  background-color: #04AA6D;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #028a56;
}
.card {
  width: 200px;
  height: 100px;
  background-color: #f1f1f1;
  padding: 20px;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
</style>
</head>
<body>

<h2>JavaScript CSS Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Hover Effects (CSS only)</h4>
<button class="btn">Hover over me</button>
<br><br>
<div class="card">Hover over this card</div>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-hover_effects/index.html)

## Transitions

CSS transitions allow you to change property values smoothly over a given duration, without JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #04AA6D;
  transition: width 2s, height 2s, transform 2s;
}
.box:hover {
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
</style>
</head>
<body>

<h2>JavaScript CSS Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Transitions (CSS only)</h4>
<div class="box"></div>
<p>Hover over the box to see the transition effect.</p>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-transitions/index.html)

## Show and Hide Content

CSS can show and hide content using pseudo-classes like `:hover`, `:focus`, or `:target`, without JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.tooltip .tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.show-hide {
  display: none;
}
.toggle-btn:focus + .show-hide {
  display: block;
}
</style>
</head>
<body>

<h2>JavaScript CSS Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Show and Hide Content (CSS only)</h4>

<p>Tooltip example (CSS only):</p>
<div class="tooltip">Hover over me
  <span class="tooltip-text">This is a CSS tooltip! No JavaScript needed.</span>
</div>

<br><br>
<p>Click the button to show content (CSS only):</p>
<button class="toggle-btn">Click to toggle</button>
<div class="show-hide">This content is shown using CSS :focus pseudo-class!</div>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-show_hide/index.html)

## Responsive Layouts

CSS provides powerful layout tools like Flexbox and Grid that create responsive designs without JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: #f1f1f1;
  gap: 10px;
  padding: 10px;
}
.flex-container > div {
  background-color: #04AA6D;
  color: white;
  width: 150px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  flex: 1 1 auto;
}
@media (max-width: 600px) {
  .flex-container > div {
    width: 100%;
  }
}
</style>
</head>
<body>

<h2>JavaScript CSS Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Responsive Layouts (CSS only)</h4>
<p>Resize the browser window to see the responsive effect.</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-responsive_layouts/index.html)

## CSS Animations

CSS animations allow you to animate HTML elements without JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
<style>
@keyframes example {
  0%   {background-color: red; left: 0px; top: 0px;}
  25%  {background-color: yellow; left: 200px; top: 0px;}
  50%  {background-color: blue; left: 200px; top: 200px;}
  75%  {background-color: green; left: 0px; top: 200px;}
  100% {background-color: red; left: 0px; top: 0px;}
}
.animated-box {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.bouncing-ball {
  width: 50px;
  height: 50px;
  background-color: #04AA6D;
  border-radius: 50%;
  position: relative;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { top: 0; }
  50% { top: 100px; }
}
</style>
</head>
<body>

<h2>JavaScript CSS Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>CSS Animations</h4>
<p>Moving box animation:</p>
<div class="animated-box"></div>
<br>
<p>Bouncing ball animation:</p>
<div class="bouncing-ball"></div>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-css_animations/index.html)

## Document

Document in project

You can [Download PDF](js-css_features.pdf) file.

## Reference

- [W3Schools JavaScript CSS Features](https://www.w3schools.com/js/js_htmlfirst_css.asp)