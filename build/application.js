function todaysDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return new Date(yyyy + '-' + mm + '-' + dd);
}

function months(startdate) {
  var today = todaysDate();
  var startDay = new Date(startdate);
  var months = ((today - startDay) / 2592000000).toFixed(2); // Milleseconds in a 30 day month
  return parseFloat(months);
}
;if (!d3.chart) {
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
      .domain([d3.max(data, function(d) { return months(d.months); }), 0])
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
        y: function(d) { return yScale(months(d.months)); }
      })

    node.append('title')
      .text(function(d) { return d.name; })

    node.append('circle').classed('node-circle', true)
      .attr({
        r: 0,
        cx: function(d,i) { return xScale(i + 1); },
        cy: function(d) { return yScale(months(d.months)); },
        fill: function(d) { return fill(d.interest); }
      })
      .transition().delay(function(d,i) { return i * 100; })
      .attr({
        r: function(d) { return radius(d.expertise); }
      })

    node.append('text').classed('node-label', true)
      .attr({
        x: function(d,i) { return xScale(i + 1); },
        y: function(d) { return yScale(months(d.months)); },
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
;if (!d3.chart) {
  d3.chart = {};
}

d3.chart.mobileVisual = function() {
  var div,
      svg,
      klass = 'mobile_visual',
      g,
      rectGroup,
      data,
      colorOne = '#0000ff',
      colorTwo = '#ff0000',
      xScale,
      yScale,
      fill,
      xAxis,
      xAxisGroup,
      xLabel,
      rects,
      rectWrap,
      rectHeight = 20,
      margin = { top: 40, right: 15, bottom: 15, left: 5 },
      width = 280 - margin.left - margin.right,
      height = 480 - margin.top - margin.bottom;

  function chart(container) {
    div = container;
    var wrap = div.append('div').classed(klass + '-wrap', true);

    // Scales
    xScale = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return months(d.months); })])
      .range([0, width])

    yScale = d3.scale.linear()
      .domain([0, data.length])
      .range([0, height])

    fill = d3.scale.linear()
      .domain([0, d3.max(data, function(d) { return d.interest; })])
      .interpolate(d3.interpolateHsl)
      .range([colorOne, colorTwo])

    // XScale Toggle Form
    var form = wrap.append('form')
    var inputWrapOne = form.append('div').classed('input', true)
    var inputWrapTwo = form.append('div').classed('input', true)

    inputWrapOne.append('label')
      .attr('for', 'months')
      .text('Months')
    inputWrapOne
      .append('input')
      .attr({
        type: 'radio',
        name: klass + '-scale',
        id: klass + '-months',
        checked: true
      })

    inputWrapTwo.append('label')
      .attr('for', 'expertise')
      .text('Expertise')
    inputWrapTwo.append('input')
      .attr({
        type: 'radio',
        name: klass + '-scale',
        id: klass + '-expertise'
      })

    // Legend
    var legendWidth = width;
    var legendHeight = 50;
    var legendSvg = wrap.append('svg').classed('legend-svg', true)
      .attr({
        width: width,
        height: legendHeight
      })

    var gradient = legendSvg.append('defs')
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

    var legend = legendSvg.append('g').classed('legend', true)
      .attr({
        width: legendWidth
      })

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

    // Visual
    svg = wrap.append('svg').classed(klass, true);

    svg.attr({
      width: width + margin.left + margin.right,
      height: height + margin.top + margin.bottom
    })

    g = svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top +')')

    rectGroup = g.append('g').classed('rect-group', true)

    xAxisGroup = g.append('g').classed('axis-group', true);
    xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('top')
    xAxisGroup.call(xAxis);

    xLabel = g.append('text').text('Months')
      .attr({
        transform: 'translate(' + (width / 2) + ', ' + (margin.top - 2) * -1 + ')',
        'text-anchor': 'middle',
        dy: '1em'
      })

    update();
  }

  chart.update = update;

  function update() {
    rects = rectGroup.selectAll('.rect-wrap')
      .data(data)

    rectWrap = rects.enter()
      .append('g').classed('rect-wrap', true);

    rectWrap.append('rect').classed('rect', true)
      .attr({
        x: 0,
        y: function(d,i) { return yScale(i + 1) - (rectHeight / 2); },
        width: 0,
        height: rectHeight,
        fill: function(d) { return fill(d.interest); }
      })
      .transition().delay(function(d,i) { return i * 100; })
      .attr({
        width: function(d) { return xScale(months(d.months)); }
      })

    rectWrap.append('title')
      .text(function(d) { return d.name; })

    rectWrap.append('text').classed('rect-label', true)
      .attr({
        x: 5,
        y: function(d,i) { return yScale(i + 1) + (rectHeight / 2); },
        dy: '-.45em'
      })
      .text(function(d) { return d.name; })

    rects.exit().remove();

    // Actions
    rectWrap.on('mouseover', function(d) {
      d3.select('.rect-group').classed('is-active', true);
      d3.select(this).select('.rect').classed('is-active', true)
    });

    rectWrap.on('mouseout', function(d) {
      d3.select('.rect-group').classed('is-active', false);
      d3.select(this).select('.rect').classed('is-active', false)
    });

    d3.selectAll('input[name="' + klass + '-scale"]')
      .on('change', function() {
        toggle(d3.select(this).attr('id'));
      })
  }

  function toggle(value) {
    var domain,
        label,
        property;

    if (value === klass + '-months') {
      domain = [0, d3.max(data, function(d) { return months(d.months); })];
      label = 'Months';
      property = 'months';
    } else {
      domain = [0, d3.max(data, function(d) { return d.expertise; })];
      label = 'Expertise';
      property = 'expertise';
    }

    xScale.domain(domain);
    xLabel.text(label);
    xAxis.scale(xScale);
    xAxisGroup.transition().call(xAxis);
    rects.selectAll('.rect').attr('width', function(d) { return xScale(d[property]); })
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
;// AppName Object
var AppName = {

  // Init Function
  init: function() {
    this.getData();
  },

  getData: function() {
    var colorOne = '#ffd900',
        colorTwo = '#dd0000';

    d3.json('experience.json', function(err, experience) {
      var data = experience.experience;
      var display = d3.select('.js-display');

      var visual = d3.chart.visual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      visual(display);

      var tabletVisual = d3.chart.mobileVisual()
        .data(data)
        .klass('tablet_visual')
        .width(500)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      tabletVisual(display);

      var mobileVisual = d3.chart.mobileVisual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)
      mobileVisual(display);
    });
  }
};

// Ready Function
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(AppName.init());
