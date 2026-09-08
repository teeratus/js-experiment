# JavaScript undefined

[Back to JS page](../index.html)

Table of Contents
- [JavaScript undefined](#javascript-undefined)
  - [Undefined Variables](#undefined-variables)
    - [Example 1](#example-1)
  - [The Type of undefined](#the-type-of-undefined)
    - [Example 2](#example-2)
  - [Empty Values](#empty-values)
    - [Example 3](#example-3)
  - [Objects and undefined](#objects-and-undefined)
    - [Example 4](#example-4)
  - [Functions and undefined](#functions-and-undefined)
    - [Example 5](#example-5)
  - [You Can Empty an Object](#you-can-empty-an-object)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Undefined Variables

In JavaScript, a variable without a value has the value `undefined`. The type is also `undefined`.

A variable declared without a value will automatically have the value `undefined`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Undefined Variables</h4>
<p id="demo"></p>

<script>
let car;

// car is declared but has no value
document.getElementById("demo").innerHTML = car;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-undefined_variables/index.html)

## The Type of undefined

You can use `typeof` to check if a variable is `undefined`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Type of undefined</h4>
<p id="demo"></p>

<script>
let car;

// typeof returns "undefined"
document.getElementById("demo").innerHTML = typeof car;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-typeof_undefined/index.html)

## Empty Values

An empty string has a value and a type. It is **not** the same as `undefined`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Empty Values</h4>
<p id="demo"></p>

<script>
let text = "";

// Empty string has a value and a type
document.getElementById("demo").innerHTML =
  text + "<br>" + typeof text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-empty_values/index.html)

## Objects and undefined

Accessing a non-existing object property returns `undefined`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Objects and undefined</h4>
<p id="demo"></p>

<script>
const person = {firstName: "John", lastName: "Doe"};

// person.age does not exist → undefined
document.getElementById("demo").innerHTML = person.age;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-objects_undefined/index.html)

## Functions and undefined

A function without a return value returns `undefined`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions and undefined</h4>
<p id="demo"></p>

<script>
function myFunction() {
  let x = 5;
}

// No return statement → undefined
document.getElementById("demo").innerHTML = myFunction();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-functions_undefined/index.html)

## You Can Empty an Object

Objects can be emptied by setting the value to `undefined`. Objects can also be emptied by setting the value to `null`.

**Note:** `undefined` is a JavaScript value. It means that a variable has been declared, but no value has been assigned.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript undefined</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>You Can Empty an Object</h4>
<p id="demo"></p>

<script>
let person = {firstName: "John", lastName: "Doe"};

let text = "Before: " + person.firstName + " " + person.lastName + "<br>";

// Empty the object by setting it to undefined
person = undefined;

text += "After (undefined): " + person;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-empty_object/index.html)

## Document

Document in project

You can [Download PDF](js-undefined.pdf) file.

## Reference

- [W3Schools JavaScript undefined](https://www.w3schools.com/js/js_undefined.asp)