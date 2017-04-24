var $cardColors = document.querySelectorAll('.card-colors');

for (var index = 0; index < $cardColors.length; index++) {
	$cardColors[index].addEventListener('click', function() {
		var $card = this.parentNode.parentNode.parentNode;

		$card.dataset.color = this.dataset.color;
		for (var position = 0; position < $cardColors.length; position++) {
			$cardColors[position].classList.remove('isActive');
		}

		this.classList.add('isActive');
	});
};

