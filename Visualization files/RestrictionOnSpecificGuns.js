document.addEventListener("DOMContentLoaded", function() {

    var margin = {top: 10, right: 30, bottom: 30, left: 30},
      width = 1100 - margin.left - margin.right,
      height = 900 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#Topic5")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            
    d3.json("RestrictionOnSpecificGuns_new.json").then( function(data) {
    console.log(data.nodes);
  // Initialize the links
  var marker = svg.append("marker")
  .attr("id", "arrowhead")
  .attr("viewBox", "-10 -10 20 20")
  .attr("refX", 0)
  .attr("refY", 0)
  .attr("markerWidth", 20)
  .attr("markerHeight", 20)
  .attr("orient", "auto");
  
  marker.append("path")
  .attr("d", "M-6.75,-6.75 L 0,0 L -6.75,6.75")
  .attr("fill", "#aaa");
  
      // Initialize the links
      
    var link = svg
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
          .style("stroke", "#aaa")
          .attr("marker-end", "url(#arrowhead)");
      // Initialize the nodes
    
      var node = svg
      .selectAll("text")
      .data(data.nodes)
      .enter()
      .append("text")
        .text(function(d) { return d.id; })
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .style("fill", "#003399")
        .style("font-size", function(d) { return d.frequency * 6 + "px"; });
    
      // Let's list the force we wanna apply on the network
      var simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
          .force("link", d3.forceLink()                               // This force provides links between nodes
                .id(function(d) { return d.id; })   
                .distance(192)                  // This provide  the id of a node
                .links(data.links)                                    // and this the list of links
          )
          .force("charge", d3.forceManyBody().strength(-154))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
          .force("center", d3.forceCenter(width / 3, height / 2)) 
          .force("collide", d3.forceCollide().radius(40))
          // This force attracts nodes to the center of the svg area
          .on("end", ticked);
          simulation.on("tick", ticked);
    
      // This function is run at each iteration of the force algorithm, updating the nodes position.
      function ticked() {
        link
            .attr("x1", function(d) { return d.source.x+100; })
            .attr("y1", function(d) { return d.source.y-100; })
            .attr("x2", function(d) { return d.target.x+100; })
            .attr("y2", function(d) { return d.target.y-100; });
        
        node
             .attr("x", function (d) { return d.x+95; })
             .attr("y", function(d) { return d.y-90; });
      }
    
    });
    });
    