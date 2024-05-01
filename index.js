let cells = []
let firstIcon = '1'
let secondIcon = '2'
let thirdIcon = '3'
let fourthIcon = '4'
let fifthIcon = '5'
let sixthIcon = '6'

let buffer = {
    coord: null,
    symbol: ''
}

let scoresCounter

onload = function () {

    cells = document.getElementsByClassName('cell')

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = (i + 10 * 3) % 5
        cells[i].addEventListener('click', function () {
            if (buffer.symbol === '') {
                buffer.symbol = cells[i].innerHTML
                buffer.coord = i
                cells[i].style.backgroundColor = '#50a049'
            } else {
                coordsCheck(i)
            }
          })
    }
}

function coordsCheck (coord) {
    if (coord === 0) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord + 10) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
        }
    }
    if (coord === 9) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord + 10) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord === 90) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord - 10) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord === 99) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord - 10) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord > 0 && coord < 9) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord + 10 && coord !== buffer.coord - 1) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord > 90 && coord < 99) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord - 10 && coord !== buffer.coord - 1) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord % 10 === 0 && coord !== 0 && coord !== 90) {
        if (coord !== buffer.coord - 10 && coord !== buffer.coord + 10 && coord !== buffer.coord + 1) {
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
    if (coord + 1 % 10 === 0 && coord !== 9 && coord !== 99) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord + 10 && coord !== buffer.coord - 10) {
            console.log('s')
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
    }
        if (coord !== buffer.coord - 1 &&
            coord !== buffer.coord - 11 &&
            coord !== buffer.coord - 10 &&
            coord !== buffer.coord - 9 &&
            coord !== buffer.coord + 1 &&
            coord !== buffer.coord + 9 &&
            coord !== buffer.coord + 10 &&
            coord !== buffer.coord + 11) {
            console.log('s')
            clickReset()
            return false
        } else {
            cellsSwap(coord)
            return true
        }
}

function clickReset () {
    cells[buffer.coord].style.backgroundColor = 'fff'
    buffer.coord = null
    buffer.symbol = ''
}

function cellsSwap (coord) {
    cells[buffer.coord].innerHTML = cells[coord].innerHTML
    cells[coord].innerHTML = buffer.symbol
    cells[buffer.coord].style.backgroundColor = 'fff'
    buffer.coord = null
    buffer.symbol = ''
}