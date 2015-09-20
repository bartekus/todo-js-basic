                                                                          // Vanila JavaScript todo list app
var taskInput = document.getElementById("new-task");                      // New-task
var addButton = document.getElementsByTagName("button")[0];               // First button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");  // Incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");    // Completed-tasks

var createNewTaskElement = function(taskString) {       // New Task List Item
  var listItem = document.createElement("li");          // Create List Item
  var checkBox = document.createElement("input");       // Input (checkbox)
  var label = document.createElement("label");          // Label
  var editInput = document.createElement("input");      // Input (text)
  var editButton = document.createElement("button");    // Button.edit
  var deleteButton = document.createElement("button");  // Button.delete

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

var addTask = function() {                               // Add a new task
  var listItem = createNewTaskElement(taskInput.value);  // Create a new list item with the text from #new-task
  incompleteTasksHolder.appendChild(listItem);           // Append listItem to incompleteTasksHolder
  bindTaskEvents(listItem, taskCompleted);               // We bind it to the incomplete holder
  taskInput.value = "";                                  // Resets the field
};

var editTask = function() {  // Edit an existing task
  console.log("Edit task...");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");

    //if the class of the parent is .editMode
  if(listItem.className == "editMode") {
      //Switch from .editMode
      //label text become the input's value
  } else {
      //Switch to .editMode
      //input value becomes the label's text
  }
    //Toggle .editMode on the parent
};

var deleteTask = function() {      // Delete an existing task
  var listItem = this.parentNode;  // We use parentNode to target the object containing the delete button
  var ul = listItem.parentNode;    // We use parentNode again to target the list containing the task
  ul.removeChild(listItem);        // Remove the parent list item from the ul
};

var taskCompleted = function() {               // Mark a task as complete
  var listItem = this.parentNode;              // We assign it for readability
  completedTasksHolder.appendChild(listItem);  // Append the task list item to the #completed-tasks
  bindTaskEvents(listItem, taskIncomplete);    // We bind it to the opposite holder
};

var taskIncomplete = function() {               // Mark a task as incomplete
  var listItem = this.parentNode;               // We assign it for readability
  incompleteTasksHolder.appendChild(listItem);  // Append the task list item to the #incomplete-tasks
  bindTaskEvents(listItem, taskCompleted);      // We bind it to the opposite holder
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {  // Select it's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask;             // Bind editTask to edit button
  deleteButton.onclick = deleteTask;         // Bind deleteTask to delete button
  checkBox.onchange = checkBoxEventHandler;  // Bind checkBoxEventHandler to checkbox
};

addButton.onclick = addTask;  // Set the click handler to the addTask function

for(var i = 0; i < incompleteTasksHolder.children.length; i++) {     // Cycle over incompleteTasksHolder ul list items
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);  // Bind events to list item's children (taskCompleted)
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {      // Cycle over completedTasksHolder ul list items
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);   // Bind events to list item's children (taskIncomplete)
}
