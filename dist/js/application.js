function todaysDate(){var today=new Date,dd=today.getDate(),mm=today.getMonth()+1,yyyy=today.getFullYear();return 10>dd&&(dd="0"+dd),10>mm&&(mm="0"+mm),new Date(yyyy+"-"+mm+"-"+dd)}function months(startdate){var today=todaysDate(),startDay=new Date(startdate),months=((today-startDay)/2592e6).toFixed(2);return parseFloat(months)}function ready(fn){"loading"!=document.readyState?fn():document.addEventListener("DOMContentLoaded",fn)}d3.chart||(d3.chart={}),d3.chart.visual=function(){function chart(container){div=container,xScale=d3.scale.linear().domain([0,data.length]).range([0,width]),yScale=d3.scale.linear().domain([d3.max(data,function(d){return d.months}),0]).range([height,0]),fill=d3.scale.linear().domain([0,d3.max(data,function(d){return d.interest})]).interpolate(d3.interpolateHsl).range([colorOne,colorTwo]),radius=d3.scale.linear().domain(d3.extent(data,function(d){return d.expertise})).range([25,75]),svg=div.append("svg").classed(klass,!0),svg.attr({width:width+margin.left+margin.right,height:height+margin.top+margin.bottom});var gradient=svg.append("defs").append("linearGradient").attr({id:klass+"-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",spreadMethod:"pad"});gradient.append("stop").attr({offset:"0%","stop-color":colorOne,"stop-opacity":1}),gradient.append("stop").attr({offset:"50%","stop-color":function(){return fill(50)},"stop-opacity":1}),gradient.append("stop").attr({offset:"100%","stop-color":colorTwo,"stop-opacity":1}),g=svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")"),circleGroup=g.append("g").classed("circle-group",!0);var yAxisGroup=g.append("g").classed("axis-group",!0),yAxis=d3.svg.axis().scale(yScale).orient("left");yAxis(yAxisGroup);var legendWidth=(g.append("text").text("Months").attr({transform:"rotate(270) translate("+height/2*-1+","+margin.left/2*-1+")","text-anchor":"middle",dy:"-.35em"}),200),legend=g.append("g").classed("legend",!0).attr({width:legendWidth,transform:"translate(25,25)"});legend.append("text").text("Greater Radius = Greater Expertise");var interest=legend.append("g").classed("legend-interest",!0).attr({transform:"translate(0, 25)"});interest.append("text").classed("legend-interest-heading",!0).attr({x:legendWidth/2,"text-anchor":"middle"}).text("Interest"),interest.append("text").text("Lower"),interest.append("text").attr({x:legendWidth,"text-anchor":"end"}).text("Higher"),interest.append("rect").attr({width:legendWidth,height:10,fill:"url(#"+klass+"-gradient)",transform:"translate(0, 5)"}),update()}function update(){var nodes=circleGroup.selectAll(".node").data(data),node=nodes.enter().append("g").classed("node",!0).attr({x:function(d,i){return xScale(i+1)},y:function(d){return yScale(d.months)}});node.append("title").text(function(d){return d.name}),node.append("circle").classed("node-circle",!0).attr({r:0,cx:function(d,i){return xScale(i+1)},cy:function(d){return yScale(d.months)},fill:function(d){return fill(d.interest)}}).transition().delay(function(d,i){return 100*i}).attr({r:function(d){return radius(d.expertise)}}),node.append("text").classed("node-label",!0).attr({x:function(d,i){return xScale(i+1)},y:function(d){return yScale(d.months)},dy:".35em","text-anchor":"middle"}).text(function(d){return d.name}),nodes.exit().remove(),node.on("mouseover",function(){d3.select(".circle-group").classed("is-active",!0),d3.select(this).classed("is-active",!0).select(".node-circle").attr("r",function(d){return radius(d.expertise+10)})}),node.on("mouseout",function(){d3.select(".circle-group").classed("is-active",!1),d3.select(this).classed("is-active",!1).select(".node-circle").attr("r",function(d){return radius(d.expertise)})})}var div,svg,g,circleGroup,data,xScale,yScale,fill,radius,klass="visual",colorOne="#0000ff",colorTwo="#ff0000",margin={top:50,right:50,bottom:75,left:50},width=900-margin.left-margin.right,height=500-margin.top-margin.bottom;return chart.update=update,chart.data=function(value){return arguments.length?(data=value,chart):data},chart.width=function(value){return arguments.length?(width=value,chart):width},chart.height=function(value){return arguments.length?(height=value,chart):height},chart.klass=function(value){return arguments.length?(klass=value,chart):klass},chart.colorOne=function(value){return arguments.length?(colorOne=value,chart):colorOne},chart.colorTwo=function(value){return arguments.length?(colorTwo=value,chart):colorTwo},chart},d3.chart||(d3.chart={}),d3.chart.mobileVisual=function(){function chart(container){div=container;var wrap=div.append("div").classed(klass+"-wrap",!0);xScale=d3.scale.linear().domain([0,d3.max(data,function(d){return d.months})]).range([0,width]),yScale=d3.scale.linear().domain([0,data.length]).range([0,height]),fill=d3.scale.linear().domain([0,d3.max(data,function(d){return d.interest})]).interpolate(d3.interpolateHsl).range([colorOne,colorTwo]);var form=wrap.append("form"),inputWrapOne=form.append("div").classed("input",!0),inputWrapTwo=form.append("div").classed("input",!0);inputWrapOne.append("label").attr("for","months").text("Months"),inputWrapOne.append("input").attr({type:"radio",name:klass+"-scale",id:klass+"-months",checked:!0}),inputWrapTwo.append("label").attr("for","expertise").text("Expertise"),inputWrapTwo.append("input").attr({type:"radio",name:klass+"-scale",id:klass+"-expertise"});var legendWidth=width,legendHeight=50,legendSvg=wrap.append("svg").classed("legend-svg",!0).attr({width:width,height:legendHeight}),gradient=legendSvg.append("defs").append("linearGradient").attr({id:klass+"-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",spreadMethod:"pad"});gradient.append("stop").attr({offset:"0%","stop-color":colorOne,"stop-opacity":1}),gradient.append("stop").attr({offset:"50%","stop-color":function(){return fill(50)},"stop-opacity":1}),gradient.append("stop").attr({offset:"100%","stop-color":colorTwo,"stop-opacity":1});var legend=legendSvg.append("g").classed("legend",!0).attr({width:legendWidth}),interest=legend.append("g").classed("legend-interest",!0).attr({transform:"translate(0, 25)"});interest.append("text").classed("legend-interest-heading",!0).attr({x:legendWidth/2,"text-anchor":"middle"}).text("Interest"),interest.append("text").text("Lower"),interest.append("text").attr({x:legendWidth,"text-anchor":"end"}).text("Higher"),interest.append("rect").attr({width:legendWidth,height:10,fill:"url(#"+klass+"-gradient)",transform:"translate(0, 5)"}),svg=wrap.append("svg").classed(klass,!0),svg.attr({width:width+margin.left+margin.right,height:height+margin.top+margin.bottom}),g=svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")"),rectGroup=g.append("g").classed("rect-group",!0),xAxisGroup=g.append("g").classed("axis-group",!0),xAxis=d3.svg.axis().scale(xScale).orient("top"),xAxisGroup.call(xAxis),xLabel=g.append("text").text("Months").attr({transform:"translate("+width/2+", "+-1*(margin.top-2)+")","text-anchor":"middle",dy:"1em"}),update()}function update(){rects=rectGroup.selectAll(".rect-wrap").data(data),rectWrap=rects.enter().append("g").classed("rect-wrap",!0),rectWrap.append("rect").classed("rect",!0).attr({x:0,y:function(d,i){return yScale(i+1)-rectHeight/2},width:0,height:rectHeight,fill:function(d){return fill(d.interest)}}).transition().delay(function(d,i){return 100*i}).attr({width:function(d){return xScale(d.months)}}),rectWrap.append("title").text(function(d){return d.name}),rectWrap.append("text").classed("rect-label",!0).attr({x:5,y:function(d,i){return yScale(i+1)+rectHeight/2},dy:"-.45em"}).text(function(d){return d.name}),rects.exit().remove(),rectWrap.on("mouseover",function(){d3.select(".rect-group").classed("is-active",!0),d3.select(this).select(".rect").classed("is-active",!0)}),rectWrap.on("mouseout",function(){d3.select(".rect-group").classed("is-active",!1),d3.select(this).select(".rect").classed("is-active",!1)}),d3.selectAll('input[name="'+klass+'-scale"]').on("change",function(){toggle(d3.select(this).attr("id"))})}function toggle(value){var domain,label,property;value===klass+"-months"?(domain=[0,d3.max(data,function(d){return d.months})],label="Months",property="months"):(domain=[0,d3.max(data,function(d){return d.expertise})],label="Expertise",property="expertise"),xScale.domain(domain),xLabel.text(label),xAxis.scale(xScale),xAxisGroup.transition().call(xAxis),rects.selectAll(".rect").attr("width",function(d){return xScale(d[property])})}var div,svg,g,rectGroup,data,xScale,yScale,fill,xAxis,xAxisGroup,xLabel,rects,rectWrap,klass="mobile_visual",colorOne="#0000ff",colorTwo="#ff0000",rectHeight=20,margin={top:40,right:15,bottom:15,left:5},width=280-margin.left-margin.right,height=480-margin.top-margin.bottom;return chart.update=update,chart.data=function(value){return arguments.length?(data=value,chart):data},chart.width=function(value){return arguments.length?(width=value,chart):width},chart.height=function(value){return arguments.length?(height=value,chart):height},chart.klass=function(value){return arguments.length?(klass=value,chart):klass},chart.colorOne=function(value){return arguments.length?(colorOne=value,chart):colorOne},chart.colorTwo=function(value){return arguments.length?(colorTwo=value,chart):colorTwo},chart};var AppName={init:function(){this.getData()},getData:function(){var colorOne="#0a2029",colorTwo="#33a1cc";d3.json("experience.json",function(err,experience){var data=experience.experience;data.forEach(function(d){d.months=months(d.months)});var display=d3.select(".js-display"),visual=d3.chart.visual().data(data).colorOne(colorOne).colorTwo(colorTwo);visual(display);var tabletVisual=d3.chart.mobileVisual().data(data).klass("tablet_visual").width(500).colorOne(colorOne).colorTwo(colorTwo);tabletVisual(display);var mobileVisual=d3.chart.mobileVisual().data(data).colorOne(colorOne).colorTwo(colorTwo);mobileVisual(display)})}};ready(AppName.init());