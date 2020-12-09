function cd(directory, inputValue){
    clearInput();
    var directoryPath = directory;
    directory = directory.length < 1 ? directory + inputValue : directory + "/" + inputValue;
    var directoryArr = directory.split("/");

    addTextToResults(textInputValue);

    var arr = JSON.parse(localStorage.getItem("arr"));
    var j = 0;

    checkDir();

    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    console.log(directoryArr);
                    arr = element[1];
                    checkDir();
                    console.log(arr);
                }
                else{
                }
            }
            else{
            }
        });
    }
    if(directoryArr.length > 1){
        return directory = directoryPath;
    }else{
        return directory;
    }
}

function cdPoints(directory){
    clearInput();
    addTextToResults(textInputValue);
    var directoryArr = directory.split("/");
    directoryArr.pop();
    return directory = directoryArr.join("/");;
}