// start a game function using the arrow definition
const game = ()=> {
    // score variables
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = ()=> {
        // element variables
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        // fades out the intro screen and fades in the game screen
        playButton.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        })
    }

    // play match
    const playMatch = ()=> {
        // element variables
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        // resets the animation at the end of each animation
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        // for each option to select, run the event listener
        options.forEach(options=> {
            options.addEventListener('click', function() {
                // turn the hands back to rocks
                playerHand.src = './img/rock.png';
                computerHand.src = './img/rock.png';

                // animate
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // waits until animation is finished to run code
                setTimeout(() =>{
                    // compare hands
                    compareHands(this.textContent, computerChoice);

                    // update images
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                }, 2000); // timeout set to 2000 ms

                // log each match
                console.log("Computer choice: " + computerChoice);
                console.log("Player choice: " + this.textContent);
                console.log("\n");
            })
        })
    }

    const updateScore = () => {
        // element variables
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        // display score
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // check for tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        // player chooses rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // player chooses paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return
            }
            else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // player chooses scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    }

    // call all inner functions
    startGame();
    playMatch();
}

// start the game function
game();