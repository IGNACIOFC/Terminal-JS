currantDirArray = JSON.parse(localStorage.getItem("arr"));
if((typeof(currantDirArray[0]) === "string") && (typeof(currantDirArray[1]) === "object")) {
    for(i = 0; i < currantDirArray.length; i++){
        currantDirArray.splice(1, 0, "Lemon", []);
        console.log(currantDirArray)
        // console.log(i, currantDirArray[i], typeof(currantDirArray[i]))
    }
    // console.log(i, currantDirArray[i], typeof(currantDirArray[i]), currantDirArray.length)
    // for(j = 0; j < currantDirArray[i].length; j++){
    //     if((typeof(currantDirArray[i][0]) === "string") && (typeof(currantDirArray[i][1]) === "object")) {
    //         console.log(i, currantDirArray[i][j], typeof(currantDirArray[i][j]))
    //     } else {
    //         console.log('false', typeof(currantDirArray[i][j]))
    //     }

    // }

}
