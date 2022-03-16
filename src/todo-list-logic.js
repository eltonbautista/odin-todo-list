export const newTodoFactory = function newTodoFormFunction (task, start, end) {
            

    const createTodo = function createTodo () {
        
        const todoUL = document.querySelector('#todo-ul');
        const todoLI = document.createElement('li');
        const todoLITask = document.createElement('span');
        const todoLIStart = document.createElement('span');
        const todoLIEnd = document.createElement('span');
        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');

        todoLITask.innerText = task;
        todoLIStart.innerText = start;
        todoLIEnd.innerText = end;

        todoLI.append(todoLITask);
        todoLI.append(todoLIStart);
        todoLI.append(todoLIEnd);
        todoLI.append(todoCheckbox);
        todoUL.append(todoLI);


    };


    return {
        createTodo,
        task,
        start,
        end
    };
};