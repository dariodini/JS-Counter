let decreaseButton = document.createElement('button');
decreaseButton.setAttribute('data-action', 'decreaseNumber');
let decreaseImage = document.createElement('img');
decreaseImage.setAttribute('src', 'img/minus.svg');
decreaseImage.setAttribute('data-action', 'decreaseNumber');
decreaseButton.append(decreaseImage);



let resetButton = document.createElement('button');
resetButton.setAttribute('data-action', 'resetNumber');
let resetImage = document.createElement('img');
resetImage.setAttribute('src', 'img/reset.svg');
resetImage.setAttribute('data-action', 'resetNumber');
resetButton.append(resetImage);


let increaseButton = document.createElement('button');
increaseButton.setAttribute('data-action', 'increaseNumber');
let increaseImage = document.createElement('img');
increaseImage.setAttribute('src', 'img/add.svg');
increaseImage.setAttribute('data-action', 'increaseNumber');
increaseButton.append(increaseImage);


let containerButtons = document.getElementById('container-buttons');

containerButtons.append(decreaseButton, resetButton, increaseButton);


