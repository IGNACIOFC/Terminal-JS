const get = document.getElementById.bind(document);
const terminal = get('terminal');
const create = document.createElement.bind(document);
var textInputValue;

window.onload = function() {
    init();
    get("terminalTextInput").focus();
};

function clearInput(){
    get('terminalTextInput').value = "";
}

var terminalResultsDiv = get('terminalText');

// Scrtoll to the bottom of the results div
function scrollToBottomOfResults(){
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}
// Scroll to the bottom of the results
scrollToBottomOfResults();
// Add text to the results div
function addTextToResults(text){
    terminalResultsDiv.innerHTML += "<p>" + text + "</p>";
    scrollToBottomOfResults();
}


function init(){
    var terminalInit = create("div");
    terminalInit.append(createSpan());
    terminalInit.append(createInput());
    terminal.append(terminalInit);
}

function createSpan(){
    var terminalOutput = create("span");
    terminalOutput.setAttribute("id","terminalTextOutput");
    terminalOutput.setAttribute("value", "");
    terminalOutput.innerHTML = `> `
    return terminalOutput;
}

function createInput(){
    var userInput = create("input");
    userInput.setAttribute("id","terminalTextInput");
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
    textInputValue = document.getElementById('terminalTextInput').value.trim();
    addTextToResults(`>${textInputValue}`);
    switch(inputValue.split(" ")[0]){
        case "pwd":
            alert("funcion pwd");
            break;
        case "ls":
            if(inputValue.trim() == "ls"){
                alert("funcion ls");
            }
            else{
                switch(inputValue.split(" ")[1]){
                    case "-R":
                        alert("funcion ls -R");
                        break;
                    case "-S":
                        alert("funcion ls -S");
                        break;
                    case "-t":
                        alert("funcion ls -t");
                        break;
                    default:
                        alert("error");
                        break;
                }
            }
            break;
        case "cd":
            switch(inputValue.split(" ")[1]){
                case "..":{
                    alert("funcion cd ..");
                    break;
                }
                default:
                    if (inputValue.split(" ").length<=2){
                        if(inputValue.split(" ")[1]== "" || inputValue.split(" ")[1]== undefined){
                            alert("error");
                        }
                        else{
                            alert("ok");
                        }
                        break;
                    }
                    else{
                        alert("error");
                        break;
                    }
            }
            break;
        case "mkdir":
            if (inputValue.split(" ").length<=2){
                if(inputValue.split(" ")[1]== "" || inputValue.split(" ")[1]== undefined){
                    alert("error");
                }
                else{
                    alert("ok");
                }
                break;
            }
            else{
                alert("error");
                break;
            }
        case "cat":
            if (inputValue.split(" ").length<=2){
                alert(inputValue.split(" ")[1]);
                break;
            }
            else{
                alert("error");
                break;
            }
        case "rm":
            if (inputValue.split(" ").length<=2){
                alert(inputValue.split(" ")[1]);
                break;
            }
            else{
                alert("error");
                break;
            }
        case "echo":
        case "mv":
        case "clear":
            clearInput();
            terminalResultsDiv.innerHTML = "";
            break;
        case "help":
            clearInput();
            executeHelp();
            break;
        default:
            alert("error no existe");
            break;
    }
    clearInput();
    // addTextToResults('>');
}

