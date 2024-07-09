window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let addButton = document.getElementById('add-btn');
   addButton.addEventListener("click", addBtnClick);

   // Uses enter the same way as clicking the add button
   let textBox = document.getElementById('new-task')
   textBox.addEventListener("keyup", function(event){
      if(event.key === "Enter"){
         addBtnClick()
      }
   })
}

// Adds tasks as long as textbox is not empty. 
// After task is added focuses back on the textbox to add more. 
function addBtnClick() {
   // TODO: Complete the function
   let text = document.getElementById('new-task')
   if(text.value != ""){
      addTask(text.value)
      text.value = ""
      text.focus()
   }
}

// adds tasks to the list
function addTask(task) {
   // TODO: Complete the function
   let newTaskLi = document.createElement("li");
   newTaskLi.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   let ol = document.querySelector("ol");
   ol.appendChild(newTaskLi);

   buttons = document.getElementsByClassName('done-btn')
   for(let button of buttons){
      button.addEventListener("click", removeTask)
   }
}

// removes tasks from the list
function removeTask(event) {
   // TODO: Complete the function
   let li = event.target.parentNode
   let ol = li.parentNode
   ol.removeChild(li)
}
