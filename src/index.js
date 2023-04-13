document.addEventListener("DOMContentLoaded", () => {
  // select "form" and assign to a variable
  const form = document.querySelector("form");

  // console.log(form.childNodes);
  // call function to add select option
  addPrioritySelector(form);
  durationSpan(form);
  
  // listen to event which is submitted by clicking "Create New Task"
  form.addEventListener("submit", (e) =>{
    // prevent the default from submission bahavior 
    e.preventDefault();
    // get the value of task description
    const task = e.target.querySelector("#new-task-description").value;
    const optionValue = e.target.querySelector("#priority-select").value;
    const durationInput = e.target.querySelector("#duration-input").value;
    
    while (durationInput < 1) {
      alert("Invalid input duration time");
      return false;
    }

    e.target.reset()
    // call function toDo to add task and switch color as its piority
    toDo(task, optionValue, durationInput);
  })
})


function toDo(task, optionValue, duration) {
  // create a new list and assign to variable named list
  const list = document.createElement("li");
  // add content to list
  list.textContent = task;
  // append list to ul list which id is #tasks
  document.querySelector("#tasks").appendChild(list);

  // create span tag to display duration time next to list task
  const durationSpan = document.createElement("span");
  durationSpan.textContent = ` : ${duration}`;
  list.appendChild(durationSpan);
  
  switchColor(optionValue, list);
  
  deleteTask(list);
}

// create function to delete task
function deleteTask(listTask){
  //create delete button
  const btn = document.createElement("button");
  btn.textContent = "x";

  listTask.appendChild(btn);
  btn.addEventListener("click", (e) => e.target.parentNode.remove())
}

// A priority value selected from a dropdown that is used to determine the color of the text in the list 
function addPrioritySelector(form) {
  // create label
  const label = document.createElement("label");
  label.textContent = " Priority";

  // create select tag
  const select = document.createElement("select");
  select.setAttribute("id", "priority-select");

  // create option
  const highOption = document.createElement("option");
  highOption.textContent = "High";
  highOption.setAttribute("value", "high");

  const mediumOption = document.createElement("option");
  mediumOption.textContent = "Medium";
  mediumOption.setAttribute("value", "medium");

  const lowOption = document.createElement("option");
  lowOption.textContent = "Low";
  lowOption.setAttribute("value", "low");

  select.appendChild(highOption);
  select.appendChild(mediumOption);
  select.appendChild(lowOption);

  form.insertBefore(select, form.childNodes[4]);
  form.insertBefore(label, form.childNodes[4]);
}


function switchColor(optionValue, task) {
  switch(optionValue) {
    case "high":
      task.style.color = "red";
      break;
    case "medium":
      task.style.color = "green";
      break;
    case "low":
      task.style.color = "yellow";
      break;
  }
}


function durationSpan(form) {
  const duration = document.createElement("span");
  duration.textContent = " Duration";
  duration.setAttribute("id", "duration");
  
  const durationInput = document.createElement("input");
  durationInput.setAttribute("type", "text");
  durationInput.setAttribute("id", "duration-input");
  durationInput.setAttribute("placeholder", "minutes")

  form.insertBefore(duration, form.childNodes[6]);
  form.insertBefore(durationInput, form.childNodes[7]);
}