var directories = JSON.parse(localStorage.getItem("arr"));
var directories2 = directories;


function checkDirectoryName() {
  console.log(">>> inside checkDirectory function");
  var dirArray = directory.split("/");
  console.log(dirArray);
  console.log(directories1);

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

function ls_Function() {
  clearInput();
  console.log(">>> inside ls_Function");
  checkDirectoryName(directory);
 

  
}

function ls_R_Function() {
  clearInput();
  console.log("start ls -R function");

  let ls_directory = "";
  let ls_div = "";
  let ls_item_array = "";
  let ls_item_object = "";

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
  
      if (dirArray[dirArray.length-1] == "main"){
        console.log("starting recursion in main");
        iterateArray1();
        console.log("ending recursion in main");
      } 

      else if (directories1[0] == dirArray[dirArray.length-1]) {
          console.log("dirArray: " + dirArray[dirArray.length-1]);
          console.log(">>>>>starting recursion");
  
          iterateArray2()
          console.log(">>>>>ending recursion");
      } 
      ls_div = `<div class="ls_div">${ls_item_array}${ls_item_object}</div>`;
      return (document.getElementById("terminalText").innerHTML += ls_div);
    }
  }

  function iterateArray1() {

    console.log("inside recursion");
    //Map the directories array's first dimension
    directories2.map((directory) => {

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
        directories2 = directory[1];

        //5. Repeat the operation in the new array
        iterateArray1();

        //6. Return all directories with their corresponding info
        console.log(ls_directory + ls_div);
        return (document.getElementById("terminalText").innerHTML += `
          <div class="ls_R_div">${ls_directory}${ls_div}</div>`);
      }
    });
  }

  function iterateArray2() {
    console.log("inside recursion");
    //Map the directories array's first dimension
    console.log(directories1);
    directories1[1].map((element1) => {
      
      if (Array.isArray(directories1[1])) {
        console.log(element1)
        //1. Show the directory name
        ls_directory = `<p class="ls_directory">./${directories1[0]}:</p>`;

        //2. Map the directory content and look through its elements
        // element1.map((element2) => {
 
          if (Array.isArray(element1)) {
            ls_item_array += ` <p class="ls_item">${element1[0]}</p>`;

            // 2.1.1 returns a paragraph for each array found
            console.log(ls_item_array);
            return ls_item_array;

            //2.2. If the element is an object, look for the object name
          } else if (!Array.isArray(element1)) {
            ls_item_object += `
              <p class="ls_item">${element1.name}</p>
              `;

            // 2.2.1 returns a paragraph for each object found
            console.log(ls_item_object);
            return ls_item_object;
          }

        //3. Create a div that shows the objects and arrays found in the directory
        ls_div = `<div class="ls_div">${ls_item_array}${ls_item_object}</div>`;
        console.log(ls_div);

        //4. We equal the inital directories array to the array we mapped
        directories1 = element1[1];

        //5. Repeat the operation in the new array
        iterateArray2();

        //6. Return all directories with their corresponding info
        console.log(ls_directory + ls_div);
        return (document.getElementById("terminalText").innerHTML += `
          <div class="ls_R_div">${ls_directory}${ls_div}</div>`);
      }
    });
  }


}

function ls_S_Function() {
  clearInput();
  var dirArray = directory.split("/");
  var ls_div = "";
  var ls_item_array = "";
  var ls_item_object = "";


  if (dirArray[dirArray.length-1] == "main"){
    console.log(directories2);
    directories2.map((element) => {

      element.size = element.size || element[1].length;
      directories2.sort(function(a,b) {
        return b.size - a.size
      });

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

  } else if (directories1[0] == dirArray[dirArray.length-1]) {
    console.log(directories1[1]);
    directories1[1].map((element) => {

      element.size = element.size || element[1].length;
      directories1[1].sort(function(a,b) {
        return b.size - a.size
      });
      console.log(directories1[1])

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
  
  ls_div = `<div class="ls_div">${ls_item_object}${ls_item_array}</div>`;
  return (document.getElementById("terminalText").innerHTML += ls_div);

}

// function ls_t() {}
