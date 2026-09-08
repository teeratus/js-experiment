# JavaScript Chart.js Graphics

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Chart.js Graphics](#javascript-chartjs-graphics)
  - [Bar Charts](#bar-charts)
    - [Example 1](#example-1)
  - [Horizontal Bars](#horizontal-bars)
    - [Example 2](#example-2)
  - [Pie Charts](#pie-charts)
    - [Example 3](#example-3)
  - [Doughnut Charts](#doughnut-charts)
    - [Example 4](#example-4)
  - [Multiple Lines](#multiple-lines)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Bar Charts

Bar charts display data with rectangular bars with heights proportional to the values. Chart.js creates responsive, canvas-based charts:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart.js Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Bar Charts</h4>

<canvas id="barChart" style="width:100%;max-width:600px;"></canvas>
<p id="demo1"></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
const xValues = ["Product A", "Product B", "Product C", "Product D", "Product E"];
const yValues = [25, 40, 30, 55, 20];
const barColors = ["#4CAF50", "#2196F3", "#FF9800", "#F44336", "#9C27B0"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Product Sales (Bar Chart)"
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {beginAtZero: true}}]
    }
  }
});

document.getElementById("demo1").innerHTML = "Chart.js bar chart created!";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-bar_chart/index.html)

## Horizontal Bars

Horizontal bar charts display bars horizontally instead of vertically:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart.js Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Horizontal Bars</h4>

<canvas id="hBarChart" style="width:100%;max-width:600px;"></canvas>
<p id="demo2"></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
const xValues = ["Item A", "Item B", "Item C", "Item D", "Item E"];
const yValues = [30, 45, 25, 60, 35];

new Chart("hBarChart", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336", "#9C27B0"],
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Horizontal Bar Chart"
    },
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {beginAtZero: true}}]
    }
  }
});

document.getElementById("demo2").innerHTML = "Chart.js horizontal bar chart created!";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-horizontal_bars/index.html)

## Pie Charts

Pie charts show data as slices of a circle:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart.js Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Pie Charts</h4>

<canvas id="pieChart" style="width:100%;max-width:500px;"></canvas>
<p id="demo3"></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
const xValues = ["Chrome", "Firefox", "Safari", "Edge", "Other"];
const yValues = [55, 20, 15, 8, 2];
const colors = ["#4CAF50", "#2196F3", "#FF9800", "#F44336", "#9C27B0"];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: colors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Browser Market Share (Pie Chart)"
    }
  }
});

document.getElementById("demo3").innerHTML = "Chart.js pie chart created!";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-pie_chart/index.html)

## Doughnut Charts

Doughnut charts are similar to pie charts but with a hollow center:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart.js Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Doughnut Charts</h4>

<canvas id="doughnutChart" style="width:100%;max-width:500px;"></canvas>
<p id="demo4"></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
const xValues = ["North", "South", "East", "West"];
const yValues = [35, 25, 20, 20];
const colors = ["#4CAF50", "#2196F3", "#FF9800", "#F44336"];

new Chart("doughnutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: colors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Regional Sales (Doughnut Chart)"
    }
  }
});

document.getElementById("demo4").innerHTML = "Chart.js doughnut chart created!";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-doughnut_chart/index.html)

## Multiple Lines

Multiple line graphs display several data series as connected lines:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Chart.js Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Multiple Lines</h4>

<canvas id="multiLineChart" style="width:100%;max-width:600px;"></canvas>
<p id="demo5"></p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
new Chart("multiLineChart", {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
      label: "Series 1",
      data: [10, 12, 15, 14, 18, 20, 22, 25],
      borderColor: "#4CAF50",
      fill: false
    }, {
      label: "Series 2",
      data: [5, 8, 7, 11, 9, 13, 12, 16],
      borderColor: "#F44336",
      fill: false,
      borderDash: [5, 5]
    }, {
      label: "Series 3",
      data: [3, 5, 4, 7, 6, 9, 8, 11],
      borderColor: "#2196F3",
      fill: false,
      borderDash: [2, 2]
    }]
  },
  options: {
    title: {
      display: true,
      text: "Multiple Line Graphs"
    },
    legend: {display: true}
  }
});

document.getElementById("demo5").innerHTML = "Chart.js multiple line chart created!";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-multiple_lines/index.html)

## Document

Document in project

You can [Download PDF](js-chartjs_graphics.pdf) file.

## Reference

- [W3Schools JavaScript Chart.js Graphics](https://www.w3schools.com/js/js_graphics_chartjs.asp)