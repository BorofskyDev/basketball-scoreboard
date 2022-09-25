let homeScoreBox = document.getElementById("home-score")
let homePlusOne = document.getElementById('home-plus-one')
let homePlusTwo = document.getElementById('home-plus-two')
let homePlusThree = document.getElementById('home-plus-three')

let guestScoreBox = document.getElementById("guest-score")
let guestPlusOne = document.getElementById('guest-plus-one')
let guestPlusTwo = document.getElementById('guest-plus-two')
let guestPlusThree = document.getElementById('guest-plus-three')

let homeScore = 0
let guestScore = 0

function addHomePlusOne() {
    homeScore += 1
    homeScoreBox.textContent = homeScore
}

function addHomePlusTwo() {
    homeScore += 2
    homeScoreBox.textContent = homeScore
} 

function addHomePlusThree() {
    homeScore += 3
    homeScoreBox.textContent = homeScore
}

function addGuestPlusOne(){
    guestScore += 1
    guestScoreBox.textContent = guestScore
}

function addGuestPlusTwo() {
    guestScore += 2
    guestScoreBox.textContent = guestScore
}

function addGuestPlusThree() {
    guestScore += 3
    guestScoreBox.textContent = guestScore
}