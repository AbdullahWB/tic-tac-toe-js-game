let music = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = 'X'

// function
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X'
}

// function to check 
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let winner = ''
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== '')) {
            winner = boxTexts[e[0]].innerText
        }
    })
    if (winner !== '') {
        document.querySelector('.info').innerText = winner + ' won'
    } else {
        document.querySelector('.info').innerText = 'Turn for ' + turn
    }
}


// main logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxTexts = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        if (boxTexts.innerText === '') {
            boxTexts.innerText = turn
            turn = changeTurn()
            turnMusic.play()
            checkWin()
            document.querySelector('.info').innerText = 'Turn for ' + turn;
            console.log(document.querySelector('.info').innerText = 'Turn for ' + turn)
        }
    })
})