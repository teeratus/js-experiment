# JavaScript Object Accessors

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Accessors](#javascript-object-accessors)
  - [JavaScript Getter (The get Keyword)](#javascript-getter-the-get-keyword)
    - [Example 1](#example-1)
  - [JavaScript Setter (The set Keyword)](#javascript-setter-the-set-keyword)
    - [Example 2](#example-2)
  - [JavaScript Function or Getter?](#javascript-function-or-getter)
    - [Example 3](#example-3)
  - [Data Quality](#data-quality)
    - [Example 4](#example-4)
  - [Object.defineProperty()](#objectdefineproperty)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Getter (The get Keyword)

JavaScript accessors (getters and setters) allow you to define object properties as functions.

The `get` keyword binds an object property to a function that will be called when that property is looked up:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Accessors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Getter</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo").innerHTML = person.fullName;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-getter/index.html)

## JavaScript Setter (The set Keyword)

The `set` keyword binds an object property to a function that will be called when an attempt is made to set that property:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Accessors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Setter</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

person.lang = "English";
document.getElementById("demo").innerHTML = person.language;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-setter/index.html)

## JavaScript Function or Getter?

Getters give you a simpler syntax. Compare a getter vs a regular function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Accessors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Function vs Getter</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  get name() {
    return this.firstName + " " + this.lastName;
  }
};

// Using function - needs parentheses
document.getElementById("demo1").innerHTML = "Function: " + person.fullName();

// Using getter - no parentheses needed
document.getElementById("demo2").innerHTML = "Getter: " + person.name;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-function_vs_getter/index.html)

## Data Quality

Setters can be used to execute validation before setting a value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Accessors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Data Quality</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 0,
  set setAge(a) {
    if (a > 0 && a < 120) {
      this.age = a;
    } else {
      console.log("Invalid age");
    }
  }
};

person.setAge = 25;
document.getElementById("demo").innerHTML = "Age: " + person.age;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-data_quality/index.html)

## Object.defineProperty()

The `Object.defineProperty()` method can also be used to define getters and setters:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Accessors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.defineProperty()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe"
};

Object.defineProperty(person, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});

// Use the getter
document.getElementById("demo").innerHTML = "Before: " + person.fullName + "<br>";

// Use the setter
person.fullName = "Jane Smith";
document.getElementById("demo").innerHTML += "After: " + person.fullName;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-define_property/index.html)

## Document

Document in project

You can [Download PDF](js-object_accessors.pdf) file.

## Reference

- [W3Schools JavaScript Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp)