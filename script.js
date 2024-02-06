document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main'), 
    cards = document.querySelectorAll('main > div');

    cards.forEach(function(card) {
        card.onclick = function() {
            card.classList.toggle('open')
            setTimeout(function() {
                card.classList.toggle('show');
            }, (250 / 2) - 50);
        };
    });

    for (var i = main.children.length; i >= 0; i--) {
        main.appendChild(main.children[Math.random() * i | 0]);
    };

    const cards_after_shuffle = document.querySelectorAll('main > div');
    let cards_after_shuffle_counter = 0;
    cards_after_shuffle.forEach(function(card) {
        cards_after_shuffle_counter += 1;
        card.setAttribute('num', `${cards_after_shuffle_counter}`);
    });
});