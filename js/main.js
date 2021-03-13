let dic1 = document.getElementsByClassName("pig1");
let dic2 = document.getElementsByClassName("pig2");
let dic3 = document.getElementsByClassName("pig3");
let dic4 = document.getElementsByClassName("pig4");

let dictators = [dic1, dic2, dic3, dic4];

// posible solucion con forEach
/*
document.querySelectorAll('dictators').forEach(item => {
    item.addEventsListener('dbclick', () => {
        return document.getElementById("slcA").innerHTML = selA;
    })
})*/

// no me funciona :(

//----------------------------------------------------
// segundo intento con forEach

document.addEventListener('dblclick', function () {
        let selA = dictators[dictators.forEach];
        return document.getElementById("slcA").innerHTML = selA;
    })

//da como resultado undifined :(

//------------------------------------------------------

// posible solucion con un bucle for

// cada elemento tendra mediante un bucle for la funcion onclick
/*
for (let i = 0; i < dictators.length; i++){
    
    dictators[i].addEventListener('dbclick', () => {
        console.log(i)
    })

}

document.getElementById("slcA").innerHTML = selA;*/