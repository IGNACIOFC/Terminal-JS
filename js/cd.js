function cd(directory, inputValue){
    clearInput();
    var directoryPath = directory;
    directory = directory.length < 1 ? directory + inputValue : directory + "/" + inputValue;
    var directoryArr = directory.split("/");

    var arr = JSON.parse(localStorage.getItem("arr"));
    var j = 0;

    checkDir();

    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                // console.log(element)
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkDir();
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
    var directoryArr = directory.split("/");
    directoryArr.pop();
    return directory = directoryArr.join("/");;
}