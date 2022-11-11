`use strict`;

const Player0 = document.getElementById('player_1');
const player1 = document.getElementById('player_2');
const TotalScore1 = document.getElementById('Totalscore0');
const TolalScore2 = document.getElementById('Totalscore1');
const CurentScore1 = document.getElementById('CorentScore0');
const CurentScore2 = document.getElementById('CorentScore1');

const restart = document.getElementById('restart');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceEl = document.getElementById('dice')

//globle variables
const main = {
    Scores : [0,0],
    score : 0,
    activePlayer : 0,
}


//functions
function init(){
    TotalScore1.innerText = 0;
    TolalScore2.innerText = 0;
    CurentScore1.innerText = 0;
    CurentScore2.innerText = 0;

    diceEl.classList.add('hidden')

    Player0.classList.add('player_active');
}

function SwitchPlayer(){
    main.score = 0;
    document.getElementById(`CorentScore${main.activePlayer}`).innerText = 
    main.score; 
    main.activePlayer = main.activePlayer === 0 ? 1 : 0;
    Player0.classList.toggle('player_active');
    player1.classList.toggle('player_active');
    massageEl = document.getElementById('massage')
    massageEl.classList.add('massage')
    massageEl.innerText = `nowplayer${main.activePlayer}`;
}



// eventListiner;

roll.addEventListener(`click`,()=>{
    dice = Math.trunc(Math.random()* 6)+1
    diceEl.classList.remove('hidden')
    diceEl.innerHTML = ` <img src="./images/dice${dice}.png" alt="dice image" />`;
    if(dice !== 1){
        main.score += dice;
        document.getElementById(`CorentScore${main.activePlayer}`).innerText = 
        main.score; 
    }else{
        SwitchPlayer()
        
    }
})

hold.addEventListener(`click`,()=>{
    main.Scores[main.activePlayer] += main.score
    document.getElementById(`Totalscore${main.activePlayer}`).innerText = 
    main.Scores[main.activePlayer];
    if(main.Scores[main.activePlayer] >= 25){
        console.log('win')
        roll.classList.add('hidden')
        hold.classList.add('hidden')
        diceEl.classList.add('hidden')
    }else{
        SwitchPlayer()
        diceEl.classList.add('hidden')
    }
    
})

restart.addEventListener(`click`,()=>{
    roll.classList.remove('hidden')
        hold.classList.remove('hidden')
    init()
})




init();