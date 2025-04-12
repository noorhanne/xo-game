let title = document.getElementById('title')

let turn = 'x';
let squares=[];
function edit(num1, num2, num3) {
    title.innerHTML = `${squares[1]} WINNER `;
    document.getElementById('item' + num1).style.background = 'var(--winner-color)';
    document.getElementById('item' + num2).style.background = 'var(--winner-color)';
    document.getElementById('item' + num3).style.background = 'var(--winner-color)';
    setInterval(function(){title.innerHTML += '.' }, 1000);
    setTimeout(function(){location.reload()}, 4000);
   
}

function winner() {

    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;

    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != '') {
        edit(1, 2, 3)
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        edit(4, 5, 6)
    }
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '') {
        edit(7, 8, 9)
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
        edit(1, 4, 7)
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '') {
        edit(2, 5, 8)
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != '') {
        edit(3, 6, 9)
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != '') {
        edit(1, 5, 9)
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '') {
        edit(3, 5, 7)
    }
}




function game(id) {

    let element = document.getElementById(id);
    element.style.cssText = 'display:flex;align-items:center;justify-content:center;font-size:100px;color:green;'

    if (turn === 'x' && element.innerHTML == '') {
        turn = 'o';
        element.innerHTML = 'X';
        title.innerHTML = 'NEXT O';

    }
    else if (turn === 'o' && element.innerHTML == '') {
        turn = 'x';
        element.innerHTML = 'O';
        title.innerHTML = 'NEXT X';
    }
    winner();
}

