document.addEventListener('DOMContentLoaded', () => {
    const reels = document.querySelectorAll('.reel');
    const spinButton = document.getElementById('spin');
    let spinning = false;

    spinButton.addEventListener('click', () => {
        if (!spinning) {
            spinning = true;
            spinReels();
        }
    });

    function spinReels() {
        let spins = 24; // Number of spins

        const spinInterval = setInterval(() => {
            for (let i = 0; i < reels.length; i++) {
                reels[i].style.backgroundPositionY = getRandomPosition() + 'px';
            }

            spins--;

            if (spins === 0) {
                clearInterval(spinInterval);
                spinning = false;
            }
        }, 100);
    }

    function getRandomPosition() {
        //simulate spinning
        return Math.floor(Math.random() * 10) * -100;
    }
});