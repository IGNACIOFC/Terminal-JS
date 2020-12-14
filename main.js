const get = document.getElementById.bind(document);
const terminal = get("terminal");
const create = document.createElement.bind(document);
var textInputValue;
var directory;
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



function init() {
  var terminalInit = create("div");
  var spanDirectory = document.createElement("span");
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
    mainEvent(event.target.value);
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
      if (inputValue.split(" ").length <= 2) {
        if (
          inputValue.split(" ")[1] == "" ||
          inputValue.split(" ")[1] == undefined
        ) {
          addTextToResults(textInputValue + " doesn't exist");
        } else {
          clearInput();
          getCurrantDirArray(directory);
          executeMkdir(inputValue, index);
        }
        break;
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
          clearInput();
          getCurrantDirArray(directory);
          executeRm(inputValue, index);
        }
        break;
      }
      if ((inputValue.split(" ").length<=3) && (inputValue.split(" ")[1]== "-rf") ){
          if(inputValue.split(" ")[2]== "" || inputValue.split(" ")[2]== undefined){
              clearInput();
              addTextToResults(textInputValue + " doesn't exist");
          break;
          }
          else{
              clearInput();
              getCurrantDirArray(directory);
              executeRmRf(inputValue, index);
              break;
          }
      }
      else{
          clearInput();
          addTextToResults(textInputValue + " doesn't exist");
          break;
      }
    case "echo":
      if (inputValue.split(" ").length <= 10) {
        if (
          inputValue.split(" ")[1] == "" ||
          inputValue.split(" ")[1] == undefined
        ) {
          addTextToResults(textInputValue + " doesn't exist");
        } else {
          clearInput();
          validateEcho(inputValue)
          getCurrantDirArray(directory);
          executeEcho(inputValue, index);
        }
        break;
      } else {
        addTextToResults(textInputValue + " doesn't exist");
        break;
      }
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
    case "man":
      clearInput();
      executeMan(inputValue);
      break;
    default:
      clearInput();
      alert("error no existe");
      break;
  }
  
  console.log(directory);
  // localStorage.setItem("arr", JSON.stringify(mainDirArray));
  //lo he comentado porque esto debe estar local, si no hara un "reset" de todo el arr
}