let tttBox = document.getElementById('tttBox');
let winner = document.getElementById('winner');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');

let b1state = 'empty'
let b2state = 'empty'
let b3state = 'empty'
let b4state = 'empty'
let b5state = 'empty'
let b6state = 'empty'
let b7state = 'empty'
let b8state = 'empty'
let b9state = 'empty'

let player = document.getElementById('player');

let num = Math.floor(Math.random() * 2) + 1
let first;
if (num == 1) {
    first = 'X'
}
else {
    first = 'O'
}

setTimeout(() => {
    player.innerHTML = `${first} goes first`;
}, 4000);

player.innerHTML = 'Choose X or O';

b1.onclick = function buttonpress() {
    if (num == 1 && b1state == 'empty') {
        b1.innerHTML = 'X'
        num = 2
        b1state = 'X'
    }
    else if (num == 2 && b1state == 'empty') {
        b1.innerHTML = 'O'
        num = 1
        b1state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
    
}

b2.onclick = function buttonpress() {
    if (num == 1 && b2state == 'empty') {
        b2.innerHTML = 'X'
        num = 2
        b2state = 'X'
    }
    else if (num == 2 && b2state == 'empty') {
        b2.innerHTML = 'O'
        num = 1
        b2state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b3.onclick = function buttonpress() {
    if (num == 1 && b3state == 'empty') {
        b3.innerHTML = 'X'
        num = 2
        b2state = 'X'
    }
    else if (num == 2 && b3state == 'empty') {
        b3.innerHTML = 'O'
        num = 1
        b3state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b4.onclick = function buttonpress() {
    if (num == 1 && b4state == 'empty') {
        b4.innerHTML = 'X'
        num = 2
        b4state = 'X'
    }
    else if (num == 2 && b4state == 'empty') {
        b4.innerHTML = 'O'
        num = 1
        b4state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b5.onclick = function buttonpress() {
    if (num == 1 && b5state == 'empty') {
        b5.innerHTML = 'X'
        num = 2
        b5state = 'X'
    }
    else if (num == 2 && b5state == 'empty') {
        b5.innerHTML = 'O'
        num = 1
        b5state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b6.onclick = function buttonpress() {
    if (num == 1 && b6state == 'empty') {
        b6.innerHTML = 'X'
        num = 2
        b6state = 'X'
    }
    else if (num == 2 && b6state == 'empty') {
        b6.innerHTML = 'O'
        num = 1
        b6state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b7.onclick = function buttonpress() {
    if (num == 1 && b7state == 'empty') {
        b7.innerHTML = 'X'
        num = 2
        b7state = 'X'
    }
    else if (num == 2 && b7state == 'empty') {
        b7.innerHTML = 'O'
        num = 1
        b7state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b8.onclick = function buttonpress() {
    if (num == 1 && b8state == 'empty') {
        b8.innerHTML = 'X'
        num = 2
        b8state = 'X'
    }
    else if (num == 2 && b8state == 'empty') {
        b8.innerHTML = 'O'
        num = 1
        b8state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}

b9.onclick = function buttonpress() {
    if (num == 1 && b9state == 'empty') {
        b9.innerHTML = 'X'
        num = 2
        b9state = 'X'
    }
    else if (num == 2 && b9state == 'empty') {
        b9.innerHTML = 'O'
        num = 1
        b9state = 'O'
    }
    switch (true) {
        case b1state == 'X' && b2state == 'X' && b3state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O' && b2state == 'O' && b3state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b4state == 'X' && b5state == 'X' && b6state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b4state == 'O' && b5state == 'O' && b6state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b7state == 'X' && b8state == 'X' && b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b7state == 'O' && b8state == 'O' && b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b4state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b4state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b2state == 'X'&& b5state == 'X'&& b8state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b2state == 'O'&& b5state == 'O'&& b8state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b6state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b6state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b1state == 'X'&& b5state == 'X'&& b9state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b1state == 'O'&& b5state == 'O'&& b9state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        case b3state == 'X'&& b5state == 'X'&& b7state == 'X': console.log('X is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='X is the WINNER!!!!';
        break;
        case b3state == 'O'&& b5state == 'O'&& b7state == 'O': console.log('O is the WINNER!!!!'); tttBox.style.display = "none"; winner.style.display = "flex"; winner.innerHTML ='O is the WINNER!!!!';
        break;
        default: 
    }
}


