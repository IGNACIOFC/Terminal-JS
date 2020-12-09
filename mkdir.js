currantDirArray = JSON.parse(localStorage.getItem("arr1"));

function executeMkdir(inputValue){
    if((typeof(currantDirArray[0]) === "string") && (typeof(currantDirArray[1]) === "object")){
        currantDirArray.splice(1, 0, [inputValue.split(" ")[1], []]);
        console.log(currantDirArray)
    }
}

// function executeMkdir(){
//     for(i = 1; i < currantDirArray.length; i++){
//         for(j = 0; j < currantDirArray[i].length; j++){
//             addMkdir(currantDirArray[i]);
//             console.log(j, currantDirArray[i][j], typeof(currantDirArray[i][j]))

//         }

// }
// }
 // for(i = 0; i < currantDirArray.length; i++){
    //     // console.log(i, currantDirArray[i], typeof(currantDirArray[i]))
    // }
    // console.log(i, currantDirArray[i], typeof(currantDirArray[i]), currantDirArray.length)
    // for(j = 0; j < currantDirArray[i].length; j++){
    //     if((typeof(currantDirArray[i][0]) === "string") && (typeof(currantDirArray[i][1]) === "object")) {
    //         console.log(i, currantDirArray[i][j], typeof(currantDirArray[i][j]))
    //     } else {
    //         console.log('false', typeof(currantDirArray[i][j]))
    //     }

