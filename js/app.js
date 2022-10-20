                                                                          // Vanila JavaScript todo list app
const taskInput = document.getElementById("new-task");                      // New-task
const addButton = document.getElementsByTagName("button")[0];               // First button
const incompleteTasksHolder = document.getElementById("incomplete-tasks");  // Incomplete-tasks
const completedTasksHolder = document.getElementById("completed-tasks");    // Completed-tasks

const createNewTaskElement = function(taskString) {       // New Task List Item
  const listItem = document.createElement("li");          // Create List Item
  const checkBox = document.createElement("input");       // Input (checkbox)
  const label = document.createElement("label");          // Label
  const editInput = document.createElement("input");      // Input (text)
  const editButton = document.createElement("button");    // Button.edit
  const deleteButton = document.createElement("button");  // Button.delete

  checkBox.type = "checkbox";         // Each element needs to be modified
  editInput.type = "text";            //
  editButton.innerText = "Edit";      //
  editButton.className = "edit";      //
  deleteButton.innerText = "Delete";  //
  deleteButton.className = "delete";  //
  label.innerText = taskString;       //

  listItem.appendChild(checkBox);      // Each element needs to be appended
  listItem.appendChild(label);         //
  listItem.appendChild(editInput);     //
  listItem.appendChild(editButton);    //
  listItem.appendChild(deleteButton);  //

  return listItem;
};

const addTask = function() {                            // Add a new task
  const listItemName = taskInput.value || "New Item";   // We hold the current value or provide the default one
  const listItem = createNewTaskElement(listItemName);  // Create a new list item with the text from #new-task
  incompleteTasksHolder.appendChild(listItem);        // Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted);            // We bind it to the incomplete holder
  taskInput.value = "";                               // Resets the field
};

const editTask = function() {                                     // Edit an existing task
  const listItem = this.parentNode;                               // Create List Item
  const editInput = listItem.querySelector("input[type=text");    // Input (text)
  const label = listItem.querySelector("label");                  // Label
  const button = listItem.getElementsByTagName("button")[0];      // Button

  const containsClass = listItem.classList.contains("editMode");  // We check for .editMode and assign it a constiable
  if(containsClass) {                                           // Switch from .editMode
      label.innerText = editInput.value;                        // Label text become the input's value
      button.innerText = "Edit";                                // Buttons name modified to Edit
  } else {                                                      // Switch to .editMode
     editInput.value = label.innerText;                         // Input value becomes the label's text
     button.innerText = "Save";                                 // Button name modified to Save
  }
    listItem.classList.toggle("editMode");                      // Toggle .editMode on the parent
};

const deleteTask = function() {      // Delete an existing task
  const listItem = this.parentNode;  // We use parentNode to target the object containing the delete button
  const ul = listItem.parentNode;    // We use parentNode again to target the list containing the task
  ul.removeChild(listItem);        // Remove the parent list item from the ul
};

const taskCompleted = function() {               // Mark a task as complete
  const listItem = this.parentNode;              // We assign it for readability
  completedTasksHolder.appendChild(listItem);  // Append the task list item to the #completed-tasks
  bindTaskEvents(listItem, taskIncomplete);    // We bind it to the opposite holder
};

const taskIncomplete = function() {               // Mark a task as incomplete
  const listItem = this.parentNode;               // We assign it for readability
  incompleteTasksHolder.appendChild(listItem);  // Append the task list item to the #incomplete-tasks
  bindTaskEvents(listItem, taskCompleted);      // We bind it to the opposite holder
};

const bindTaskEvents = function(taskListItem, checkBoxEventHandler) {   // Select it's children
  const checkBox = taskListItem.querySelector("input[type=checkbox]");  //
  const editButton = taskListItem.querySelector("button.edit");         //
  const deleteButton = taskListItem.querySelector("button.delete");     //
  editButton.onclick = editTask;                                      // Bind editTask to edit button
  deleteButton.onclick = deleteTask;                                  // Bind deleteTask to delete button
  checkBox.onchange = checkBoxEventHandler;                           // Bind checkBoxEventHandler to checkbox
};

const ajaxRequest = function() {
  console.log("AJAX request");
};

addButton.addEventListener("click", addTask);      // Adds event listener for the click handler to the addTask function
addButton.addEventListener("click", ajaxRequest);  // Adds an event listener for AJAX

for(const i = 0; i < incompleteTasksHolder.children.length; i++) {     // Cycle over incompleteTasksHolder ul list items
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);  // Bind events to list item's children (taskCompleted)
}

for(const i = 0; i < completedTasksHolder.children.length; i++) {      // Cycle over completedTasksHolder ul list items
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);   // Bind events to list item's children (taskIncomplete)
}