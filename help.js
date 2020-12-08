var executeHelp = function(){
    var helpKeyWords = [
    "GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)",
    "Press «help» to see the list.",
    "Press «help name» to get information about “name” function.",
    "- 'pwd' will display the current location.",
    "- 'cd [-L|[-P [-e]]] [dir]' will go to the current [dir].",
    "* There are more keywords that you have to discover by yourself.",
    "<br>",
    ].join('<br>');
    addTextToResults(helpKeyWords);
}

