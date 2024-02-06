document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('main');
    let number_of_cards = container.getAttribute('number_of_cards'),
    cards_to_add = '';
    while (number_of_cards > 0) {
        cards_to_add += `<div><img src="images/${number_of_cards}.png"></div>`;
        number_of_cards -= 1;
    };
    container.innerHTML = cards_to_add;
});