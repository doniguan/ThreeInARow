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
                // cells[i].style.backgroundcolor = 'green'
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
        } else {
            cellsSwap(coord)
        }
    }
    if (coord === 9) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord + 10) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord === 90) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord - 10) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord === 99) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord - 10) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord > 0 && coord < 9) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord + 10 && coord !== buffer.coord - 1) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord > 90 && coord < 99) {
        if (coord !== buffer.coord + 1 && coord !== buffer.coord - 10 && coord !== buffer.coord - 1) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord % 10 === 0 && coord !== 0 && coord !== 90) {
        if (coord !== buffer.coord - 10 && coord !== buffer.coord + 10 && coord !== buffer.coord + 1) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    if (coord + 1 % 10 === 0 && coord !== 9 && coord !== 99) {
        if (coord !== buffer.coord - 1 && coord !== buffer.coord + 10 && coord !== buffer.coord - 10) {
            clickReset()
        } else {
            cellsSwap(coord)
        }
    }
    cellsSwap(coord)
}

function clickReset () {
    buffer.coord = null
    buffer.symbol = ''
    console.log('reseted: ' + buffer.coord + ", " + buffer.symbol)
}

function cellsSwap (coord) {
    cells[buffer.coord].innerHTML = cells[coord].innerHTML
    cells[coord].innerHTML = buffer.symbol
    buffer.coord = null
    buffer.symbol = ''
    console.log('s')
}