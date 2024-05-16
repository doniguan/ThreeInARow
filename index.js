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

let scores

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

  if (coord !== buffer.coord + 1 && coord != buffer.coord - 1 && coord !== buffer.coord + 10 && coord !== buffer.coord - 10) {
    clickReset()
    return false
  } else {
    cellsSwap(coord)
    threeInARowCheck()
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

function threeInARowCheck () {
    for (let i = 0; i < cells.length/10; i++) {
      for (let j = 0; j < 8; j ++) {
        if (cells[i * 10 + j].innerHTML === cells[i * 10 + j + 1].innerHTML &&
          cells[i * 10 + j].innerHTML === cells[i * 10 + j + 2].innerHTML) {
          cellsDelete()
        }
        if (cells[j * 10 + i].innerHTML === cells[j * 10 + i + 10].innerHTML &&
          cells[j * 10 + i].innerHTML === cells[j * 10 + i + 20].innerHTML) {
            console.log('true')
          cellsDelete()
        }
      }
      //         || (cells[i].innerHTML === cells[i + 10].innerHTML && cells[i] === cells[i + 20].innerHTML))
        // if (i = 0) {
        //     if ((cells[i].innerHTML === cells[i + 1].innerHTML && cells[i].innerHTML === cells [i + 2].innerHTML)
        //         || (cells[i].innerHTML === cells[i + 10].innerHTML && cells[i] === cells[i + 20].innerHTML)) {
        //       console.log('true')
        //     return true
        // } else {
        //     return false
        // }
        // }
    }
}

function tableFulfill () {

}

function cellsDelete () {

}

function newCellsFulfill () {

}

function scoresCounter () {
    
}