var directories = JSON.parse(localStorage.getItem("arr"));




function ls_Function() {
  clearInput();
  console.log(">>> inside ls_Function");
  checkDirectoryName(directory);
  function checkDirectoryName() {
    console.log(">>> inside checkDirectory function");
    var dirArray = directory.split("/");
    console.log(dirArray);
    console.log(directories1);
  
    iterateCheck();
    function iterateCheck() {
      var ls_div = "";
      var ls_item_array = "";
      var ls_item_object = "";
  
      //Check if we are on "main" directory
      if (dirArray[dirArray.length-1] == "main"){
  
        directories.map((element) => {
  
          if (Array.isArray(element)) {
            ls_item_array += `
              <p class="ls_item">${element[0]}</p>`;
            return ls_item_array;
  
          } else if (!Array.isArray(element)) {
            ls_item_object += `
            <p class="ls_item">${element.name}</p>`;
            return ls_item_object;
            
          }
        });
      } 
  
      //Check if the directory we are in is the same passed by directory1
      //Directory1 saves the value of the current folder, passed with cd functions  
      else if (directories1[0] == dirArray[dirArray.length-1]) {
          console.log("dirArray: " + dirArray[dirArray.length-1]);
  
          //Map through the present directory's second element's content (will be an array)
          directories1[1].map((element1) => {
            if (Array.isArray(element1)) {
              ls_item_array += `
              <p class="ls_item">${element1[0]}</p>`;
              return ls_item_array;
  
            } else if (!Array.isArray(element1)) {
              ls_item_object += `
              <p class="ls_item">${element1.name}</p>`;
              return ls_item_object;
            }
            
          });
      } 
  
      ls_div = `<div class="ls_div">${ls_item_array}${ls_item_object}</div>`;
  
      return (document.getElementById("terminalText").innerHTML += ls_div);
  
    }
  
  
  }

  
}

function ls_R_Function() {
  clearInput();
  console.log("start ls -R function");
  checkDirectoryName(directory);
  console.log("starting recursion");
  iterateArray();
  console.log("ending recursion");


  function iterateArray() {
    console.log("inside recursion");
    //Map the directories array's first dimension
    directories.map((directory) => {
      let ls_directory = "";
      let ls_div = "";
      let ls_item_array = "";
      let ls_item_object = "";


      //if the element is an array (a folder)
      if (Array.isArray(directory)) {
        //1. Show the directory name
        ls_directory = `<p class="ls_directory">./${directory[0]}:</p>`;

        //2. Map the directory content and look through its elements
        directory[1].map((directory1) => {
          //2.1. If the element is an array, look for the array's first element (will tell us the folder name)
          if (Array.isArray(directory1)) {
            ls_item_array += ` <p class="ls_item">${directory1[0]}</p>`;
            // ls_directory = `<p class="ls_directory">./${directory1[0]}:</p>`;

            // 2.1.1 returns a paragraph for each array found
            // console.log(ls_item_array);
            return ls_item_array;

            //2.2. If the element is an object, look for the object name
          } else if (
            !Array.isArray(directory1) &&
            typeof document === "object"
          ) {
            ls_item_object += `
              <p class="ls_item">${directory1.name}</p>
              `;

            // 2.2.1 returns a paragraph for each object found
            // console.log(ls_item_object);
            return ls_item_object;
          }
        });

        //3. Create a div that shows the objects and arrays found in the directory
        ls_div = `<div class="ls_div">${ls_item_array}${ls_item_object}</div>`;

        //4. We equal the inital directories array to the array we mapped
        directories = directory[1];

        //5. Repeat the operation in the new array
        iterateArray();

        //6. Return all directories with their corresponding info
        console.log(ls_directory + ls_div);
        return (document.getElementById("terminalText").innerHTML += `
          <div class="ls_R_div">${ls_directory}${ls_div}</div>`);
      }
    });
  }
}

function ls_S() {}

function ls_t() {}
