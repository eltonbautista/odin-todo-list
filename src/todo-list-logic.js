export const newTodoFactory = function newTodoFormFunction (task, start, end) {
    const checked = [];
    let i = 0;
    const createTodo = function createTodo () {


        const todoUL = document.querySelector('#todo-ul');
        const todoLI = document.createElement('li');
        const todoLITask = document.createElement('span');
        const todoLIStart = document.createElement('span');
        const todoLIEnd = document.createElement('span');
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('data-count', `${i++}`);
        todoCheckbox.setAttribute('type', 'checkbox');

        todoLITask.innerText = task;
        todoLIStart.innerText = start;
        todoLIEnd.innerText = end;

        todoLI.append(todoLITask);
        todoLI.append(todoLIStart);
        todoLI.append(todoLIEnd);
        todoLI.append(todoCheckbox);
        todoUL.append(todoLI);

        todoCheckbox.addEventListener('click', function() {

            if (this.checked === true) {
                return checked[0] = 1;
            } else if (this.checked === false) {
                return checked[0] = 0;
            };
        });

        if (checked[0] === 1) {
            todoCheckbox.checked = true;
        } else if (checked[0] === 0) {
            todoCheckbox.checked = false;
        };

        return todoCheckbox;
    };

    

    // const checkTodo = function () {

    //     if (checked[0] === 1) {
    //         createTodo().checked = true;
    //     } else if (checked[0] === 0) {
    //         createTodo().checked = false;
    //     };

    // };
    
    return {
        createTodo,
        task,
        start,
        end,
        // checkTodo
    };
};