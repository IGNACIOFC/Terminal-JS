function executeLsT(directory, index){
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
    let currantPTag = document.querySelectorAll('p')[document.querySelectorAll('p').length - 1];
    let flag = false;
    let arr = currantDirArray;
    let arrayFiles = [];
    let arrayFolders = [];
    let fragment = document.createDocumentFragment();

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
            arrayFolders.push(arr[j]);
            // console.log(arr[j]);
        }
        else{
            flag = true;
            arrayFiles.push(arr[j]);
        }
    };
    sortArrayOfObjects(arrayFiles);
    // console.log(arrayFiles);
    for (let file of arrayFiles) {
        let fileList = document.createElement('P');
        fileList.classList.add('ls_item');
        fileList.innerText = file.name;
        fragment.appendChild(fileList);
    };
    currantPTag.appendChild(createDiv_ls());
    const divLsT = get("ls_t_div");
    divLsT.appendChild(fragment);
    getFolderCreationTime(arrayFolders);
};

function getFolderCreationTime(arrayFolders){
    let currantDirectory = directory;
    for(let i = 0; i < arrayFolders.length; i++){
        if(Array.isArray(arrayFolders[i])){
            // console.log(arrayFolders[i]);
            // currantDirectory = `${currantDirectory}${arrayFolders[i][0]}`
            console.log(`${currantDirectory}/${arrayFolders[i][0]}`);

            // arr = arrayFolders[i][1];
            // console.log(arr);
            // arrayFolders.shift();
            // cutCurrantDirArray();
        }
        else {
            console.log(arrayFolders[i]);
        }
    };
};

function sortArrayOfObjects(arrayFiles){
    arrayFiles.sort(function(a, b) {
        if (a.date != b.date) {
            return b.date - a.date;
        }
    });
};

function createDiv_ls() {
    var divLs = create("DIV");
    divLs.setAttribute("id", "ls_t_div");
    divLs.setAttribute("class", "ls_div");
    return divLs;
};
