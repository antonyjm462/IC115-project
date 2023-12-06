document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');
    const showMoreButton = document.getElementById('show-more');
    let visibleCards = 0;
    showNextCards(3);
    showMoreButton.addEventListener('click', function () {
        const cardsToShow = 3;
        showNextCards(cardsToShow);
    });
    function showNextCards(count) {
        for (let i = visibleCards; i < visibleCards + count && i < featureCards.length; i++) {
            featureCards[i].style.display = 'flex';
        }
        visibleCards += count;
        if (visibleCards >= featureCards.length) {
            showMoreButton.style.display = 'none';
        }
    }
});
