var $cardColors = document.querySelectorAll('.card-colors');

for (var index = 0; index < $cardColors.length; index++) {
	$cardColors[index].addEventListener('click', function() {
		var $card = this.parentNode.parentNode.parentNode;

		console.log($card.dataset.color);

		$card.dataset.color = this.dataset.color;
	});
};

