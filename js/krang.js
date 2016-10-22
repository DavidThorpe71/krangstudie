$(function() {
	$('.brain').on('click', function() {
		$('body').css('background', 'rgb(216, 146, 170)');
	});

	$('.torso').on('click', function() {
		$('body').css('background', 'rgb(209, 148, 145)');
	});

	$('.clothing').on('click', function() {
		$('body').css('background', 'rgb(133, 30, 47)');
	});

	$('.armor').on('click', function() {
		$('body').css('background', 'rgb(140, 124, 153)');
	});

	$('.neuro').on('click', function() {
		$('body').css('background', 'rgb(241, 177, 116)');
	});

	$(document).ready(function() {
		var x = Math.floor((Math.random() * 5) + 1);
		if (x === 1) {
			$('body').css('background', 'rgb(216, 146, 170)');
		} else if (x === 2) {
			$('body').css('background', 'rgb(209, 148, 145)');
		} else if (x === 3) {
			$('body').css('background', 'rgb(133, 30, 47)');
		} else if (x === 4) {
			$('body').css('background', 'rgb(140, 124, 153)');
		} else {
			$('body').css('background', 'rgb(241, 177, 116)');
		};
	})
})

