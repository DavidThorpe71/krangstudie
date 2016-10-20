$(function() {
	// $('.row').on('click', function() {
	// 	$(".selected").removeClass('selected');
	// 	$(this).addClass('selected');
	// });

	$('.brain').on('click', function () {
		$('#page').removeClass();
		$('#page').addClass('brainb');
	});
	$('.torso').on('click', function () {
		$('#page').removeClass();
		$('#page').addClass('torsob');
	});
	$('.clothing').on('click', function () {
		$('#page').removeClass();
		$('#page').addClass('clothingb');
	});
	$('.armor').on('click', function () {
		$('#page').removeClass();
		$('#page').addClass('armorb');
	});
	$('.neuro').on('click', function () {
		$('#page').removeClass();
		$('#page').addClass('neurob');
	});

})

