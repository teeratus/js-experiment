# JavaScript Class Inheritance

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Class Inheritance](#javascript-class-inheritance)
  - [Class Inheritance](#class-inheritance)
    - [Example 1](#example-1)
  - [Getters and Setters](#getters-and-setters)
    - [Example 2](#example-2)
  - [Hoisting](#hoisting)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Class Inheritance

To create a class inheritance, use the `extends` keyword.

A class created with a class inheritance inherits all the methods from another class:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Inheritance</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Class Inheritance</h4>
<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-class_inheritance/index.html)

## Getters and Setters

Classes also allow you to use getters and setters.

Use the `get` and `set` keywords to define getters and setters:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Inheritance</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Getters and Setters</h4>
<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(name) {
    this._carname = name;
  }
}

const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = "Car name: " + myCar.carname;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-getters_setters/index.html)

## Hoisting

Unlike functions, class declarations are **not hoisted**.

You must first declare a class before using it:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Inheritance</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Hoisting</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Trying to use the class before declaration would cause an error
try {
  const myCar = new Car("Ford");
} catch(err) {
  document.getElementById("demo1").innerHTML = "Error: " + err.message;
}

// Class declaration
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

// This works - class declared before use
const myCar = new Car("Toyota");
document.getElementById("demo2").innerHTML = "Success: " + myCar.carname;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-hoisting/index.html)

## Document

Document in project

You can [Download PDF](js-class_inheritance.pdf) file.

## Reference

- [W3Schools JavaScript Class Inheritance](https://www.w3schools.com/js/js_class_inheritance.asp)