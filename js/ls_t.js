function executeLsT(inputValue, index){
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
        if(Array.isArray(arr[j])){
            flag = flag;
            console.log(arr[j]);
        }
        else{
            console.log(arr[j].date);
        }
    }
};
