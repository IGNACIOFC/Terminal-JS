var j = 0;

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

function executeMkdirFolder(inputValue, index){
    currantDirValue = inputValue.split(' ')[1].split('/');
    currantInput = inputValue.split(' ')[0] + ' ' + currantDirValue.splice(-1,1);
    currantDirectory = currantDirValue.join('/');
    getCurrantDirArray(currantDirectory);
    if((currantDirValue.length - 1) === index.length){
        executeMkdir(currantInput, index);
    }
    else{
        addTextToResults(`There is no such directory "${currantDirectory}"`);
    }
}

function executeMkdir(inputValue, index){
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

    if(Array.isArray(arr)){
        arr.splice(0, 0, [inputValue.split(" ")[1], []]);
        flag = true;
    }
    if(flag){
        localStorage.setItem("arr", JSON.stringify(currantDirArray));
        console.log('flag')
    }
}
