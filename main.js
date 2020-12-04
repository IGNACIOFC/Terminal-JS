const get = document.getElementById.bind(document);
const terminal = get('terminal');
const create = document.createElement.bind(document);

window.onload = function() {
    init();
};

function init(){
    var terminalInit = create("div");
    var initText = create("p");
    initText.innerHTML = ">Welcome to our terminal";
    terminalInit.append(initText);
    terminalInit.append(createInput());
    terminal.append(terminalInit);
}

function createInput(){
    var userInput = create("input");
    userInput.setAttribute("value", "");
    userInput.setAttribute("class", "userInput");
    userInput.setAttribute("type", "text");
    userInput.addEventListener("keyup",submitInput);
    return userInput;
}

function submitInput(event){
    if (event.key === "Enter") {
        mainEvent(event.target.value);
    }
}

function mainEvent(inputValue){
    switch(inputValue){
        case "ls":
            alert("funcion ls");
            break;
        case "cd":
            alert("funcion cd");
            break;
        case "pwd":
            alert("funcion pwd");
            break;
    }
}

