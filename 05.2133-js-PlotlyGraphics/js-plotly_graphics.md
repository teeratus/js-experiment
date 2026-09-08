# JavaScript Plotly Graphics

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Plotly Graphics](#javascript-plotly-graphics)
  - [Bar Charts](#bar-charts)
    - [Example 1](#example-1)
  - [Pie Charts](#pie-charts)
    - [Example 2](#example-2)
  - [Scatter Plots](#scatter-plots)
    - [Example 3](#example-3)
  - [Bubble Plots](#bubble-plots)
    - [Example 4](#example-4)
  - [Multiple Lines](#multiple-lines)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Bar Charts

Bar charts display data with rectangular bars with heights proportional to the values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Plotly Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Bar Charts</h4>

<div id="barChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const data = [{
  x: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
  y: [25, 40, 30, 55, 20],
  type: 'bar',
  marker: {
    color: ['#4CAF50', '#2196F3', '#FF9800', '#F44336', '#9C27B0']
  }
}];

const layout = {
  title: 'Product Sales (Bar Chart)',
  xaxis: {title: 'Product'},
  yaxis: {title: 'Sales ($)'}
};

Plotly.newPlot('barChart', data, layout);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-bar_chart/index.html)

## Pie Charts

Pie charts show data as slices of a circle:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Plotly Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Pie Charts</h4>

<div id="pieChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const data = [{
  labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'],
  values: [55, 20, 15, 8, 2],
  type: 'pie',
  marker: {
    colors: ['#4CAF50', '#2196F3', '#FF9800', '#F44336', '#9C27B0']
  },
  textinfo: 'label+percent'
}];

const layout = {
  title: 'Browser Market Share (Pie Chart)',
  height: 400
};

Plotly.newPlot('pieChart', data, layout);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-pie_chart/index.html)

## Scatter Plots

Scatter plots display values for two variables using dots:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Plotly Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Scatter Plots</h4>

<div id="scatterChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace1 = {
  x: [1, 3, 4, 6, 7, 9],
  y: [2, 5, 4, 8, 7, 10],
  mode: 'markers',
  type: 'scatter',
  name: 'Dataset 1',
  marker: {color: '#4CAF50', size: 10}
};

const trace2 = {
  x: [2, 4, 5, 7, 8, 10],
  y: [3, 6, 5, 9, 8, 11],
  mode: 'markers',
  type: 'scatter',
  name: 'Dataset 2',
  marker: {color: '#F44336', size: 10, symbol: 'square'}
};

const data = [trace1, trace2];

const layout = {
  title: 'Two Datasets (Scatter Plot)',
  xaxis: {title: 'X Values'},
  yaxis: {title: 'Y Values'}
};

Plotly.newPlot('scatterChart', data, layout);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-scatter_plot/index.html)

## Bubble Plots

Bubble plots are scatter plots where the size of markers represents a third dimension of data:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Plotly Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Bubble Plots</h4>

<div id="bubbleChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [10, 15, 13, 20, 18, 25, 22],
  mode: 'markers',
  type: 'scatter',
  marker: {
    size: [20, 30, 15, 45, 25, 50, 35],
    color: ['#4CAF50', '#2196F3', '#FF9800', '#F44336', '#9C27B0', '#00BCD4', '#E91E63'],
    sizeref: 2
  },
  name: 'Bubbles'
};

const data = [trace];

const layout = {
  title: 'Bubble Plot (Size = Third Dimension)',
  xaxis: {title: 'X Values'},
  yaxis: {title: 'Y Values'},
  showlegend: true
};

Plotly.newPlot('bubbleChart', data, layout);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-bubble_plot/index.html)

## Multiple Lines

Multiple line graphs display several data series as connected lines:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Plotly Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Multiple Lines</h4>

<div id="multiLineChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8],
  y: [10, 12, 15, 14, 18, 20, 22, 25],
  mode: 'lines+markers',
  name: 'Series 1',
  line: {color: '#4CAF50', width: 3}
};

const trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8],
  y: [5, 8, 7, 11, 9, 13, 12, 16],
  mode: 'lines+markers',
  name: 'Series 2',
  line: {color: '#F44336', width: 3, dash: 'dash'}
};

const trace3 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8],
  y: [3, 5, 4, 7, 6, 9, 8, 11],
  mode: 'lines+markers',
  name: 'Series 3',
  line: {color: '#2196F3', width: 3, dash: 'dot'}
};

const data = [trace1, trace2, trace3];

const layout = {
  title: 'Multiple Line Graphs',
  xaxis: {title: 'Time'},
  yaxis: {title: 'Values'}
};

Plotly.newPlot('multiLineChart', data, layout);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-multiple_lines/index.html)

## Document

Document in project

You can [Download PDF](js-plotly_graphics.pdf) file.

## Reference

- [W3Schools JavaScript Plotly Graphics](https://www.w3schools.com/js/js_graphics_plotly.asp)