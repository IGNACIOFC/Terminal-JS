// var j = 0;

function executeRm(inputValue, index){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
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

    for(let j = 0; j < arr.length; j++){
        if(Array.isArray(arr[j])){
            flag = flag;
        }
        else{
            if(arr[j].name ===  inputValue.split(' ')[1]){
                flag = true;
                arr.splice(j, 1);
                console.log(arr);
                console.log(flag);
            }
        }
    }
    if(flag){
        localStorage.setItem("arr", JSON.stringify(currantDirArray));
    }
    else{
        addTextToResults(`There is no "${inputValue.split(" ")[1]}" file in currant directory`);
    };
};

function executeRmRf(inputValue, index){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
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
    };
};
