var executeHelp = function(){
    var helpKeyWords = [
    " GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)",
    "Press «help» to see the list.",
    "Use «man [name]» to get more information about [name] function.",
    "",
    "- 'pwd' display the current location.",
    "- 'ls' display the list of directory contents",
    "- 'cd [dir]' modify shell working directory to the current [dir].",
    "- 'cd ..' remove the component from the pathname immediately up to a slash or in the beginning of DIR.",
    "- 'mkdir [name]' creates directory with the specified [name].",
    "- 'echo [content] > [name]' creates file with the specified [name] and specified [content].",
    "- 'cat > [name]' shows the content of file with the specified [name].",
    "- 'rm [name]' removes the file with specified [name].",
    "- 'mv [name1] [name2]' moves or renames files (or directories) from [name1] to [name2].",
    "- 'clear' clear the terminal screen.",
    "",
    // "<br>",
    ].join('<br>');
    addTextToResults(helpKeyWords);
}

