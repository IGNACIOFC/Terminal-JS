mainDirArray = JSON.parse(localStorage.getItem("arr"));

let validation;

function validateEcho(inputValue) {

        var fileDivision = ""; 
        var fileName = ""; 
        console.log(fileName)
        var content = ""; 

        if (inputValue.split(" ").length<=4){
            if(inputValue.split(" ")[1]== "" || inputValue.split(" ")[1]== undefined ){
                alert("error de prueba");
            } else {
                fileDivision = inputValue.split(">")[1];
                fileName = fileDivision.split(" ")[1];
                console.log(fileName)
                content = inputValue.split('"');
                console.log(new SaveFile(fileName, content[1]));
            }
        }

        return [content, fileName];
}

let newFile = {}

function SaveFile(file_name, file_content) {
    return (this.name = file_name,
    this.content = file_content);
}

newFile = SaveFile



function getCurrantDirArray(directory){
    let arr = mainDirArray;
    var directoryArr = directory.split("/");
    checkDir();
    function checkDir(){
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                if(arr[i].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    index.push(i);
                    arr = arr[i][1]
                    checkDir();
                }
                else{
                }
            }
            else{
            }
        }
    }
    if(directoryArr.length > 1){
        return index;
    }else{
        return directory;
    }
}


function executeEcho(content, fileName){
    let currantDirArray = mainDirArray;
    for(let i = 0; i < index.length; i++){
        currantDirArray = currantDirArray[index[i]][1];
    }
    if(Array.isArray(currantDirArray)){
        currantDirArray.splice(-1, 0, SaveFile(fileName, content));
    }
}