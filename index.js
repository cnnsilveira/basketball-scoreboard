let countHome = 0
let countGuest = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let highHome = document.getElementById("score-wrap-home")
let highGuest = document.getElementById("score-wrap-guest")

// Highlight the leader

function highlight() {
    if (countHome > countGuest) {  
        highHome.style.boxShadow = "0 0 20px white"
        highGuest.style.boxShadow = "none"
    }
    else if (countGuest > countHome) {
        highGuest.style.boxShadow = "0 0 20px white"
        highHome.style.boxShadow = "none"
    }
    else {
        highHome.style.boxShadow = "0 0 20px rgb(255, 123, 123)"
        highGuest.style.boxShadow = "0 0 20px rgb(255, 123, 123)"
    }
}

// New Game

function newGame() {
    countHome = 0
    countGuest = 0
    scoreHome.innerText = countHome
    scoreGuest.innerText = countGuest
    highHome.style.boxShadow = "none"
    highGuest.style.boxShadow = "none"
}

// Home

function plusOneHome() {
    countHome = countHome + 1
    scoreHome.innerText = countHome
    highlight()
}
function plusTwoHome() {
    countHome = countHome + 2
    scoreHome.innerText = countHome
    highlight()
}
function plusThreeHome() {
    countHome = countHome + 3
    scoreHome.innerText = countHome
    highlight()
}

// Guest

function plusOneGuest() {
    countGuest = countGuest + 1
    scoreGuest.innerText = countGuest
    highlight()
}
function plusTwoGuest() {
    countGuest = countGuest + 2
    scoreGuest.innerText = countGuest
    highlight()
}
function plusThreeGuest() {
    countGuest = countGuest + 3
    scoreGuest.innerText = countGuest
    highlight()
}

