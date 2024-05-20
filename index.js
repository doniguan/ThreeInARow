//сделать правильный подсчёт очков - за большие ряды больше очков, за несколько рядов сразу, за несколько рядов подряд мультиплаер
//вывести счётчик очков
//сделать задержку исчезновения и спускания вниз
//сделать визуал
//починить обмен ячейками на краях поля
//cellsDelete -> cellsFulfiling, возможно, лишний шаг


let cells = []
let icons = ['1', '2', '3', '4', '5', '6']
let scoresMultiplyer = 0
let scores = 0

let buffer = {
    coord: null,
    symbol: ''
}

onload = function () {

    cells = document.getElementsByClassName('cell')
    for (let i = 0; i < cells.length; i++) {
        oneCellFulfillling(i)
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
    while (checkHelper() === false) {
    checkForThreeOnStart()
    }
}

function coordsCheck (coord) {

  if(coord % 10 === 0 && (buffer.coord + 1) % 10 === 0 || buffer.coord % 10 === 0 && (coord + 1) % 10 === 0) {
    clickReset()
    return false
  }
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
          cellsDelete(i * 10 + j, i * 10 + j + 1, i * 10 + j + 2)
          return true
        }
        if (cells[j * 10 + i].innerHTML === cells[j * 10 + i + 10].innerHTML &&
          cells[j * 10 + i].innerHTML === cells[j * 10 + i + 20].innerHTML) {
          cellsDelete(j * 10 + i, j * 1- + i + 10, j * 10 + i + 20)
          return true
        }
      }
    }
    return false
}

function cellsDelete (first, second, third) {
  cells[first].innerHTML = ''
  cells[second].innerHTML = ''
  cells[third].innerHTML = ''
  newCellsFulfill()
  threeInARowCheck()
  scoresMultiplyer++
}

function newCellsFulfill () {
  for (let i = cells.length - 1; i >= 0; i--) {
    if(cells[i].innerHTML === '') {
      cellMovingDown(i)
    }
  }
}

function cellMovingDown(coord) {
  if (coord > 9 && cells[coord - 10].hasChildNodes()) {
    cells[coord].innerHTML = cells[coord - 10].innerHTML
    cells[coord - 10].innerHTML = ''
  }
  if (coord > 9 && !cells[coord - 10].hasChildNodes()) {
    cellMovingDown(coord - 10)
  }
  if (coord < 10) {
    oneCellFulfillling (coord)
  }
}

function oneCellFulfillling(coord) {
  cells[coord].innerHTML = icons[Math.round(Math.random() * 5)]
}

function checkForThreeOnStart () {
  for (let i = 0; i < cells.length/10; i++) {
    for (let j = 0; j < 8; j ++) {
      if (cells[i * 10 + j].innerHTML === cells[i * 10 + j + 1].innerHTML &&
        cells[i * 10 + j].innerHTML === cells[i * 10 + j + 2].innerHTML) {
          oneCellFulfillling(i * 10 + j)
      }
      if (cells[j * 10 + i].innerHTML === cells[j * 10 + i + 10].innerHTML &&
        cells[j * 10 + i].innerHTML === cells[j * 10 + i + 20].innerHTML) {
        oneCellFulfillling(j * 10 + i)
      }
    }
  }
}

function checkHelper() {
  for (let i = 0; i < cells.length/10; i++) {
    for (let j = 0; j < 8; j ++) {
      if (cells[i * 10 + j].innerHTML === cells[i * 10 + j + 1].innerHTML &&
        cells[i * 10 + j].innerHTML === cells[i * 10 + j + 2].innerHTML) {
          return false
      }
      if (cells[j * 10 + i].innerHTML === cells[j * 10 + i + 10].innerHTML &&
        cells[j * 10 + i].innerHTML === cells[j * 10 + i + 20].innerHTML) {
        return false
      }
    }
  }
}

function scoresCounter () {
      
}