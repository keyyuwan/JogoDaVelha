// preciso conferir se meu documento já carregou
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.addEventListener("click", handleClick)
    })

})

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            let winnerSymbol = (playerTime === 0) ? '⚫' : '✖️'
            alert(`O JOGO ACABOU, PARABÉNS AO JOGADOR: ${winnerSymbol}`)
        }, 10)
    }
    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(String(position))
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        let position = square.id
        square.innerHTML = ''
    })
}

function restart() {
    board = ['', '', '', '', '', '', '', '', '']
    playerTime = 0
    gameOver = false
    updateSquares()
}