document.addEventListener('DOMContentLoaded', () => {
    const reels = document.querySelectorAll('.reel');
    const spinButton = document.getElementById('spin');
    const wagerInput = document.getElementById('wager');
    const winDisplay = document.getElementById('win-display');
    let spinning = false;

    const emojis = ['🍒', '🍋', '🍊', '🍇', '🍓', '🍐'];

    spinButton.addEventListener('click', () => {
        if (!spinning) {
            const wager = parseInt(wagerInput.value);

            if (wager > 0) {
                spinning = true;
                spinReels(wager);
            } else {
                alert('Please enter a valid wager.');
            }
        }
    });

    function spinReels(wager) {
        let spins = 16; // Number of spins
        let results = [];

        const spinInterval = setInterval(() => {
            results = [];

            for (let i = 0; i < reels.length; i++) {
                const randomIndex = Math.floor(Math.random() * emojis.length);
                const emoji = emojis[randomIndex];
                results.push(emoji);

                reels[i].textContent = emoji;
            }

            spins--;

            if (spins === 0) {
                clearInterval(spinInterval);
                spinning = false;
                checkWin(results, wager);
            }
        }, 100);
    }

    function checkWin(results, wager) {
        const uniqueResults = [...new Set(results)]; // Get unique emojis

        if (uniqueResults.length === 1) {
            const emoji = uniqueResults[0];
            const winAmount = wager * (emojis.indexOf(emoji) + 1) * 2; // Double the winnings
            winDisplay.textContent = `You won $${winAmount}!`;
        } else {
            winDisplay.textContent = 'Try again. No win!';
        }
    }
});
