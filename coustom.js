let music = new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameOverMusic = new Audio("gameover.mp3")
let turn = 'X'
let isGameOver = false

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
        isGameOver = true
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px"
    } else {
        document.querySelector('.info').innerText = 'Turn for ' + turn
    }
}


// main logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxTexts = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        // music.play()
        if (boxTexts.innerText === '') {
            boxTexts.innerText = turn
            turn = changeTurn()
            turnMusic.play()
            checkWin()
            if (!isGameOver) {
                document.querySelector('.info').innerText = 'Turn for ' + turn;
            }
        }
    })
})

// rest button
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'X'
    isGameOver = false
    document.querySelector('.info').innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})