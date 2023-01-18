let gameResultEl = document.getElementById("gameResult-el"); // Aqui se cambia el texto de Score board
let homeScoreEl = document.getElementById("home-score") // Aqui se cambia el valor del H2 de Home
let guestScoreEl = document.getElementById("guest-score") // Aqui se cambia el valor del H2 de Quest
let homeScore = 0
let guestScore = 0

function homePlusOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homePlusTwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homePlusThree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function questPlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function questPlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function questPlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


// esta funcion guarda el resultado en un texto debajo y ademas deja los marcadores a cero.
function newGame() {
    let gameResultStr = " Home Team: " + homeScore + " " + "Guest Team : " + guestScore + " ";
    gameResultEl.innerText += gameResultStr

    homeScore = 0
    homeScoreEl.textContent = homeScore

    guestScore = 0
    guestScoreEl.textContent = guestScore
}

