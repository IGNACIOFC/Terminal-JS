function pwd(directory){
    clearInput();
    document.getElementById('terminalText').innerHTML += "<p>" + directory + "</p>";
    scrollToBottomOfResults();
}