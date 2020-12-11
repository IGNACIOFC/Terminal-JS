var mainArr = JSON.parse(localStorage.getItem("arr"));
var directory;

function cat(inputValue){
    var arr = mainArr;
    var directoryArr = directory.split("/");
    var j = 0;

    clearInput();
    var inputArr = inputValue.split(" ");
    switch(inputArr.length){
        case 1:
            addTextToResults("cat alone doesn't work");
            break;
        case 2:
            var file = inputValue.split(" ")[1];
            ifFileExist();
            break;
        case 3:
            validate(inputArr);
            break;
        case 4:
            validate(inputArr);
            break;
        case 5:
            validate(inputArr);
            break;
    }

    function ifFileExist(){
        checkDir();
    }

    function checkDir(){
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkDir();
                }
            }
            else{
                if(element.name == file){
                    console.log(element);
                    addTextToResults(element.content);
                }
            }
        });
    }
    function validate(inputArr){
        if (inputArr[1]== ">"){
            var fileerr = checkFile(inputArr[2]);
            var file1 = checkFile(inputArr[2]);
            //agregar input
        }
        else if(inputArr[2]==">" && inputArr[3] != null){
            var fileerr = checkFile(inputArr[1]);
            var file1 = checkFile(inputArr[1]);
            var file2 = checkFile(inputArr[3]);
            file2.content += '\n'+file1.content;
            localStorage.setItem("arr", JSON.stringify(mainArr));
            console.log(file2);
        }
        else if(inputArr[3]==">" && inputArr[4] != null){
            var fileerr = checkFile(inputArr[1]);
            var file1 = checkFile(inputArr[1]);
            var file2 = checkFile(inputArr[2]);
            if(file1 != null && file2 !=null){
                console.log(file1);
                console.log(file2);
                var file3 = {name: inputArr[4], content: file1.content + "\n" + file2.content};
                console.log(file3);
                insertInNewDirectory(file3, directory);
                localStorage.setItem("arr", JSON.stringify(mainArr));
            }
        }
    }

    function checkFile(fileName){
        try{
        arr.forEach(element => {
            if(Array.isArray(element)){
                if(element[0].includes(directoryArr[j+1])){
                    directoryArr.shift();
                    arr = element[1];
                    checkFile(fileName);
                }
            }
            else{
                if(element.name == fileName){
                    console.log("entra");
                    throw element;
                }
            }
        });
        }
        catch(err){
            return err;
        }
        }

    function catInput(){
        var catInputText = create("input");
        catInputText.setAttribute("value", "");
        catInputText.setAttribute("class", "userInput");
        catInputText.setAttribute("type", "text");
        catInputText.addEventListener("keyup",submitInput);
        return catInputText;
    }
}