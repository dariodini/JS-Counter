class Button{
    number = 0;
    constructor(elem) {
        this._elem = elem;
        this.updateNumber(this.number);
        elem.onclick = this.onClick.bind(this);
    }

    updateNumber() {
        document.getElementById('container-number').innerText = this.number;
    }
    increaseNumber(){
        this.updateNumber(this.number++);
    }
    resetNumber(){
        this.updateNumber(this.number = 0);
    }
    decreaseNumber(){
        this.updateNumber(this.number --);
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

let buttons = document.getElementById('container-buttons');
new Button(buttons);