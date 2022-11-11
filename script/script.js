`use strict`;

const Player0 = document.getElementById('player_0');
const player1 = document.getElementById('player_1');
const TotalScore1 = document.getElementById('Totalscore0');
const TolalScore2 = document.getElementById('Totalscore1');
const CurentScore1 = document.getElementById('CorentScore0');
const CurentScore2 = document.getElementById('CorentScore1');

const restart = document.getElementById('restart');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceEl = document.getElementById('dice')
const massageEl = document.getElementById('massage')
const mainel = document.getElementById('main')

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
    massageEl.classList.add('massage')
    if(main.activePlayer === 0){
        massageEl.innerText = 'קɭคץєг เ'
    }else if (main.activePlayer === 1){
        massageEl.innerText = 'קɭคץєг เเ'
    }
    diceEl.classList.add('hidden')
}



// eventListiner;

roll.addEventListener(`click`,()=>{

    dice = Math.trunc(Math.random()* 6)+1
    diceEl.classList.remove('hidden')
    diceEl.innerHTML = ` <img src="./images/dice${dice}.png" alt="dice image" />`;
    if(dice !== 1){
        massageEl.innerHTML = null
        main.score += dice;
        document.getElementById(`CorentScore${main.activePlayer}`).innerText = 
        main.score; 
    }else{
        SwitchPlayer()
        listEl = document.createElement('p')
        massageEl.appendChild(listEl)
        listEl.innerText = 'its 🎲 One'
        listEl.classList.add('list')   
    }
})

hold.addEventListener(`click`,()=>{
    main.Scores[main.activePlayer] += main.score
    document.getElementById(`Totalscore${main.activePlayer}`).innerText = 
    main.Scores[main.activePlayer];
    if(main.Scores[main.activePlayer] >= 10){
        let winner = document.getElementById(`player_${main.activePlayer}`)
        winner.classList.add('winner')
        winner.innerHTML = `<h1>Yσυ Wσɳ</h1>`
        roll.classList.add('hidden')
        hold.classList.add('hidden')
        diceEl.classList.add('hidden')
        restart.classList.add('hidden')
        massageEl.innerHTML = `<button class="newbtn" onclick="newgame()">🏁 Start Again</button>`
    }else{
        SwitchPlayer()
        listEl = document.createElement('p')
        massageEl.appendChild(listEl)
        listEl.innerText = `it's hold`
        listEl.classList.add('list') 
    }
    
})

restart.addEventListener(`click`,()=>{
    roll.classList.remove('hidden')
        hold.classList.remove('hidden')
        winner = document.getElementById(`player_${main.activePlayer}`)
    init()
})

let newStart = document.getElementsByClassName('newbtn')

function newgame(){
        location.reload();
    init()
}


init();