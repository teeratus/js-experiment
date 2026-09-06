# JavaScript Classes

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Classes](#javascript-classes)
  - [JavaScript Class Syntax](#javascript-class-syntax)
    - [Example 1](#example-1)
  - [Using a Class](#using-a-class)
    - [Example 2](#example-2)
  - [The Constructor Method](#the-constructor-method)
    - [Example 3](#example-3)
  - [Class Methods](#class-methods)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Class Syntax

ECMAScript 2015 (ES6) introduced JavaScript **Classes**.

JavaScript classes are templates for JavaScript objects.

Use the keyword `class` to create a class, and always add the `constructor()` method:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Classes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Class Syntax</h4>
<p id="demo"></p>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("demo").innerHTML =
  myCar1.name + " " + myCar1.year + "<br>" +
  myCar2.name + " " + myCar2.year;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-class_syntax/index.html)

## Using a Class

When you have a class, you can use the class to create objects:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Classes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using a Class</h4>
<p id="demo"></p>

<script>
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person("John");
const person2 = new Person("Jane");

document.getElementById("demo").innerHTML =
  "Person 1: " + person1.name + "<br>" +
  "Person 2: " + person2.name;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-using_class/index.html)

## The Constructor Method

The constructor method is a special method:

- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
- If you do not define a constructor method, JavaScript will add an empty constructor method

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Classes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Constructor Method</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    document.getElementById("demo1").innerHTML = "Constructor called for " + name;
  }
}

const student1 = new Student("Alice", "A");
const student2 = new Student("Bob", "B");

document.getElementById("demo2").innerHTML =
  student1.name + " got " + student1.grade + "<br>" +
  student2.name + " got " + student2.grade;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-constructor_method/index.html)

## Class Methods

Class methods are created with the same syntax as object methods.

Use the keyword `class` to create a class, then add methods inside the class:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Classes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Class Methods</h4>
<p id="demo"></p>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-class_methods/index.html)

## Document

Document in project

You can [Download PDF](js-classes.pdf) file.

## Reference

- [W3Schools JavaScript Classes](https://www.w3schools.com/js/js_classes.asp)