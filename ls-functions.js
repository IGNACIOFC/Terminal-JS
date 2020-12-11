var directories = JSON.parse(localStorage.getItem("arr"));

function ls_Function() {
  let result = "";
  let result1 = "";
  directories.map((directory) => {
    if (Array.isArray(directory)) {
      result += `
        <p class="ls_item">${directory[0]}</p>`;
      return result;
    } else if (!Array.isArray(directory) && typeof document === "object") {
      result1 += `
      <p class="ls_item">${directory.name}</p>`;
      return result1;
    }
  });

  console.log(result + result1);
  return (document.getElementById(
    "terminalText"
  ).innerHTML += `<div class="ls_div">${result}${result1}</div>`);
}

function ls_R_Function() {
  console.log("start ls -R function");
  ls();
  console.log("starting recursion");
  iterateArray();
  console.log("ending recursion");

  function ls() {
    let result = "";
    let result1 = "";
    directories.map((directory) => {
      if (Array.isArray(directory)) {
        result += `
        <p class="ls_item">${directory[0]}</p>`;
        return result;
      } else if (!Array.isArray(directory) && typeof document === "object") {
        result1 += `
      <p class="ls_item">${directory.name}</p>`;
        return result1;
      }
    });

    return (document.getElementById(
      "terminalText"
    ).innerHTML += `<div class="ls_div">${result}${result1}</div>`);
  }

  function iterateArray() {
    console.log("inside recursion");
    //Map the directories array's first dimension
    directories.map((directory) => { 
      let ls_directory = "";
      let ls_div = "";
      let ls_item = "";

      let ls_div_array = "";

      let ls_item_array = "";
      let ls_item_object = "";

      //if the element is an array (a folder)  
      if (Array.isArray(directory)) {
        //1. Show the directory name
        ls_directory = `<p class="ls_directory">./${directory[0]}:</p>`;

        //2. Map the directory content and look through its elements
        directory[1].map((directory1) => { 
                                           
          //2.1. If the element is an object, look for the object name
          if (!Array.isArray(directory1)) {
            ls_item_object += `
              <p class="ls_item">${directory1.name}</p>
              `;

            // 2.1.1 returns a paragraph for each object found
            // console.log(ls_item_object);
            return ls_item_object;

          //2.2. If the element is an array, look for the array's first element (will tell us the folder name)
          } else if (Array.isArray(directory1)) {
            ls_item_array += ` <p class="ls_item">${directory1[0]}</p>`;
            // ls_directory = `<p class="ls_directory">./${directory1[0]}:</p>`;

            // 2.2.2 returns a paragraph for each array found
            // console.log(ls_item_array);
            return ls_item_array;

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
