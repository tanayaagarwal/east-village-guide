const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        flipCards.forEach(c => {
            if (c !== card) {
                c.classList.remove('flipped');
            }
        });
        
        card.classList.toggle('flipped');
    });
});