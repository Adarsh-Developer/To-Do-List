const taskContainer = document.querySelector(".task__container");
const inputTask = document.querySelector(".input__task");
const addButton = document.querySelector(".add__btn");

/* Function to add the task in you to do list... */
function addTask() {
  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    let list = document.createElement("li");
    let para = document.createElement("p");
    para.innerHTML = inputTask.value;
    let span = document.createElement("span");
    span.innerHTML = `<ion-icon name="close"></ion-icon>`;
    span.classList.add("remove__btn");
    list.appendChild(para);
    list.appendChild(span);

    taskContainer.appendChild(list);
    saveData();
  }

  inputTask.value = "";
}

addButton.addEventListener("click", function () {
  /*TO ADD THE TASK*/
  addTask();
});

inputTask.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});


/* This is to remove the task */
taskContainer.addEventListener("mouseenter", function () {
  const closeButton = document.querySelectorAll("li span");
  closeButton.forEach(function (task) {
    task.addEventListener("click", function () {
      task.parentElement.remove();
      saveData();
    });
  });


  /* This is when the task is completed */
  const taskContainerLi = document.querySelectorAll(".task__container li");
  taskContainerLi.forEach(function (task) {
    task.addEventListener("click", function () {
      task.classList.toggle("active");
      saveData();
    });
  });
});

/* To save the data in Local Storage */
function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showData();
