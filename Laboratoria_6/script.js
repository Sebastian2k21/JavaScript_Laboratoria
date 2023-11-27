const kulka = document.getElementById("kulka");

let lastBeta = null;
let lastAlpha = null;

let posX = 0;
let posY = 0;

let wins = 0
let ilosc = document.getElementById("ilosc");
ilosc.innerHTML = wins + "";

const dziuraX = 300 - 10 - 15
const dziuraY = 300 - 10 - 15

let currentTime = 0;    

const timer = document.getElementById("timer");

const button = document.getElementById("start");
button.addEventListener("click", function() { 
    posX = 0;
    posY = 0;
    kulka.style.top = posY + "px";
    kulka.style.left = posX + "px";
    wins = 0;
    currentTime = 0
    ilosc.innerHTML = wins + "";
    button.disabled = true

    var refreshIntervalId = setInterval(function() {
        timer.innerHTML = currentTime + ""
        currentTime++
        if(currentTime === 60) {
            currentTime = 0
            timer.innerHTML = currentTime + ""
            button.disabled = false
            alert("Koniec czasu, ilosc trafien: " + wins)
            let lista = document.getElementById("listaRekordow")
            let li = document.createElement("li")
            li.innerHTML = wins + ""
            lista.appendChild(li)
            clearInterval(refreshIntervalId);
        }
    }, 1000)
})

window.addEventListener("deviceorientation", function(event) {
   console.log(event.alpha, event.beta, event.gamma)
    if (lastBeta !== null && lastAlpha !== null) {
        let diffX = event.alpha - lastAlpha;
        if(Math.abs(diffX) > 20) {
            diffX = 0;
        }
        let diffY = event.beta - lastBeta;
        if(Math.abs(diffY) > 20) {
            diffY = 0;
        }

        posX += diffX*4
        posY += diffY*3 
        
        let srX = posX + 10;
        let srY = posY + 10;
        if(Math.sqrt(Math.pow(srX - dziuraX, 2) + Math.pow(srY - dziuraY, 2)) < 15) {
            posX = 0;
            posY = 0;
            wins++;
            ilosc.innerHTML = wins + "";
        }

        if(posX < 0) {
            posX = 0;
        }
        if(posX > 280) {
            posX = 280;
        }
        if(posY < 0) {
            posY = 0;
        }
        if(posY > 280) {
            posY = 280;
        }

        kulka.style.top = posY + "px";
        kulka.style.left = posX + "px";
        
    }

    lastBeta = event.beta;
    lastAlpha = event.alpha;


}, true);

