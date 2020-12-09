function pwd(directory){
    clearInput();
    addTextToResults(textInputValue);
    document.getElementById('terminalText').innerHTML += "<p>" + directory + "</p>";
    scrollToBottomOfResults();
}