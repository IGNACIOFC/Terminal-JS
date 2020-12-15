let arrayFiles = [];
let arrayFolders = [];
function executeLsT(index){
    let currantPTag = document.querySelectorAll('p')[document.querySelectorAll('p').length - 1];
    let currantDirArray = JSON.parse(localStorage.getItem("arr"));
    let arr = currantDirArray;
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
    getFilesAndFolders(arr);
    for (let file of arrayFiles) {
        let fileList = document.createElement('P');
        fileList.classList.add('ls_item');
        fileList.setAttribute("data-name", `${file.name}`)
        fileList.setAttribute("data-date", `${file.date}`)
        fragment.appendChild(fileList);
    };
    for (let folder of arrayFolders) {
        let folderList = document.createElement('P');
        folderList.classList.add('ls_item');
        folderList.setAttribute("data-name", `${folder[0]}`);
        folderList.setAttribute("data-date", '1607698600000')
        // folderList.innerText = folder.name;
        fragment.appendChild(folderList);
    };
    currantPTag.appendChild(createDiv_ls());
    const divLsT = get(`ls_t_div${id}`);
    divLsT.appendChild(fragment);
    displaySortedDirectory(divLsT);
    id ++;
};

function getFilesAndFolders(arr){
    for(let j = 0; j < arr.length; j++){
        if(Array.isArray(arr[j])){
            arrayFolders.push(arr[j]);
        }
        else{
            arrayFiles.push(arr[j]);
        }
    };
}

function displaySortedDirectory(divLsT){
    var dateItems = document.querySelectorAll("[data-date]");
    var dateItemsArray = Array.from(dateItems);

    dateItemsArray.sort(function(a, b) {
        if (a.dataset.Date != b.dataset.Date) {
            return b.dataset.Date - a.dataset.Date;
        }
    });
    dateItemsArray.forEach(function(el) {
        el.innerHTML = el.dataset.name;
        divLsT.appendChild(el);
    });
    console.log(dateItemsArray);
}

function createDiv_ls() {
    var divLs = create("DIV");
    divLs.setAttribute("id", `ls_t_div${id}`);
    divLs.setAttribute("class", "ls_div");
    divLs.innerHTML += "";
    return divLs;
};
