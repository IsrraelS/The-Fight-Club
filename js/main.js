let dic1 = document.getElementById("pig1");
let dic2 = document.getElementById("pig2");
let dic3 = document.getElementById("pig3");
let dic4 = document.getElementById("pig4");

let player1 = document.getElementById("slcA");
let player2 = document.getElementById("slcB");

let dictators = [dic1, dic2, dic3, dic4];

let imgPutin = document.getElementById("putin");
let imgKim = document.getElementById("kim");
let imgTrump = document.getElementById("trump");
let imgMaduro = document.getElementById("maduro");

let select1;
let select2;

let arrayRPS = ['rock', 'paper', 'scissors'];

let player1RoundScore = 0;
let player2RoundScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;

//funcion para crear el evento y tenerlo en una variable
$(".pig").click((ev) => {
    if (select1 == undefined) {
        select1 = ev.target.id;
        player1.innerHTML = select1;
        console.log(select1); //esto lo hago para verificar lo que devuelve
    } else {
        select2 = ev.target.id; 
        player2.innerHTML = select2;
        console.log(select2);
    }
    console.log(player1);
    console.log(player2);
});

// funciones de inicializacion de score 

setRoundScoreToZero = () => {
    player1RoundScore = 0;
    player2RoundScore = 0;
}

setTotalScoreToZero = () => {
    player1TotalScore = 0;
    player2TotalScore = 0;
}

// funcion para elegir al azar una de las tres opciones de arrayRPS

randomPick = () => {
    return arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
}

// funcion que genera la eleccion de cada player al azar

generateRandomPick = () => {

    let player1Pick = randomPick();
    let player2Pick = randomPick();

    // lo que se muestra en pantalla
    $('#player1Pick').html(player1Pick);
    $('#player2Pick').html(player2Pick);

    // declaramos condicionales para elegir ganador de una ronda
    if (player1Pick === 'scissors' && player2Pick === 'paper') {
        player1RoundScore = player1RoundScore + 1;

    } else if (player1Pick === 'scissors' && player2Pick === 'rock') {
        player2RoundScore = player2RoundScore + 1;

    } else if (player1Pick === 'rock' && player2Pick === 'paper') {
        player2RoundScore = player2RoundScore + 1;

    } else if (player1Pick === 'rock' && player2Pick === 'scissors') {
        player1RoundScore = player1RoundScore + 1;

    } else if (player1Pick === 'paper' && player2Pick === 'rock') {
        player1RoundScore = player1RoundScore + 1;

    } else if (player1Pick === 'paper' && player2Pick === 'scissors') {
        player2RoundScore = player2RoundScore + 1;
    }

    //condicionales para elegir ganador de ronda
    if (player1RoundScore === 3) {
        player1TotalScore = player1TotalScore + 1;
        setRoundScoreToZero();
    } else if (player2RoundScore === 3) {
        player2TotalScore = player2TotalScore + 1;
        setRoundScoreToZero();
    }

    //condicionales para elegir el ganador final
    if (player1TotalScore === 3) {
        alert(`${select1} Wins!`);
        setRoundScoreToZero();
        setTotalScoreToZero();
    } else if (player2TotalScore === 3) {
        alert(`${select2} Wins!`);
        setRoundScoreToZero();
        setTotalScoreToZero();
    }

    //resultados por pantalla
    ( funtion = () => {
        $('#player1RoundScore').html(player1RoundScore);
        $('#player2RoundScore').html(player2RoundScore);
        $('#player1TotalScore').html(player1TotalScore);
        $('#player2TotalScore').html(player2TotalScore);
    })();

}