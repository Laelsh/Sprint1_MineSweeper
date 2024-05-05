'use strict'


// The Model
var gBoard
var gLevel = { size: 4, mines: 2 }
var gGame = { isOn: false, shownCount: 0, markedCount: 0, secsPassed: 0 }

const MINE = '💣'
const FLAG = '🚩'


function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}


function buildBoard() {
    var board = []

    for (var i = 0; i < gLevel.size; i++) {
        board.push([])
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = { minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
        }
    }

    setMines(board)

    setMinesNegsCount(board)

    console.table(board)

    return board;
}



function setMines(board) {
    board[0][0].isMine = MINE
    board[3][3].isMine = MINE
}


function setMinesNegsCount(board) {

    for (var i = 0; i < gLevel.size; i++) {
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j].minesAroundCount = checkCellNegsCount(board, i, j)

        }
    }

}


function checkCellNegsCount(board, rowIdx, colIdx) {
    var count = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue
            var currCell = board[i][j].isMine
            if (currCell === MINE) count++
        }
    }
    return count
}



function renderBoard(board) {
    // console.table(board)
    const elBoard = document.querySelector('.board')
    var strHtml = ''

    for (var i = 0; i < board.length; i++) {
        strHtml += `\n<tr>`
        for (var j = 0; j < board[i].length; j++) {
var cell = board[i][j]

if (cell.isMine === MINE) cell = cell.isMine
else if (cell.minesAroundCount > 0) cell = cell.minesAroundCount
else if (cell.minesAroundCount = 0 && !cell.isMine) cell = ''

            strHtml += `\n\t<td data-i="${i}" data-j="${j}">${cell}</td>`
        }
        strHtml += `\n</tr>`
        elBoard.innerHTML = strHtml
    }
    console.log(strHtml)
}




function onCellClicked(elCell, i, j) {

}


function onCellMarked(elCell) {

}


function checkGameOver() {

}


function expandShown(board, elCell, i, j) {

}