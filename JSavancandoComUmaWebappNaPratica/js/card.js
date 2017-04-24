var $cardColors = document.querySelectorAll('.card-colors');

for (var index = 0; index < $cardColors.length; index++) {
	$cardColors[index].addEventListener('click', function() {
		console.log('voce clicou')
	});
};

