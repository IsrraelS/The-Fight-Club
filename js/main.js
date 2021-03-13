let dic1 = document.getElementById("pig1");
let dic2 = document.getElementById("pig2");
let dic3 = document.getElementById("pig3");
let dic4 = document.getElementById("pig4");

let player1 = document.getElementById("slcA");
let player2 = document.getElementById("slcB");

let dictators = [dic1, dic2, dic3, dic4];

let select1;
let select2; 

$(".pig").click((ev) => {
    if (select1 == undefined) {
        select1 = ev;
        player1.innerHTML = select1;
        console.log(select1); //esto lo hago para verificar lo que devuelve
    } else {
        select2 = ev; 
        player2.innerHTML = select2;
        console.log(select2);
    }
});
