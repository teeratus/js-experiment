# JavaScript Function bind()

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Function bind()](#javascript-function-bind)
  - [Using bind() to Fix this](#using-bind-to-fix-this)
    - [Example 1](#example-1)
  - [bind() for Functions Called Later](#bind-for-functions-called-later)
    - [Example 2](#example-2)
  - [Using bind() for Preserving this](#using-bind-for-preserving-this)
    - [Example 3](#example-3)
  - [bind() with Arguments](#bind-with-arguments)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Using bind() to Fix this

The `bind()` method creates a new function where `this` refers to the object passed as an argument.

With `bind()`, an object can borrow a method from another object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function bind()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using bind() to Fix this</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Jane",
  lastName: "Smith"
};

// Bind person's method to member object
let fullName = person.fullName.bind(member);
document.getElementById("demo").innerHTML = fullName();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-bind_fix_this/index.html)

## bind() for Functions Called Later

The `bind()` method is useful when a function is called later (like in a callback) and you need `this` to refer to the correct object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function bind()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>bind() for Functions Called Later</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    document.getElementById("demo").innerHTML = this.firstName + " " + this.lastName;
  }
};

// Without bind - setTimeout would lose "this" context
// setTimeout(person.display, 3000); // this would be window

// With bind - "this" is properly preserved
setTimeout(person.display.bind(person), 3000);
document.getElementById("demo").innerHTML = "Waiting 3 seconds...";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-bind_later/index.html)

## Using bind() for Preserving this

When you pass an object method as a callback, `this` is lost. `bind()` preserves it:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function bind()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using bind() for Preserving this</h4>
<button id="myBtn">Click me</button>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function() {
    document.getElementById("demo").innerHTML = this.firstName + " " + this.lastName;
  }
};

// Without bind, "this" in the callback would refer to the button element
// document.getElementById("myBtn").addEventListener("click", person.display); // Would show "undefined undefined"

// With bind, "this" correctly refers to person
document.getElementById("myBtn").addEventListener("click", person.display.bind(person));
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-bind_preserve_this/index.html)

## bind() with Arguments

`bind()` can also accept arguments, creating a new function with preset parameters (partial application):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function bind()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>bind() with Arguments</h4>
<p id="demo"></p>

<script>
function multiply(a, b) {
  return a * b;
}

// Create a new function by binding the first argument
let multiplyBy2 = multiply.bind(this, 2);
let multiplyBy10 = multiply.bind(this, 10);

document.getElementById("demo").innerHTML = 
  "multiplyBy2(5): " + multiplyBy2(5) + "<br>" +
  "multiplyBy10(5): " + multiplyBy10(5);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-bind_arguments/index.html)

## Document

Document in project

You can [Download PDF](js-function_bind.pdf) file.

## Reference

- [W3Schools JavaScript Function bind()](https://www.w3schools.com/js/js_function_bind.asp)