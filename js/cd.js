var directories1;

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
                if(element[0] == (directoryArr[j+1])){
                    directoryArr.shift();
                    directories1 = element;
                    arr = element[1];
                    console.log(arr);
                    checkDir();
                }
            }
        });
    }
    if(directoryArr.length > 1){
        console.log(directoryPath);
        return directory = directoryPath;
    }else{
        console.log(directory);
        return directory;
    }
}

function cdPoints(directory){
    var arr = JSON.parse(localStorage.getItem("arr"));
    clearInput();
    var directoryArr = directory.split("/");
    directoryArr.pop();
    index = [];


    arr.forEach(element => {
        if(Array.isArray(element)){
            if(element[0].includes(directoryArr[j+1])){
                directories1 = element;
            }
        }
    });
    
    return directory = directoryArr.join("/");;
}