export const newTodoFactory = function newTodoFormFunction (task, start, end, x) {
    let checked = 0;
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
            // console.log(x);
            if (this.checked === true || x === true) {
                todoLITask.style.textDecoration = 'line-through';
                todoLIStart.style.textDecoration = 'line-through';
                todoLIEnd.style.textDecoration = 'line-through';
                 checked = 1;
                 x = 1;
            } else if (this.checked === false || x === true) {
                todoLITask.style.textDecoration = 'none';
                todoLIStart.style.textDecoration = 'none';
                todoLIEnd.style.textDecoration = 'none';
                 checked = 0;
                 x = 0
            };
            // console.log(checked);
        });

        if (checked === 1 || x === 1) {
            todoCheckbox.checked = true;
            todoLITask.style.textDecoration = 'line-through';
            todoLIStart.style.textDecoration = 'line-through';
            todoLIEnd.style.textDecoration = 'line-through';
        } else if (checked === 0 ||x === 0) {
            todoCheckbox.checked = false;
            todoLITask.style.textDecoration = 'none';
            todoLIStart.style.textDecoration = 'none';
            todoLIEnd.style.textDecoration = 'none';
        };
        
        return todoCheckbox;
    };

    

    
    return {
        createTodo,
        task,
        start,
        end,
        checked, 
        x
    };
};