import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import * as d3Array from 'd3-array'
import { select } from 'd3-selection'

class BarChart extends Component {
   constructor(props) {
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      console.log('jj node: ', node)
      console.log('jj data: ', this.props.data)
      const dataMax = d3Array.max(this.props.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
      select(node)
         .selectAll('rect')
         .data(this.props.data)
         .enter()
         .append('rect')

      select(node)
         .selectAll('rect')
         .data(this.props.data)
         .exit()
         .remove()

      select(node)
         .selectAll('rect')
         .data(this.props.data)
         .style('fill', '#fe9922')
         .attr('x', (d, i) => i * 25)
         .attr('y', d => this.props.size[1] - yScale(d))
         .attr('height', d => yScale(d))
         .attr('width', 25)

      console.log('jj max(data): ', d3Array.max(this.props.data))
      console.log('jj min(data): ', d3Array.min(this.props.data))
      console.log('jj extent(data): ', d3Array.extent(this.props.data))
      console.log('jj sum(data): ', d3Array.sum(this.props.data))
      console.log('jj mean(data): ', d3Array.mean(this.props.data))
      console.log('jj median(data): ', d3Array.median(this.props.data))
      console.log('jj quantile(data): ', d3Array.quantile(this.props.data))
      console.log('jj variance(data): ', d3Array.variance(this.props.data))
      console.log('jj deviation(data): ', d3Array.deviation(this.props.data))

      console.log('jj scan(data): ', d3Array.min(this.props.data))
      console.log('jj bisect(data): ', d3Array.bisect(this.props.data))
      console.log('jj bisectRight(data): ', d3Array.bisectRight(this.props.data))
      console.log('jj bisectLeft(data): ', d3Array.bisectLeft(this.props.data))
      console.log('jj bisector(data): ', d3Array.bisector(this.props.data))
      console.log('jj bisector(data).left: ', d3Array.bisector(this.props.data).left)
      console.log('jj bisector(data).right: ', d3Array.bisector(this.props.data).right)
      console.log('jj ascending(data): ', d3Array.ascending(this.props.data))
      console.log('jj descending(data): ', d3Array.descending(this.props.data))
   }
   render() {
      return <svg ref={node => (this.node = node)} width={500} height={500} />
   }
}
export default BarChart
