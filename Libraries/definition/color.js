/* @flow */
"use strict";

var grayBase = "rgb(0,0,0)";

function shadeColor(color, percent) {   
	var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
	return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
	var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
	return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

exports.grayBase = grayBase;
exports.grayDarker = shadeRGBColor(grayBase, 13.5);
exports.grayDark = shadeRGBColor(grayBase, 20);
exports.gray = shadeRGBColor(grayBase, 33.5);
exports.grayLight = shadeRGBColor(grayBase, 46.7);
exports.grayLighter = shadeRGBColor(grayBase, 93.5);
exports.brandPrimary = shadeRGBColor("rgba(66,139,202)", -6.5);
exports.brandSuccess = "#5cb85c";
exports.brandInfo = "#5bc0de";
exports.brandWarning = "#f0ad4e";
exports.brandDanger = "#d9534f";