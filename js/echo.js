var fileDivision = ""; 
var fileName = ""; 
console.log(fileName)
var content = "";
var newFile = {}
var j = 0;

const random = (min = 0, max = 50) => {
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

function SaveFile(file_name, file_content) {
    this.name = file_name,
    this.content = file_content,
    this.size = random(100, 1000),
    this.date = Date.parse(new Date())
}

function validateEcho(inputValue) {  
    if (inputValue.split(" ").length<=10){
        if(inputValue.split(" ")[1]== "" || inputValue.split(" ")[1]== undefined ){
            alert("error de prueba");
        } else {
            //console.log(inputValue)
            fileDivision = inputValue.split(">")[1];
            //console.log(fileDivision)
            fileName = fileDivision.split(" ")[1];
            //console.log(fileName)
            content = inputValue.split('"');
            //console.log(new SaveFile(fileName, content[1]));
            newFile = new SaveFile(fileName, content[1]);
        };
    };
};


function getCurrantDirArray(directory){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
    let arr = currantDirArray;
    var directoryArr = directory.split("/");
    checkDir();
    function checkDir(){
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                if(arr[i].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    index.push(i);
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
    if(directoryArr.length > 1){
        return index;
    }
}


function executeEcho(inputValue, index){
    let currantDirArray =  JSON.parse(localStorage.getItem("arr"));
    let flag = false;
    let arr = currantDirArray;

    cutCurrantDirArray();

    function cutCurrantDirArray(){
        if(index.length > 0){
            for(let i = 0; i < index.length; i++){
                if(Array.isArray(arr)){
                    arr = arr[index[i]][1];
                    index.shift();
                    cutCurrantDirArray();
                }
            };
        };
    };

    console.log(arr);
    if(Array.isArray(arr)){
        arr.splice(-1, 0, newFile);
        flag = true;
    }
    if(flag){
        localStorage.setItem("arr", JSON.stringify(currantDirArray));
        console.log('flag')
    }
}
