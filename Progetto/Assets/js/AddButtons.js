let decreaseButton = createHtmlElement('button', '', '', 'data-action', 'decreaseNumber');
let decreaseImage = createHtmlElement('img', '', '', ['src', 'data-action'], ['Assets/img/minus.svg', 'decreaseNumber'])
decreaseButton.append(decreaseImage);


let resetButton = createHtmlElement('button', '', '', 'data-action', 'resetNumber');
let resetImage = createHtmlElement('img', '', '', ['src', 'data-action'], ['Assets/img/reset.svg', 'resetNumber'])
resetButton.append(resetImage);


let increaseButton = createHtmlElement('button', '', '', 'data-action', 'increaseNumber');
let increaseImage = createHtmlElement('img', '', '', ['src', 'data-action'], ['Assets/img/add.svg', 'increaseNumber'])
increaseButton.append(increaseImage);


document.getElementById('container-buttons').append(decreaseButton, resetButton, increaseButton);


