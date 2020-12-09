function cd(directory, inputValue){
    clearInput();
    directory = directory.length < 1 ? directory + inputValue : directory + "/" + inputValue;
    var directoryArr = directory.split("/");
    console.log(directoryArr);
    addTextToResults(textInputValue);

    var arr = JSON.parse(localStorage.getItem("arr"));
    var j = 0;
    checkDir();
    function checkDir(){
        for(let i = 0; i < arr.length; i++){
            console.log(i);
            console.log(j);
            console.log(directoryArr[j+1]);
            console.log(arr);
            if(Array.isArray(arr[i])){
                if(arr[i].includes(directoryArr[j+1])){
                    j++;
                    arr = arr[i][1];
                    checkDir();
                }
                else{
                }
            }
            else{
            }
        }
    }
    return directory;
}

function cdPoints(directory){
    clearInput();
    addTextToResults(textInputValue);
    var directoryArr = directory.split("/");
    console.log(directoryArr);
    directoryArr.pop();
    console.log(directoryArr);
    return directory = directoryArr.join("/");;
}