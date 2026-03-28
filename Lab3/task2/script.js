const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const MAX_HEIGHT = 800; 

const taskSet = new Set();


addBtn.addEventListener("click", function() {
        if (confirm("Is it an urgent task?")) {
            addTask();
    }
});


taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});


function addTask() {
    const text = taskInput.value.trim();

    if (text === "") return;

    taskSet.add(text);

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "🗑";

    checkbox.addEventListener("change", function() {
        span.classList.toggle("done");
    });


    

    deleteBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this item? This cannot be undone.")) {
            taskList.removeChild(li);
            taskSet.delete(text);
        }
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}








































function checkListHeight() {
    if (taskList.scrollHeight > MAX_HEIGHT) {
        taskList.classList.toggle("grid");
    }
}