let cells = []
let firstIcon = '1'
let secondIcon = '2'
let thirdIcon = '3'
let fourthIcon = '4'
let fifthIcon = '5'
let sixthIcon = '6'

let scoresCounter

onload = function () {

    cells = document.getElementsByClassName('cell')

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = (i + 10 * 3) % 5
    }
}