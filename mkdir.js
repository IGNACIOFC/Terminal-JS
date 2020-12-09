currantDirArray = JSON.parse(localStorage.getItem("arr"));

function executeMkdir(inputValue){
    if(Array.isArray(currantDirArray)){
        currantDirArray.splice(0, 0, [inputValue.split(" ")[1], []]);
        console.log(currantDirArray)
    }
}
