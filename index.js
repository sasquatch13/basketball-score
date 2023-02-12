let homeCount = 0
let awayCount = 0
let homeScore = document.getElementById('home-score')
let awayScore = document.getElementById('away-score')


function homeUp1() {
    homeCount += 1
    homeScore.innerText = homeCount
}
function homeUp2() {
    homeCount += 2
    homeScore.innerText = homeCount
}
function homeUp3() {
    homeCount += 3
    homeScore.innerText = homeCount
}
function awayUp1() {
    awayCount += 1
    awayScore.innerText = awayCount
}
function awayUp2() {
    awayCount += 2
    awayScore.innerText = awayCount
}
function awayUp3() {
    awayCount += 3
    awayScore.innerText = awayCount
}