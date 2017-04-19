import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { interpolateHsl } from 'd3-interpolate'
import { axisTop } from 'd3-axis'
import { select, selectAll } from 'd3-selection'
/* eslint no-unused-vars: "off" */
import { transition } from 'd3-transition'

const smallVisual = () => {
  let margin = { top: 40, right: 15, bottom: 15, left: 5 }
  let width = 280 - margin.left - margin.right
  let height = 480 - margin.top - margin.bottom
  let className = 'mobile_visual'
  let colorOne = '#0000ff'
  let colorTwo = '#ff0000'
  let rectHeight = 20
  let div
  let svg
  let g
  let rectGroup
  let data
  let xScale
  let yScale
  let fill
  let xAxis
  let xAxisGroup
  let xLabel
  let rects
  let rectWrap

  const chart = (container) => {
    div = container
    const wrap = div.append('div').classed(className + '-wrap', true)

    // Scales
    xScale = scaleLinear()
      .domain([0, max(data, d => d.months)])
      .range([0, width])

    yScale = scaleLinear()
      .domain([0, data.length])
      .range([0, height])

    fill = scaleLinear()
      .domain([0, max(data, d => d.interest)])
      .interpolate(interpolateHsl)
      .range([colorOne, colorTwo])

    // XScale Toggle Form
    const form = wrap.append('form')
    const inputWrapOne = form.append('div').classed('input', true)
    const inputWrapTwo = form.append('div').classed('input', true)

    inputWrapOne.append('label')
      .attr('for', 'months')
      .text('Months')
    inputWrapOne
      .append('input')
      .attr('type', 'radio')
      .attr('name', `${className}-scale`)
      .attr('id', `${className}-months`)
      .attr('checked', true)

    inputWrapTwo.append('label')
      .attr('for', 'expertise')
      .text('Expertise')
    inputWrapTwo.append('input')
      .attr('type', 'radio')
      .attr('name', `${className}-scale`)
      .attr('id', `${className}-expertise`)

    // Legend
    const legendWidth = width
    const legendHeight = 50
    const legendSvg = wrap.append('svg').classed('legend-svg', true)
      .attr('width', width)
      .attr('height', legendHeight)

    const gradient = legendSvg.append('defs')
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
      .attr('stop-color', d => fill(50))
      .attr('stop-opacity', 1)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorTwo)
      .attr('stop-opacity', 1)

    const legend = legendSvg.append('g').classed('legend', true)
      .attr('width', legendWidth)

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

    // Visual
    svg = wrap.append('svg').classed(className, true)

    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    rectGroup = g.append('g').classed('rect-group', true)

    xAxisGroup = g.append('g').classed('axis-group', true)
    xAxis = axisTop()
      .scale(xScale)
    xAxisGroup.call(xAxis)

    xLabel = g.append('text').text('Months')
      .attr('transform', `translate(${(width / 2)}, ${(margin.top - 2) * -1})`)
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')

    update()
  }

  const update = () => {
    rects = rectGroup.selectAll('.rect-wrap')
      .data(data)

    rectWrap = rects.enter()
      .append('g').classed('rect-wrap', true)

    rectWrap.append('rect').classed('rect', true)
      .attr('x', 0)
      .attr('y', (d, i) => yScale(i + 1) - (rectHeight / 2))
      .attr('width', 0)
      .attr('height', rectHeight)
      .attr('fill', d => fill(d.interest))
      .transition().delay((d, i) => i * 100)
      .attr('width', d => xScale(d.months))

    rectWrap.append('title')
      .text(d => d.name)

    rectWrap.append('text').classed('rect-label', true)
      .attr('x', 5)
      .attr('y', (d, i) => yScale(i + 1) + (rectHeight / 2))
      .attr('dy', '-.45em')
      .text(d => d.name)

    rects.exit().remove()

    // Actions
    rectWrap.on('mouseover', function (d) {
      select('.rect-group').classed('is-active', true)
      select(this).select('.rect').classed('is-active', true)
    })

    rectWrap.on('mouseout', function (d) {
      select('.rect-group').classed('is-active', false)
      select(this).select('.rect').classed('is-active', false)
    })

    selectAll(`input[name='${className}-scale']`)
      .on('change', function () {
        toggle(select(this).attr('id'))
      })
  }

  const toggle = (value) => {
    let domain
    let label
    let property

    if (value === `${className}-months`) {
      domain = [0, max(data, d => d.months)]
      label = 'Months'
      property = 'months'
    } else {
      domain = [0, max(data, d => d.expertise)]
      label = 'Expertise'
      property = 'expertise'
    }

    xScale.domain(domain)
    xLabel.text(label)
    xAxis.scale(xScale)
    xAxisGroup.transition().call(xAxis)
    rectWrap.selectAll('.rect')
      .attr('width', d => xScale(d[property]))
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

export default smallVisual
