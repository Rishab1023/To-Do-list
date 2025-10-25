
const inputEl = document.querySelector("#TaskInput");
const addBtnEl = document.querySelector("#addTaskBtn");
const tasklistEl = document.querySelector("#Tasklist");

// events
addBtnEl.addEventListener("click",()=>{
  savebtn()
  task()
})



// functions
const inputArray = [];
inputArray.push(inputEl.value);
const savebtn = () => {
  console.log("Button was pressed");
  console.log(inputArray);
  
}

//html elements
const li = document.createElement("li");
const deletebtn = document.createElement("button");
li.className = "taskitem";
deletebtn.className = "delbtn";
li.innerHTML = `<span> ${inputArray} </span>`;
deletebtn.innerHTML = `<button>X</button>`;

// add task function
const task = () => {
  tasklistEl.appendChild(li);
  li.appendChild(deletebtn);
}

// delete btn
deletebtn.addEventListener("click", ()=>{
  tasklistEl.removeChild(li)
})
