var j = 0;

function executeJs(inputValue, index){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
    let currantPTag = document.querySelectorAll('p')[document.querySelectorAll('p').length - 1];
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
                try {
                    eval(arr[j].content);
                    currantPTag.innerHTML += `<br>Result is ${eval(arr[j].content)}`;
                }
                catch(err) {
                    currantPTag.innerHTML += `<br>${err.message}`;
                }
                flag = true;
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