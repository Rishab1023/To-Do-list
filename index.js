
const inputEl = document.querySelector("#TaskInput");
const addBtnEl = document.querySelector("#addTaskBtn");
const tasklistEl = document.querySelector("#Tasklist");

// events
addBtnEl.addEventListener("click",()=>{

  task()
})

// add task function
const task = () => {
  const inputArray = [];
  console.log("Button was pressed");
  inputArray.push(inputEl.value);
  console.log(inputArray);
  //html elements
  inputEl.value.trim()
  if(inputEl === ""){
    return;
  }
  const li = document.createElement("li"); // list element
  const deletebtn = document.createElement("button"); //delete button element
// class names
  li.className = "taskitem";
  deletebtn.className = "delbtn";
// inner html
  li.innerHTML = `<span> ${inputArray} </span>`; // list's inner html
  deletebtn.innerHTML = `<button>X</button>`; // button's inner html

  tasklistEl.appendChild(li);
  li.appendChild(deletebtn);
  
  // delete task function
  deletebtn.addEventListener("click", ()=>{
  tasklistEl.removeChild(li)
})

}

