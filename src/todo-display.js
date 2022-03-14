export const todoListFactory = function todoListFactoryFunction () {
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');
    // const buttonDiv = document.querySelector('.todo-div-under-buttons div:first-child');
    const todoListArray = [];
    

        

        const renderTodo = function renderTodo () {

        }





        


        const addButtonFunction = function addTodoListButton (k) {
            const todoFormDiv = document.createElement('div');
            const divForTodos = document.createElement('div');
            const buttonDiv = document.createElement('div');
            const addButton = document.createElement('button');
            const todoUL = document.createElement('ul');
            todoUL.setAttribute('id', 'todo-ul');

            todoFormDiv.innerHTML = `
    <form action="todo">
    
        <div><input type="text" name="todo-task" id="todo-task" placeholder="Your task"></div>

        <div>
            <label for="due-date-start">Start:</label>
            <input type="text" name="due-date-start" id="todo-due-date-start">
        </div>

        <div>
            <label for="due-date-end">End:</label>
            <input type="text" name="due-date-end" id="todo-due-date-end">
        </div>
    
    </form>`
            
            


            addButton.textContent = '+';
            
            buttonDiv.append(todoFormDiv);
            buttonDiv.append(addButton);
            divForTodos.append(todoUL);
            todoDivUnderButtons.append(buttonDiv);
            todoDivUnderButtons.append(divForTodos);

            
            addButton.addEventListener('click', function() {
            
            const todoTask = document.querySelector('#todo-task');
            const todoStartTime = document.querySelector('#todo-due-date-start');
            const todoEndTime = document.querySelector('#todo-due-date-end');
                
                todoListArray.push(newTodo(todoTask.value, todoStartTime.value, todoEndTime.value));
                todoListArray[k].createTodo();
                k++;
            })

            return addButton;
        }

        const newTodo = function newTodoFormFunction (task, start, end) {
            const todoUL = document.querySelector('#todo-ul');


            const createTodo = function createTodo () {

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
            };
        };


        return {
            addButtonFunction,
            todoListArray
        }
    }

