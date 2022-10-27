function createHtmlElement(type, classes='', text='', attributes = '', values = '') {
    let elem = document.createElement(type)

    if(classes !== ''){
        if (Array.isArray(classes)){
            classes.forEach((c) => elem.classList.add(c));
        }else {
            elem.classList.add(classes);
        }
    }
    elem.innerHTML = text;


    if(attributes !== ''){
        if (Array.isArray(attributes)){
            for (let i = 0; i < attributes.length; i++) {
                elem.setAttribute(attributes[i], values[i])
            }
        }else {
            elem.setAttribute(attributes, values)
        }
    }
    
    return elem;
}

let title = createHtmlElement('span', 'title', 'JS Counter');
document.body.append(title);

let wrapperExternal = createHtmlElement('div', 'wrapper-external');
let wrapperInternal = createHtmlElement('div', 'wrapper-internal');
let containerCounter = createHtmlElement('div', "container-counter");
let containerNumber = createHtmlElement('div', "container-number", '', 'id', "container-number");
let containerButtons = createHtmlElement('div', "container-buttons", '', 'id', 'container-buttons');


containerCounter.append(containerNumber, containerButtons);
wrapperInternal.append(containerCounter);
wrapperExternal.append(wrapperInternal)
document.body.append(wrapperExternal);