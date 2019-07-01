/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(g){"object"===typeof module&&module.exports?module.exports=g:"function"===typeof define&&define.amd?define(function(){return g}):g(Highcharts)})(function(g){(function(f){function g(){return Array.prototype.slice.call(arguments,1)}function u(b){b.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,p(this.pointArrayMap,["y"]))}var m=f.addEvent,p=f.pick,t=f.wrap,q=f.each,x=f.extend,y=f.isArray,v=f.fireEvent,n=f.Axis,z=f.Series;x(n.prototype,{isInBreak:function(b,c){var d=
b.repeat||Infinity,e=b.from,a=b.to-b.from;c=c>=e?(c-e)%d:d-(e-c)%d;return b.inclusive?c<=a:c<a&&0!==c},isInAnyBreak:function(b,c){var d=this.options.breaks,e=d&&d.length,a,k,h;if(e){for(;e--;)this.isInBreak(d[e],b)&&(a=!0,k||(k=p(d[e].showPoints,this.isXAxis?!1:!0)));h=a&&c?a&&!k:a}return h}});m(n,"afterInit",function(){"function"===typeof this.setBreaks&&this.setBreaks(this.options.breaks,!1)});m(n,"afterSetTickPositions",function(){if(this.isBroken){var b=this.tickPositions,c=this.tickPositions.info,
d=[],e;for(e=0;e<b.length;e++)this.isInAnyBreak(b[e])||d.push(b[e]);this.tickPositions=d;this.tickPositions.info=c}});m(n,"afterSetOptions",function(){this.isBroken&&(this.options.ordinal=!1)});n.prototype.setBreaks=function(b,c){function d(b){var e=b,c,d;for(d=0;d<a.breakArray.length;d++)if(c=a.breakArray[d],c.to<=b)e-=c.len;else if(c.from>=b)break;else if(a.isInBreak(c,b)){e-=b-c.from;break}return e}function e(b){var c,d;for(d=0;d<a.breakArray.length&&!(c=a.breakArray[d],c.from>=b);d++)c.to<b?b+=
c.len:a.isInBreak(c,b)&&(b+=c.len);return b}var a=this,k=y(b)&&!!b.length;a.isDirty=a.isBroken!==k;a.isBroken=k;a.options.breaks=a.userOptions.breaks=b;a.forceRedraw=!0;k||a.val2lin!==d||(delete a.val2lin,delete a.lin2val);k&&(a.userOptions.ordinal=!1,a.val2lin=d,a.lin2val=e,a.setExtremes=function(a,b,c,d,e){if(this.isBroken){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange}n.prototype.setExtremes.call(this,a,b,c,d,e)},a.setAxisTranslation=
function(b){n.prototype.setAxisTranslation.call(this,b);this.unitLength=null;if(this.isBroken){b=a.options.breaks;var c=[],d=[],e=0,k,f,h=a.userMin||a.min,g=a.userMax||a.max,m=p(a.pointRangePadding,0),l,r;q(b,function(b){f=b.repeat||Infinity;a.isInBreak(b,h)&&(h+=b.to%f-h%f);a.isInBreak(b,g)&&(g-=g%f-b.from%f)});q(b,function(a){l=a.from;for(f=a.repeat||Infinity;l-f>h;)l-=f;for(;l<h;)l+=f;for(r=l;r<g;r+=f)c.push({value:r,move:"in"}),c.push({value:r+(a.to-a.from),move:"out",size:a.breakSize})});c.sort(function(a,
b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});k=0;l=h;q(c,function(a){k+="in"===a.move?1:-1;1===k&&"in"===a.move&&(l=a.value);0===k&&(d.push({from:l,to:a.value,len:a.value-l-(a.size||0)}),e+=a.value-l-(a.size||0))});a.breakArray=d;a.unitLength=g-h-e+m;v(a,"afterBreaks");a.staticScale?a.transA=a.staticScale:a.unitLength&&(a.transA*=(g-a.min+m)/a.unitLength);m&&(a.minPixelPadding=a.transA*a.minPointOffset);a.min=h;a.max=g}});p(c,!0)&&this.chart.redraw()};t(z.prototype,
"generatePoints",function(b){b.apply(this,g(arguments));var c=this.xAxis,d=this.yAxis,e=this.points,a,f=e.length,h=this.options.connectNulls,w;if(c&&d&&(c.options.breaks||d.options.breaks))for(;f--;)a=e[f],w=null===a.y&&!1===h,w||!c.isInAnyBreak(a.x,!0)&&!d.isInAnyBreak(a.y,!0)||(e.splice(f,1),this.data[f]&&this.data[f].destroyElements())});f.Series.prototype.drawBreaks=function(b,c){var d=this,e=d.points,a,f,h,g;b&&q(c,function(c){a=b.breakArray||[];f=b.isXAxis?b.min:p(d.options.threshold,b.min);
q(e,function(d){g=p(d["stack"+c.toUpperCase()],d[c]);q(a,function(a){h=!1;if(f<a.from&&g>a.to||f>a.from&&g<a.from)h="pointBreak";else if(f<a.from&&g>a.from&&g<a.to||f>a.from&&g>a.to&&g<a.from)h="pointInBreak";h&&v(b,h,{point:d,brk:a})})})})};f.Series.prototype.gappedPath=function(){var b=this.currentDataGrouping,c=b&&b.totalRange,b=this.options.gapSize,d=this.points.slice(),e=d.length-1,a=this.yAxis;if(b&&0<e)for("value"!==this.options.gapUnit&&(b*=this.closestPointRange),c&&c>b&&(b=c);e--;)d[e+1].x-
d[e].x>b&&(c=(d[e].x+d[e+1].x)/2,d.splice(e+1,0,{isNull:!0,x:c}),this.options.stacking&&(c=a.stacks[this.stackKey][c]=new f.StackItem(a,a.options.stackLabels,!1,c,this.stack),c.total=0));return this.getGraphPath(d)};t(f.seriesTypes.column.prototype,"drawPoints",u);t(f.Series.prototype,"drawPoints",u)})(g)});
//# sourceMappingURL=broken-axis.js.map