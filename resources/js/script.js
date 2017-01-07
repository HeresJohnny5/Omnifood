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
	
	/* Scroll Animation */
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	
	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	/* Navigation Scroll */
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	
	/* Animation on Scroll */
	/* This makes the features section minus the section-features row not appear on the viewport until the viewport hit a certain waypoint */
	$('.js--wp-1').waypoint(function (direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	/* This makes the phone not appear on the viewport until the viewport hits a certain waypoint */
	$('.js--wp-2').waypoint(function (direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	
	/* This makes the cities section not appear on the viewport until the viewport hits a certain waypoint */
	$('.js--wp-3').waypoint(function (direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	/* This makes the premium plan-box pulse */
	$('.js--wp-4').waypoint(function (direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});
	
	/* Mobile Navigation */
	$('.js--nav-icon').click(function () {
		var nav = $('.js--main-nav'), icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});
	
	/* Maps */
	var map = new GMaps({
		div: '.map',
		lat: 40.4413553,
		lng: -79.9,
		zoom: 12
	});
	
	map.addMarker({
		lat: 40.4413553,
		lng: -79.9883796,
		title: 'Pittsburgh',
		infoWindow: {
  		content: '<p>Our Pittsburgh Headquarters</p>'
		}
	});
	
});