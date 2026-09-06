# JavaScript Const

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Const](#javascript-const)
  - [Cannot be Reassigned](#cannot-be-reassigned)
    - [Example 1](#example-1)
  - [Must be Assigned](#must-be-assigned)
    - [Example 2](#example-2)
  - [Constant Arrays](#constant-arrays)
    - [Example 3](#example-3)
  - [Constant Objects](#constant-objects)
    - [Example 4](#example-4)
  - [Block Scope](#block-scope)
    - [Example 5](#example-5)
  - [Redeclaring](#redeclaring)
    - [Example 6](#example-6)
  - [Hoisting](#hoisting)
    - [Example 7](#example-7)
  - [Document](#document)
  - [Reference](#reference)


## Cannot be Reassigned

A variable defined with the `const` keyword cannot be reassigned:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Cannot be Reassigned</h4>
<p id="demo"></p>

<script>
const PI = 3.141592653589793;
// PI = 3.14; // This will cause an error (commented out)
document.getElementById("demo").innerHTML = PI;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-cannot_reassign/index.html)

## Must be Assigned

JavaScript `const` variables must be assigned a value when they are declared:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Must be Assigned</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Correct: const variables must be assigned at declaration
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
document.getElementById("demo1").innerHTML = "Price1: " + price1 + ", Price2: " + price2;
document.getElementById("demo2").innerHTML = "Total: " + total;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-must_assign/index.html)

## Constant Arrays

You can change the elements of a constant array, but you can NOT reassign the array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Constant Arrays</h4>
<p id="demo"></p>

<script>
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
// But you can NOT reassign the array
// cars = ["Toyota", "Volvo", "BMW"]; // ERROR
document.getElementById("demo").innerHTML = cars;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-constant_arrays/index.html)

## Constant Objects

You can change the properties of a constant object, but you can NOT reassign the object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Constant Objects</h4>
<p id="demo"></p>

<script>
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
// But you can NOT reassign the object
// car = {type:"Volvo", model:"EX60", color:"red"}; // ERROR
document.getElementById("demo").innerHTML = "Car: " + car.type + " " + car.model + " (" + car.color + ")";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-constant_objects/index.html)

## Block Scope

Declaring a variable with `const` is similar to `let` when it comes to **Block Scope**.

The x declared in the block is not the same as the x declared outside the block:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Block Scope</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
  document.getElementById("demo1").innerHTML = "Inside block: x = " + x;
}
// Here x is 10 (not affected by block)
document.getElementById("demo2").innerHTML = "Outside block: x = " + x;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-block_scope/index.html)

## Redeclaring

Redeclaring a variable with `const`, in another scope, or in another block, is allowed. But redeclaring in the same scope is not allowed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Redeclaring</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const x = 2;
// const x = 3; // Not allowed in same scope (commented out)
document.getElementById("demo1").innerHTML = "Outer x: " + x;
{
  const x = 3; // Allowed in another block scope
  document.getElementById("demo2").innerHTML = "Inner x: " + x;
}
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-redeclare/index.html)

## Hoisting

Variables defined with `const` are also hoisted to the top, but not initialized.

Using a `const` variable before it is declared will result in a `ReferenceError`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Const</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Const Hoisting</h4>
<p id="demo"></p>

<script>
try {
  // Using const variable before declaring it is not allowed (hoisting but not initialized)
  const x = 5;
  // Uncommenting the line below would cause an error:
  // console.log(y);
  // const y = 10;
  document.getElementById("demo").innerHTML = "const x: " + x + " - Variables defined with const are hoisted to the top but not initialized.";
} catch(err) {
  document.getElementById("demo").innerHTML = "Error: " + err.message;
}
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-hoisting/index.html)

## Document

Document in project

You can [Download PDF](js-const.pdf) file.

## Reference

- [W3Schools JavaScript Const](https://www.w3schools.com/js/js_const.asp)