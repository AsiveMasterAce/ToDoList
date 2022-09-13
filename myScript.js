const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const ulEl = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task => {
    toDoList(task);
});

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    toDoList()
})

function toDoList(task) {
    let newTask = inputEl.value;

    if (task) {
        newTask = task.name;
    }


    const listEl = document.createElement("li");

    if (task && task.checked) {
        listEl.classList.add("checked");
    }
    listEl.innerText = newTask;
    ulEl.appendChild(listEl);
    inputEl.value = " "

    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    listEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div")
    trashBtnEl.innerHTML = '<i class="fa-solid fa-trash"></i>'
    listEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", () => {
        listEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener("click", () => {
        listEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage() {
    const listEl = document.querySelectorAll("li")
    list = []

    listEl.forEach(listEl => {
        list.push({
            name: listEl.innerText,
            checked: listEl.classList.contains("checked")
        })
    })

    localStorage.setItem("list", JSON.stringify(list))
}