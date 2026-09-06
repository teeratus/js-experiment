# JavaScript Class Static

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Class Static](#javascript-class-static)
  - [Static Class Methods](#static-class-methods)
    - [Example 1](#example-1)
  - [Calling Static Methods](#calling-static-methods)
    - [Example 2](#example-2)
  - [Static vs Instance Methods](#static-vs-instance-methods)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Static Class Methods

Static class methods are defined with the `static` keyword.

Static methods are called directly on the class (without creating an instance of the class).

Static methods are often used for utility functions that are not specific to a particular object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Static</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Static Class Methods</h4>
<p id="demo"></p>

<script>
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!";
  }
}

document.getElementById("demo").innerHTML = Car.hello();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-static_method/index.html)

## Calling Static Methods

Static methods are called on the class itself, not on instances of the class:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Static</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Calling Static Methods</h4>
<p id="demo"></p>

<script>
class Calculator {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

// Call static methods on the class directly
let sum = Calculator.add(5, 3);
let product = Calculator.multiply(5, 3);

document.getElementById("demo").innerHTML =
  "5 + 3 = " + sum + "<br>" +
  "5 * 3 = " + product;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-calling_static/index.html)

## Static vs Instance Methods

Static methods are defined on the class level. Instance methods are defined on the prototype and are available on object instances:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Static</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Static vs Instance Methods</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
class Car {
  constructor(name) {
    this.name = name;
  }
  // Instance method
  start() {
    return this.name + " engine started!";
  }
  // Static method
  static description() {
    return "A car is a wheeled motor vehicle used for transportation.";
  }
}

const myCar = new Car("Ford");

// Call instance method on the object
document.getElementById("demo1").innerHTML = myCar.start();

// Call static method on the class
document.getElementById("demo2").innerHTML = Car.description();

// Trying to call static method on an instance would cause an error
try {
  myCar.description();
} catch(err) {
  document.getElementById("demo3").innerHTML = "Error: " + err.message;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-static_vs_instance/index.html)

## Document

Document in project

You can [Download PDF](js-class_static.pdf) file.

## Reference

- [W3Schools JavaScript Class Static](https://www.w3schools.com/js/js_class_static.asp)