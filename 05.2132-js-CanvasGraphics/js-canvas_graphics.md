# JavaScript Canvas Graphics

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Canvas Graphics](#javascript-canvas-graphics)
  - [Scatter Plots](#scatter-plots)
    - [Example 1](#example-1)
  - [Line Graphs](#line-graphs)
    - [Example 2](#example-2)
  - [Combined Charts](#combined-charts)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Scatter Plots

A scatter plot displays values for two variables using dots. The position of each dot on the horizontal and vertical axis indicates values for an individual data point:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Canvas Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Scatter Plots</h4>

<div id="scatterPlot"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  y: [2, 4, 5, 7, 6, 8, 9, 11, 12, 10],
  mode: 'markers',
  type: 'scatter',
  marker: {
    size: 10,
    color: 'rgba(76, 175, 80, 0.7)'
  },
  name: 'Data Points'
};

const data = [trace1];

const layout = {
  title: 'Scatter Plot (Plotly.js)',
  xaxis: {title: 'X Values'},
  yaxis: {title: 'Y Values'},
  showlegend: true
};

Plotly.newPlot('scatterPlot', data, layout);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-scatter_plot/index.html)

## Line Graphs

A line graph displays information as a series of data points connected by straight line segments:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Canvas Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Line Graphs</h4>

<div id="lineGraph"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace1 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8],
  y: [10, 15, 13, 17, 14, 20, 18, 22],
  mode: 'lines+markers',
  type: 'scatter',
  line: {color: '#2196F3', width: 3},
  marker: {size: 8, color: '#1565C0'},
  name: 'Series A'
};

const trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7, 8],
  y: [5, 8, 7, 11, 9, 13, 12, 15],
  mode: 'lines+markers',
  type: 'scatter',
  line: {color: '#FF5722', width: 3, dash: 'dot'},
  marker: {size: 8, color: '#BF360C'},
  name: 'Series B'
};

const data = [trace1, trace2];

const layout = {
  title: 'Line Graph (Plotly.js)',
  xaxis: {title: 'Time'},
  yaxis: {title: 'Values'},
  showlegend: true
};

Plotly.newPlot('lineGraph', data, layout);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-line_graph/index.html)

## Combined Charts

Combined charts overlay multiple chart types (bars + lines) in the same figure for comparison:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Canvas Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Combined Charts</h4>

<div id="combinedChart"></div>

<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
const trace1 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  y: [30, 45, 38, 55, 48, 62],
  type: 'bar',
  name: 'Revenue',
  marker: {color: '#4CAF50'}
};

const trace2 = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  y: [20, 28, 24, 35, 30, 40],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Expenses',
  line: {color: '#F44336', width: 3},
  marker: {size: 8, color: '#D32F2F'},
  yaxis: 'y2'
};

const data = [trace1, trace2];

const layout = {
  title: 'Combined Chart (Bar + Line)',
  xaxis: {title: 'Month'},
  yaxis: {title: 'Revenue'},
  yaxis2: {
    title: 'Expenses',
    overlaying: 'y',
    side: 'right'
  },
  showlegend: true,
  barmode: 'group'
};

Plotly.newPlot('combinedChart', data, layout);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-combined_chart/index.html)

## Document

Document in project

You can [Download PDF](js-canvas_graphics.pdf) file.

## Reference

- [W3Schools JavaScript Canvas Graphics](https://www.w3schools.com/js/js_graphics_canvas.asp)