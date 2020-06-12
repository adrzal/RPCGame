// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

game = {

    playerChoice: "",
    aiChoice: "",
    gameCount: "",
    wins: "",
    losses: "",
    draws: ""

};

const options = document.querySelectorAll("img");

function playerPick() {
    
    options.forEach(index => {

        index.style.boxShadow = "";

    });

    game.playerChoice = this.getAttribute(`data-option`);

    this.style.boxShadow = "0 0 16px red";

    console.log(game.playerChoice);

}

function aiPick() {

    game.aiChoice = options[Math.floor(Math.random() * options.length)].getAttribute(`data-option`);

}

function play() {
    
    aiPick();
    
    document.getElementById("1").textContent = `Twój wybór: ${game.playerChoice}`;
    document.getElementById("2").textContent = `Wybór komputera: ${game.aiChoice}`;

    game.gameCount++;

    document.querySelector(".numbers span").textContent = game.gameCount;

    if (game.playerChoice == game.aiChoice) {

        game.draws++;

        document.querySelector(".draws span").textContent = game.draws;
        
        document.getElementById("3").textContent = `Zwycięzca gry: REMIS`;

    } else if (game.playerChoice == "kamień" && game.aiChoice == "papier" || game.playerChoice == "papier" && game.aiChoice == "nożyczki" || game.playerChoice == "nożyczki" && game.aiChoice == "kamień") {

        game.losses++;

        document.querySelector(".losses span").textContent = game.losses;
        
        document.getElementById("3").textContent = `Zwycięzca gry: Komputer`;

    } else {

        game.wins++;

        document.querySelector(".wins span").textContent = game.wins;
        
        document.getElementById("3").textContent = `Zwycięzca gry: Gracz`;

    }

}

options.forEach(index => {

    index.addEventListener("click", playerPick);

});

document.querySelector(".start").addEventListener("click", play);;
