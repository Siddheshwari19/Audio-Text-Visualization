document.addEventListener("DOMContentLoaded", function() {


// Step 1: Prepare the data
var data = [
    {
      topic: 'Topic 1',
      negativeScore: 0.370,
      neutralScore: 0.514,
      positiveScore: 0.215,
      compoundScore: 0.9873
    },
    {
      topic: 'Topic 2',
      negativeScore: 0.275,
      neutralScore: 0.554,
      positiveScore: 0.172,
      compoundScore: -0.9870
    },
    {
      topic: 'Topic 3',
      negativeScore: 0.468,
      neutralScore: 0.367,
      positiveScore: 0.165,
      compoundScore: -0.9334
    },
    {
      topic: 'Topic 4',
      negativeScore: 0.164,
      neutralScore: 0.474,
      positiveScore: 0.362,
      compoundScore: -0.9274
    },
    {
      topic: 'Topic 5',
      negativeScore: 0.204,
      neutralScore: 0.709,
      positiveScore: 0.287,
      compoundScore: 0.9937
    }
  ];
  
// Set the dimensions and margins of the graph
var margin = {top: 50, right: 250, bottom: 100, left: 150},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// List of subgroups = sentiment categories
var subgroups = ["negativeScore", "neutralScore", "positiveScore"];
// List of topics
var groups = data.map(function(d) { return d.topic; });

// Add X axis
var x = d3.scaleBand()
.domain(groups)
.range([0, width])
.padding([0.2])
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .style("font-size", "18px")
  .style("font-family", "Arial");
// Add Y axis
var y = d3.scaleLinear()
.domain([0, 0.8])
.range([ height, 0 ]);

// Set the y-axis domain
svg.append("g")
  .call(d3.axisLeft(y))
  .style("font-size", "18px")
  .style("font-family", "Arial");
  
// Another scale for subgroup position?
var xSubgroup = d3.scaleBand()
.domain(subgroups)
.range([0, x.bandwidth()])
.padding([0.1])
 // color palette = one color per subgroup
var color = d3.scaleOrdinal()
  .domain(subgroups)
  .range(['#e41a1c', '#FFBB78','#4daf4a'])
  // Show the bars
svg.append("g")
  .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.topic) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });
 // Add X axis label
 svg.append("text")
 .attr("class", "x label")
 .attr("text-anchor", "end")
 .attr("x", width-300)
 .attr("y", height+50+  margin.top/2)
 .text("Topics")
 .style("font-size", "20px")
 .style("font-family", "Arial")
 .style("font-weight", "bold");
// Add X axis with centered labels



// Add Y axis label
svg.append("text")
 .attr("class", "y label")
 .attr("text-anchor", "end")
 .attr("y", margin.left - 140)
 .attr("x", margin.top-100)
//  .attr("transform", "rotate(-90)")
 .text("Scores")
 .style("font-size", "20px")
 .style("font-weight", "bold")
 .style("font-family", "Arial");
 // Add legend
 var legend = svg.append("g")
 .attr("class", "legend")
 .attr("transform", "translate(" + (width +130) + "," + 30 + ")")
 .selectAll("g")
 .data(["Negative Score", "Neutral Score", "Positive Score"])

 .enter().append("g")
 .attr("transform", function(d, i) { return "translate(-90," + i * 40 + ")"; })
 .style("font-size", "18px")
 .style("font-family", "Arial");

legend.append("rect")
 .attr("x", 0)
 .attr("y", 0)
 .attr("width", 18)
 .attr("height", 18)
 .attr("fill", color);

legend.append("text")
 .attr("x", 24)
 .attr("y", 9)
 .attr("dy", ".35em")
 .text(function(d) { return d; });




    });
