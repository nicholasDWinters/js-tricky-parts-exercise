function guessingGame() {
    this.rand = Math.floor(Math.random() * 100);
    this.count = 0;
    this.gameOver = false;

    return function game(num) {
        if (gameOver) return `The game is over, you already won!`;
        if (num > rand) {
            count++;
            return `${num} is too high!`;
        } else if (num < rand) {
            count++;
            return `${num} is too low!`;
        } else {
            count++;
            gameOver = true;
            return `You win! You found ${num} in ${count} guesses.`
        }

    }
}
let game = guessingGame();


module.exports = { guessingGame };
