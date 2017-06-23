import { scaleLinear } from 'd3-scale'
import { max, extent } from 'd3-array'
import { interpolateHsl } from 'd3-interpolate'
import { axisLeft } from 'd3-axis'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'

const t = transition().duration(300)

const largeVisual = () => {
  let margin = { top: 50, right: 75, bottom: 75, left: 50 }
  let width = 800 - margin.left - margin.right
  let height = 500 - margin.top - margin.bottom
  let className = 'visual'
  let colorOne = '#0000ff'
  let colorTwo = '#ff0000'
  let data
  let div
  let svg
  let g
  let circleGroup
  let xScale
  let yScale
  let fill
  let radius

  const chart = (container) => {
    div = container

    // Scales
    xScale = scaleLinear()
      .domain([0, data.length])
      .range([0, width])

    yScale = scaleLinear()
      .domain([max(data, function (d) { return d.months }), 0])
      .range([height, 0])

    fill = scaleLinear()
      .domain([0, max(data, function (d) { return d.interest })])
      .interpolate(interpolateHsl)
      .range([colorOne, colorTwo])

    radius = scaleLinear()
      .domain(extent(data, function (d) { return d.expertise }))
      .range([25, 75])

    svg = div.append('svg').classed(className, true)

    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    const gradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', `${className}-gradient`)
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%')
      .attr('spreadMethod', 'pad')

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', colorOne)
      .attr('stop-opacity', 1)

    gradient.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', function (d) { return fill(50) })
      .attr('stop-opacity', 1)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorTwo)
      .attr('stop-opacity', 1)

    g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    circleGroup = g.append('g').classed('circle-group', true)

    const yAxisGroup = g.append('g').classed('axis-group', true)
    const yAxis = axisLeft()
      .scale(yScale)
    yAxis(yAxisGroup)

    g.append('text').text('Months')
      .attr('transform', `rotate(270) translate(${(height / 2) * -1}, ${(margin.left / 2) * -1})`)
      .attr('text-anchor', 'middle')
      .attr('dy', '-.35em')

    // Legend
    const legendWidth = 200
    const legend = g.append('g').classed('legend', true)
      .attr('width', legendWidth)
      .attr('transform', 'translate(25,25)')

    legend.append('text')
      .text('Greater Radius = Greater Expertise')

    const interest = legend.append('g').classed('legend-interest', true)
      .attr('transform', 'translate(0, 25)')

    interest.append('text').classed('legend-interest-heading', true)
      .attr('x', legendWidth / 2)
      .attr('text-anchor', 'middle')
      .text('Interest')

    interest.append('text')
      .text('Lower')

    interest.append('text')
      .attr('x', legendWidth)
      .attr('text-anchor', 'end')
      .text('Higher')

    interest.append('rect')
      .attr('width', legendWidth)
      .attr('height', 10)
      .attr('fill', `url(#${className}-gradient)`)
      .attr('transform', 'translate(0, 5)')

    update()
  }

  const update = () => {
    var nodes = circleGroup.selectAll('.node')
      .data(data)

    var node = nodes.enter()
      .append('g').classed('node', true)
      .attr('x', function (d, i) { return xScale(i + 1) })
      .attr('y', function (d) { return yScale(d.months) })

    node.append('title')
      .text(function (d) { return d.name })

    node.append('circle').classed('node-circle', true)
      .attr('r', 0)
      .attr('cx', function (d, i) { return xScale(i + 1) })
      .attr('cy', function (d) { return yScale(d.months) })
      .attr('fill', function (d) { return fill(d.interest) })
      .transition(t).delay(function (d, i) { return i * 100 })
      .attr('r', function (d) { return radius(d.expertise) })

    node.append('text').classed('node-label', true)
      .attr('x', function (d, i) { return xScale(i + 1) })
      .attr('y', function (d) { return yScale(d.months) })
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) { return d.name })

    nodes.exit().remove()

    node.on('mouseover', function (d) {
      select('.circle-group').classed('is-active', true)
      select(this).classed('is-active', true)
        .select('.node-circle')
        .attr('r', function (d) { return radius(d.expertise + 10) })
    })

    node.on('mouseout', function (d) {
      select('.circle-group').classed('is-active', false)
      select(this).classed('is-active', false)
        .select('.node-circle')
        .attr('r', function (d) { return radius(d.expertise) })
    })
  }

  chart.update = update

  chart.data = (value) => {
    if (!arguments.length) { return data }
    data = value
    return chart
  }

  chart.width = (value) => {
    if (!arguments.length) { return width }
    width = value
    return chart
  }

  chart.height = (value) => {
    if (!arguments.length) { return height }
    height = value
    return chart
  }

  chart.className = (value) => {
    if (!arguments.length) { return className }
    className = value
    return chart
  }

  chart.colorOne = (value) => {
    if (!arguments.length) { return colorOne }
    colorOne = value
    return chart
  }

  chart.colorTwo = (value) => {
    if (!arguments.length) { return colorTwo }
    colorTwo = value
    return chart
  }

  return chart
}

export default largeVisual
