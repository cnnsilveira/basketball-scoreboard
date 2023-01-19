let countHome = 0
let countGuest = 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let highHome = document.getElementById("score-wrap-home")
let highGuest = document.getElementById("score-wrap-guest")

function highlight() {
    if (countHome > countGuest) {  
        highHome.style.border = "3px solid #F94F6D"
        highGuest.style.border = "none"
    }
    else if (countGuest > countHome) {
        highGuest.style.border = "3px solid #F94F6D"
        highHome.style.border = "none"
    }
    else if (countHome === 0 && countGuest === 0) {
        highHome.style.border = "none"
        highGuest.style.border = "none"
    }
    else {
        highHome.style.border = "3px solid #e6e600"
        highGuest.style.border = "3px solid #e6e600"
    }
}

function newGame() {
    countHome = 0
    countGuest = 0
    scoreHome.innerText = countHome
    scoreGuest.innerText = countGuest
    highlight()
}

function plusPoints(a, b) {
    if (a == 'home') {
        countHome = countHome + b
        scoreHome.innerText = countHome
    } else if (a == 'guest') {
        countGuest = countGuest + b
        scoreGuest.innerText = countGuest
    } else {
        alert('Something\'s wrong');
    }
    highlight()
}


/*
Old code to compare


// Highlight the leader

function highlight() {
    if (countHome > countGuest) {  
        highHome.style.border = "3px solid #F94F6D"
        highGuest.style.border = "none"
    }
    else if (countGuest > countHome) {
        highGuest.style.border = "3px solid #F94F6D"
        highHome.style.border = "none"
    }
    else if (countHome === 0 && countGuest === 0) {
        highHome.style.border = "none"
        highGuest.style.border = "none"
    }
    else {
        highHome.style.border = "3px solid #e6e600"
        highGuest.style.border = "3px solid #e6e600"
    }
}

// New Game

function newGame() {
    countHome = 0
    countGuest = 0
    scoreHome.innerText = countHome
    scoreGuest.innerText = countGuest
    highlight()
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
*/