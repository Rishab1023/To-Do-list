
const inputEl = document.querySelector("#TaskInput");
const addBtnEl = document.querySelector("#addTaskBtn");
const tasklistEl = document.querySelector("#Tasklist");

addBtnEl.addEventListener("click",()=>{
  savebtn()
  task()
})


const savebtn = () => {
  console.log("Button was pressed");
}

const li = document.createElement("li");
li.className = "deletebtn"
li.innerHTML = `<span>${tasktext}</span> <button>X</button>` ;
const task = () => {
  const inputEl = inputEl.value.trim();
  if(inputEl === ""){
    return;
  }
  tasklistEl.appendChild(li);

}
