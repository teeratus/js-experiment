# JavaScript Set Logic

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Set Logic](#javascript-set-logic)
  - [The union() Method](#the-union-method)
    - [Example 1](#example-1)
  - [The intersection() Method](#the-intersection-method)
    - [Example 2](#example-2)
  - [The difference() Method](#the-difference-method)
    - [Example 3](#example-3)
  - [The symmetricDifference() Method](#the-symmetricdifference-method)
    - [Example 4](#example-4)
  - [isSubsetOf(), isSupersetOf(), isDisjointFrom()](#issubsetof-issupersetof-isdisjointfrom)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The union() Method

`union()` creates a new Set containing all elements from both Sets:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Logic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The union() Method</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b", "c"]);
const setB = new Set(["c", "d", "e"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br><br>";

if (setA.union) {
  const result = setA.union(setB);
  text += "union(): " + [...result] + "<br>";
  text += "All elements from both sets (no duplicates)";
} else {
  text += "union() is not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-union/index.html)

## The intersection() Method

`intersection()` creates a new Set with elements in BOTH Sets:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Logic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The intersection() Method</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b", "c"]);
const setB = new Set(["c", "d", "e"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br><br>";

if (setA.intersection) {
  const result = setA.intersection(setB);
  text += "intersection(): " + [...result] + "<br>";
  text += "Only elements present in BOTH sets";
} else {
  text += "intersection() is not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-intersection/index.html)

## The difference() Method

`difference()` creates a new Set with elements in A but NOT in B:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Logic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The difference() Method</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b", "c"]);
const setB = new Set(["c", "d", "e"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br><br>";

if (setA.difference) {
  const result = setA.difference(setB);
  text += "difference(): " + [...result] + "<br>";
  text += "Elements in A but NOT in B";
} else {
  text += "difference() is not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-difference/index.html)

## The symmetricDifference() Method

`symmetricDifference()` creates a new Set with elements in either Set, but NOT in both:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Logic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The symmetricDifference() Method</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b", "c"]);
const setB = new Set(["c", "d", "e"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br><br>";

if (setA.symmetricDifference) {
  const result = setA.symmetricDifference(setB);
  text += "symmetricDifference(): " + [...result] + "<br>";
  text += "Elements in either set but NOT in both";
} else {
  text += "symmetricDifference() is not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-symmetric_difference/index.html)

## isSubsetOf(), isSupersetOf(), isDisjointFrom()

These methods check the relationships between two Sets:

- `isSubsetOf()` - true if every element of A is in B
- `isSupersetOf()` - true if every element of B is in A
- `isDisjointFrom()` - true if A and B have no common elements

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Logic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>isSubsetOf(), isSupersetOf(), isDisjointFrom()</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b"]);
const setB = new Set(["a", "b", "c", "d"]);
const setC = new Set(["x", "y"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br>";
text += "Set C: " + [...setC] + "<br><br>";

if (setA.isSubsetOf) {
  text += "A.isSubsetOf(B): " + setA.isSubsetOf(setB) + "<br>";
  text += "B.isSupersetOf(A): " + setB.isSupersetOf(setA) + "<br>";
  text += "A.isDisjointFrom(C): " + setA.isDisjointFrom(setC) + "<br><br>";
  text += "A is subset of B ✓<br>";
  text += "B is superset of A ✓<br>";
  text += "A and C are disjoint ✓";
} else {
  text += "These methods are not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-relationships/index.html)

## Document

Document in project

You can [Download PDF](js-set_logic.pdf) file.

## Reference

- [W3Schools JavaScript Set Logic](https://www.w3schools.com/js/js_set_logic.asp)