var back1 = 'rgb(216, 146, 170)';
var back2 = 'rgb(209, 148, 145)';
var back3 = 'rgb(133, 30, 47)';
var back4 = 'rgb(140, 124, 153)';
var back5 = 'rgb(241, 177, 116)';


$(function() {
	$('.brain').on('click', function() {
		$('body').css('background', back1);
	});

	$('.torso').on('click', function() {
		$('body').css('background', back2);
	});

	$('.clothing').on('click', function() {
		$('body').css('background', back3);
	});

	$('.armor').on('click', function() {
		$('body').css('background', back4);
	});

	$('.neuro').on('click', function() {
		$('body').css('background', back5);
	});

	$(document).ready(function() {
		var x = Math.floor((Math.random() * 5) + 1);
		if (x === 1) {
			$('body').css('background', back1);
		} else if (x === 2) {
			$('body').css('background', back2);
		} else if (x === 3) {
			$('body').css('background', back3);
		} else if (x === 4) {
			$('body').css('background', back4);
		} else {
			$('body').css('background', back5);
		};
	})
})

