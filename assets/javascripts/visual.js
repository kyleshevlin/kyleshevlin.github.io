if (!d3.chart) {
  d3.chart = {};
}

d3.chart.visual = function() {
  var div,
      svg,
      klass = 'visual',
      g,
      circleGroup,
      data,
      colorOne = '#0000ff',
      colorTwo = '#ff0000',
      xScale,
      yScale,
      fill,
      radius,
      margin = { top: 50, right: 50, bottom: 75, left: 50 },
      width = 900 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  function chart(container) {
    div = container;

    // Scales
    xScale = d3.scale.linear()
      .domain([0, data.length])
      .range([0, width])

    yScale = d3.scale.linear()
      .domain([d3.max(data, function(d) { return d.months; }), 0])
      .range([height, 0])

    fill = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return d.interest; })])
      .interpolate(d3.interpolateHsl)
      .range([colorOne, colorTwo])

    radius = d3.scale.linear()
      .domain(d3.extent(data, function(d) { return d.expertise; }))
      .range([25, 75])

    svg = div.append('svg').classed(klass, true);

    svg.attr({
      width: width + margin.left + margin.right,
      height: height + margin.top + margin.bottom
    })

    var gradient = svg.append('defs')
      .append('linearGradient')
      .attr({
        "id": klass + "-gradient",
        "x1": "0%",
        "y1": "0%",
        "x2": "100%",
        "y2": "0%",
        "spreadMethod": "pad"
      })

    gradient.append('stop')
      .attr({
        "offset": "0%",
        "stop-color": colorOne,
        "stop-opacity": 1
      })

    gradient.append('stop')
      .attr({
        "offset": "50%",
        "stop-color": function(d) { return fill(50); },
        "stop-opacity": 1
      })

    gradient.append('stop')
      .attr({
        "offset": "100%",
        "stop-color": colorTwo,
        "stop-opacity": 1
      })

    g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top +')')

    circleGroup = g.append('g').classed('circle-group', true)

    var yAxisGroup = g.append('g').classed('axis-group', true);
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient('left')
    yAxis(yAxisGroup);

    var yLabel = g.append('text').text('Months')
      .attr({
        transform: 'rotate(270) translate(' + ((height / 2) * -1) + ',' + ((margin.left / 2) * -1) + ')',
        'text-anchor': 'middle',
        'dy': '-.35em'
      })

    // Legend
    var legendWidth = 200;
    var legend = g.append('g').classed('legend', true)
      .attr({
        width: legendWidth,
        transform: 'translate(25,25)'
      })

    legend.append('text')
      .text('Greater Radius = Greater Expertise');

    var interest = legend.append('g').classed('legend-interest', true)
      .attr({
        transform: 'translate(0, 25)'
      })

    interest.append('text').classed('legend-interest-heading', true)
      .attr({
        x: legendWidth / 2,
        'text-anchor': 'middle'
      })
      .text('Interest')

    interest.append('text')
      .text('Lower')

    interest.append('text')
      .attr({
        x: legendWidth,
        'text-anchor': 'end'
      })
      .text('Higher')

    interest.append('rect')
      .attr({
        width: legendWidth,
        height: 10,
        fill: 'url(#' + klass + '-gradient)',
        transform: 'translate(0, 5)'
      })

    update();
  }

  chart.update = update;

  function update() {
    var nodes = circleGroup.selectAll('.node')
      .data(data)

    var node = nodes.enter()
      .append('g').classed('node', true)
      .attr({
        x: function(d,i) { return xScale(i + 1); },
        y: function(d) { return yScale(d.months); }
      })

    node.append('title')
      .text(function(d) { return d.name; })

    node.append('circle').classed('node-circle', true)
      .attr({
        r: 0,
        cx: function(d,i) { return xScale(i + 1); },
        cy: function(d) { return yScale(d.months); },
        fill: function(d) { return fill(d.interest); }
      })
      .transition().delay(function(d,i) { return i * 100; })
      .attr({
        r: function(d) { return radius(d.expertise); }
      })

    node.append('text').classed('node-label', true)
      .attr({
        x: function(d,i) { return xScale(i + 1); },
        y: function(d) { return yScale(d.months); },
        dy: '.35em',
        'text-anchor': 'middle',
      })
      .text(function(d) { return d.name; })

    nodes.exit().remove();

    node.on('mouseover', function(d) {
      d3.select('.circle-group').classed('is-active', true);
      d3.select(this).classed('is-active', true)
        .select('.node-circle')
        .attr('r', function(d) { return radius(d.expertise + 10); })
    });

    node.on('mouseout', function(d) {
      d3.select('.circle-group').classed('is-active', false);
      d3.select(this).classed('is-active', false)
        .select('.node-circle')
        .attr('r', function(d) { return radius(d.expertise); })
    });
  }

  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    return chart;
  }

  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  }

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  }

  chart.klass = function(value) {
    if (!arguments.length) return klass;
    klass = value;
    return chart;
  }

  chart.colorOne = function(value) {
    if (!arguments.length) return colorOne;
    colorOne = value;
    return chart;
  }

  chart.colorTwo = function(value) {
    if (!arguments.length) return colorTwo;
    colorTwo = value;
    return chart;
  }

  return chart;
};
