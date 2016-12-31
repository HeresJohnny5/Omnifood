/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	
	/* Sticky Navigation */
	$('.js--section-features').waypoint(function (direction) {
		if (direction === "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px'
	});
	
});