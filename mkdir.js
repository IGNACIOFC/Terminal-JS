mainDirArray = JSON.parse(localStorage.getItem("arr"));

var j = 0;
let index = [];

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


function executeMkdir(inputValue){
    let currantDirArray = mainDirArray;
    for(let i = 0; i < index.length; i++){
        currantDirArray = currantDirArray[index[i]][1];
    }
    console.log(currantDirArray);
    if(Array.isArray(currantDirArray)){
        currantDirArray.splice(0, 0, [inputValue.split(" ")[1], []]);
    }
}
