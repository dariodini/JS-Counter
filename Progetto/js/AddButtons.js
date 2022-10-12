let decreaseButton = document.createElement('button');
decreaseButton.setAttribute('data-action', 'decreaseNumber');
decreaseButton.innerText = 'MENO';


let resetButton = document.createElement('button');
resetButton.setAttribute('data-action', 'resetNumber');
resetButton.innerText = 'RESET';


let increaseButton = document.createElement('button');
increaseButton.setAttribute('data-action', 'increaseNumber');
increaseButton.innerText = 'PIU';



let containerButtons = document.getElementById('container-buttons');

containerButtons.append(decreaseButton, resetButton, increaseButton);


