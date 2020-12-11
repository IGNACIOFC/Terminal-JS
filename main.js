const get = document.getElementById.bind(document);
const terminal = get("terminal");
const create = document.createElement.bind(document);
var textInputValue;
var directory;

window.onload = function () {
  init();
  get("terminalTextInput").focus();
  directory = "";
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
  terminalResultsDiv.innerHTML += "<p>" + text + "</p>";
  scrollToBottomOfResults();
}

function init() {
  var terminalInit = create("div");
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

function mainEvent(inputValue) {
  textInputValue = document.getElementById("terminalTextInput").value.trim();
  addTextToResults(`>${textInputValue}`);
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
            // alert("funcion ls -R");
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
          alert("error");
        } else {
          alert("ok");
        }
        break;
      } else {
        alert("error");
        break;
      }
    case "cat":
      if (inputValue.split(" ").length <= 2) {
        alert(inputValue.split(" ")[1]);
        break;
      } else {
        alert("error");
        break;
      }
    case "rm":
      if (inputValue.split(" ").length <= 2) {
        alert(inputValue.split(" ")[1]);
        break;
      } else {
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
    case "cd":
      switch (inputValue.split(" ")[1]) {
        case "..": {
          alert("funcion cd ..");
          break;
        }
        default:
          if (inputValue.split(" ").length <= 2) {
            if (
              inputValue.split(" ")[1] == "" ||
              inputValue.split(" ")[1] == undefined
            ) {
              alert("error");
            } else {
              alert("ok");
            }
            break;
          } else {
            alert("error");
            break;
          }
      }
  }
  console.log(directory);
}
