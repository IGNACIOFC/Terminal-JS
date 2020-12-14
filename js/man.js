var executeMan = function(inputValue) {
    switch (inputValue.split(" ")[1]) {
        case "pwd":
          addTextToResults("- 'pwd' display the current location.");
          break;
        case "ls":
          addTextToResults("- 'ls' display the list of directory contents.");
          break;
        case "cd":
          addTextToResults("- 'cd [dir]' modify shell working directory to the current [dir].");
          break;
        case "cd ..":
          addTextToResults("- 'cd ..' remove the component from the pathname immediately up to a slash or in the beginning of DIR.");
          break;
        case "mkdir":
          addTextToResults("- 'mkdir [name]' creates directory with the specified [name].");
          break;
        case "echo":
          addTextToResults("- 'echo [content] > [name]' creates file with the specified [name] and specified [content].");
          break;
        case "cat":
          addTextToResults("- 'cat > [name]' shows the content of file with the specified [name].");
          break;
        case "rm":
          addTextToResults("- 'rm [name]' removes the file with specified [name].");
          break;
        case "mv":
          addTextToResults("- 'mv [name1] [name2]' moves or renames files (or directories) from [name1] to [name2].");
          break;
        case "clear":
          addTextToResults("- 'clear' clear the terminal screen.");
          break;    
      }        
}