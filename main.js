const get = document.getElementById.bind(document);
const terminal = get("terminal");
const create = document.createElement.bind(document);
var textInputValue;
var directory;
var historyArr = [];
var counter = 0;
let index = [];

window.onload = function () {
  directory = "main";
  init();
  get("terminalTextInput").focus();
  
};

function clearInput() {
  get("terminalTextInput").value = "";
}

var terminalResultsDiv = get("terminalText");

// Scrtoll to the bottom of the results div
function scrollToBottomOfResults() {
  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}
// Scroll to the bottom of the results
scrollToBottomOfResults();
// Add text to the results div
function addTextToResults(text) {
  terminalResultsDiv.innerHTML +=`<p>${directory} ${text}</p>`;
  scrollToBottomOfResults();
}


var spanDirectory = document.createElement("span");

function init() {
  var terminalInit = create("div");
  spanDirectory.innerHTML = directory;
  terminalInit.append(spanDirectory);
  terminalInit.append(createInput());
  terminal.append(terminalInit);
}

function createInput() {
  var userInput = create("input");
  userInput.setAttribute("id", "terminalTextInput");
  userInput.setAttribute("value", "");
  userInput.setAttribute("class", "userInput");
  userInput.setAttribute("type", "text");
  userInput.addEventListener("keyup", submitInput);
  return userInput;
}

function submitInput(event) {
  if (event.key === "Enter") {
    storeInput(event.target.value);
    mainEvent(event.target.value);
  }
  else if(event.keyCode == 38){
    browseUp();
  }
  else if(event.keyCode == 40){
    browseDown();
  }
  else if(event.keyCode == 9){
    autocompleteDir();
  }
  else if(event.keyCode == 27){
    exitTerminal();
  }
}


function addDirectory (directory) {

  spanDirectory.innerHTML = "<br>";
  spanDirectory.innerHTML += directory + " $";
  terminalResultsDiv.append(spanDirectory)
  spanDirectory.style.color = "yellow";

}

function mainEvent(inputValue) {
  textInputValue = document.getElementById("terminalTextInput").value.trim();
  addTextToResults(`${textInputValue}`);
  switch (inputValue.split(" ")[0]) {
    case "pwd":
      pwd(directory);
      break;
    case "ls":
      if (inputValue.trim() == "ls") {
        ls_Function();
      } else {
        switch (inputValue.split(" ")[1]) {
          case "-R":
            ls_R_Function();
            break;
          case "-S":
            ls_S();
            alert("funcion ls -S");
            break;
          case "-t":
            ls_t();
            alert("funcion ls -t");
            break;
          default:
            alert("error");
            break;
        }
      }
      break;
    case "cd":
      switch (inputValue.split(" ")[1]) {
        case "..": {
          directory = cdPoints(directory);
          break;
        }
        default:
          if (inputValue.split(" ").length <= 2) {
            if (
              inputValue.split(" ")[1] == "" ||
              inputValue.split(" ")[1] == undefined
            ) {
              clearInput();
              addTextToResults(textInputValue + " doesn't exist");
            } else {
              directory = cd(directory, inputValue.split(" ")[1]);
            }
            break;
          } else {
            clearInput();
            addTextToResults(textInputValue + " doesn't exist");
            break;
          }
      }
      break;
    case "mkdir":
      clearInput();
      if (inputValue.split(" ").length <= 2) {
        if (
          inputValue.split(" ")[1] == "" ||
          inputValue.split(" ")[1] == undefined
        ) {
          addTextToResults(textInputValue + " doesn't exist");
          break;
        } else {
          if(inputValue.split(" ")[1].split("/").length > 1){
            getCurrantDirArray(directory);
            executeMkdirFolder(inputValue, index);
            break;
          }
          else {
            getCurrantDirArray(directory);
            executeMkdir(inputValue, index);
            break;
          }
        }
      } else {
        addTextToResults(textInputValue + " doesn't exist");
        break;
      }
    case "cat":
        console.log("entra");
        if (inputValue.split(" ").length<=5){
            cat(inputValue);
            break;
        }
        else{
            alert("error");
            break;
        }
    case "rm":
      clearInput();
      if(inputValue.split(" ").length<=2){
        if (
          inputValue.split(" ")[1] == "" ||
          inputValue.split(" ")[1] == undefined
        ) {
          addTextToResults(textInputValue + " doesn't exist");
        } else {
          getCurrantDirArray(directory);
          executeRm(inputValue, index);
        }
        break;
      }
      if ((inputValue.split(" ").length<=3) && (inputValue.split(" ")[1]== "-rf") ){
          if(inputValue.split(" ")[2]== "" || inputValue.split(" ")[2]== undefined){
              addTextToResults(textInputValue + " doesn't exist");
              break;
          }
          else{
              getCurrantDirArray(directory);
              executeRmRf(inputValue, index);
              break;
          }
      }
      else{
          addTextToResults(textInputValue + " doesn't exist");
          break;
      }
    case "echo":
    case "mv":
      if (inputValue.split(" ").length == 3) {
        if (
          inputValue.split(" ")[2] == "" ||
          inputValue.split(" ")[2] == undefined
        ) {
          clearInput();
          addTextToResults(textInputValue + " doesn't exist");
        } else {
          clearInput();
          mv(inputValue);
        }
        break;
      } else {
        clearInput();
        alert("error");
        break;
      }
    case "clear":
      clearInput();
      terminalResultsDiv.innerHTML = "";
      break;
    case "help":
      clearInput();
      executeHelp();
      break;
      case "JS":
        clearInput();
        if(inputValue.split(" ").length<=2){
          if (
            inputValue.split(" ")[1] == "" ||
            inputValue.split(" ")[1] == undefined
          ) {
            addTextToResults(textInputValue + " doesn't exist");
          } else {
            getCurrantDirArray(directory);
            executeJs(inputValue, index);
          }
          break;
        }
    case "man":
      clearInput();
      executeMan(inputValue);
      break;
    default:
      clearInput();
      alert("error no existe");
      break;
  }
  spanDirectory.innerHTML = directory;
  console.log(directory);
  // localStorage.setItem("arr", JSON.stringify(mainDirArray));
  //lo he comentado porque esto debe estar local, si no hara un "reset" de todo el arr
}

function storeInput(input){
  historyArr.push(input);
  localStorage.setItem("history", JSON.stringify(historyArr));
}

function browseUp(){
  if(historyArr.length <= counter){
    counter = historyArr.length;
  }
  else{
    counter++;
    event.target.value = historyArr[historyArr.length - counter];
  }
}
function browseDown(){
  if(counter <= 1){
    counter = 0;
    event.target.value = "";
  }
  else{
    event.target.value = historyArr[historyArr.length - counter + 1];
    counter --;
  }
}

function autocompleteDir(){

}

function exitTerminal(){
  clearInput();
  terminalResultsDiv.innerHTML = "";
  var terminal = get('terminal-container');
  terminal.style.display = "none";
  var openButton = document.createElement("button");
  openButton.innerHTML = "Open Terminal";
  openButton.setAttribute("class", "openButton");
  openButton.addEventListener("click", function(){
    openButton.style.display = "none";
    terminal.style.display = "block";
    get("terminalTextInput").focus();
    directory = "main";
  });
  document.body.append(openButton);
}
