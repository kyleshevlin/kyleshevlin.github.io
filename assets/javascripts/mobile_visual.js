if (!d3.chart) {
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
