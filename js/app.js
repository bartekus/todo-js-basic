//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task");                      // New-task
var addButton = document.getElementsByTagName("button")[0];               // First button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");  // Incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");    // Completed-tasks

//New Task List Item
var createNewTaskElement = function() {

  var listItem = document.createElement("li");          // Create List Item
  var checkBox = document.createElement("input");       // Input (checkbox)
  var label = document.createElement("label");          // Label
  var editInput = document.createElement("input");      // Input (text)
  var editButton = document.createElement("button");    // Button.edit
  var deleteButton = document.createElement("button");  // Button.delete

  //Each element needs modified

  //Each element needs appended

  return listItem;
};

var addTask = function() {  //Add a new task
  console.log("Add task...");
  var listItem = createNewTaskElement("Some New Task");  // Create a new list item with the text from #new-task

  //Append listItem to incompleteTasksHolder
};

var editTask = function() {  // Edit an existing task
  console.log("Edit task...");
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text
    
    //Toggle .editMode on the parent
};

var deleteTask = function() {  //Delete an existing task
  console.log("Delete task...");
  //When the Delete button is pressed
    //Remove the parent list item from the ul
};

var taskCompleted = function() {  //Mark a task as complete
  console.log("Task complete...");
  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
};

var taskIncomplete = function() {  //Mark a task as incomplete
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {  // Select it's children
  console.log("Bind list item events");
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
