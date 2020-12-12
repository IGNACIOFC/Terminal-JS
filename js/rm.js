var j = 0;

// getCurrantDirArray(directory);

function executeRm(inputValue, index){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
    let flag = false;
    let arr = [];
    if(index.length > 0){
        for(let i = 0; i < index.length; i++){
            arr = currantDirArray[index[i]][1];
        }
    }
    else{
        arr = currantDirArray;
    }
    console.log(index);
    console.log(arr);
    for(let j = 0; j < arr.length; j++){
        console.log(arr[j]);
        if(arr[j][0] === inputValue.split(' ')[2]){
            flag = true;
            arr.splice(j, 1);
        }
    }
    if(flag){
        localStorage.setItem("arr", JSON.stringify(currantDirArray));
        console.log('flag')
    }
    else{
        addTextToResults(`There is no "${inputValue.split(" ")[2]}" folder in currant directory`);
    }
}