var mainArr = JSON.parse(localStorage.getItem("arr"));

function mv(inputValue){
    var file = inputValue.split(" ")[1];
    var arr = mainArr;
    var directoryArr = directory.split("/");
    var j = 0;

    checkDir();
    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkDir();
                }
                else if(element[0] == file){
                    if(inputValue.split(" ")[2].includes("/")){
                        if(ifDirectoryExist(inputValue.split(" ")[2])){
                            var popArr = arr.splice(arr.indexOf(element), 1);
                            insertInNewDirectory(popArr[0], inputValue.split(" ")[2]);
                        };
                    }
                }
            }
            else{
                if(element.name == file){
                    if(inputValue.split(" ")[2].includes("/")){
                        if(ifDirectoryExist(inputValue.split(" ")[2])){
                            var popFile = arr.splice(arr[element], 1);
                            insertInNewDirectory(popFile, inputValue.split(" ")[2]);
                        };
                    }
                    else{
                        element.name = inputValue.split(" ")[2];
                        return element.name;
                    }
                }
            }
        });
    }
    localStorage.setItem("arr", JSON.stringify(mainArr));
}

function ifDirectoryExist(newDirectory){
    var arr = mainArr;
    var directoryArr = newDirectory.split("/");
    var j = 0;
    checkDir();
    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkDir();
                }
            }
        });
        return arr;
    }
    if(directoryArr.length > 1){
        addTextToResults("The '" + newDirectory + "' doesn't exist");
    }else{
        return true;
    }

}

function insertInNewDirectory(popFile, newDirectory){
    var arr = mainArr;
    var directoryArr = newDirectory.split("/");
    var j = 0;
    checkDir();
    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkDir();
                }
            }
        });
    }
    arr.push(popFile);
    console.log(arr);
}