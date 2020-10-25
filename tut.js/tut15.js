const todos = [{
        title: "First todo",
        body: "This is the first todo"
    },
    {
        title: "Second todo",
        body: "This is the second todo"
    },
    {
        title: "Third todo",
        body: "This is the third todo"
    }
];

function createToDo(todo) {
    setTimeout(function () {
        todos.push(todo)
    }, 2000);
};

function getTodos() {
    setTimeout(() => {
        let output = '';
        todos.forEach(function (todo) {
            output += `<li style="background-color: aqua;list-style: none;">${todo.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
};
createToDo({
    title: "Fourth todo",
    body: "This is the Fourth todo"
});
getTodos()
console.log(todos)