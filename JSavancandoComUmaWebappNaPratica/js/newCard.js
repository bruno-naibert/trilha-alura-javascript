var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');

$newCard.addEventListener('submit', function(event) {

  if ($newCardContent.value == '') {
    event.preventDefault();
    console.log('Está vazio!');
  }
});
