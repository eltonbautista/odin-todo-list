import { newTodoFactory } from "./todo-list-logic";

export const todoListUI = function todoListUIFunction (i, myTodoArray) {
    // const myTodoArray = [];
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');
    const todoFormDiv = document.createElement('div');
            const divForTodos = document.createElement('div');
            const buttonDiv = document.createElement('div');
            const addButton = document.createElement('input');
            addButton.setAttribute('type', 'submit');
            addButton.setAttribute('form', 'todo-form');
            addButton.setAttribute('data-add', `${i}`);
            const todoUL = document.createElement('ul');
            todoUL.setAttribute('id', 'todo-ul');

            todoFormDiv.innerHTML = `
    <form id="todo-form">
    
        <div><input type="text" name="todo-task" id="todo-task" placeholder="Your task" required></div>

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
            
            todoDivUnderButtons.append(buttonDiv);
            todoDivUnderButtons.append(divForTodos);
            buttonDiv.append(todoFormDiv);
            buttonDiv.append(addButton);
            divForTodos.append(todoUL);
            const todoTask = document.querySelector('#todo-task');
            const todoStartTime = document.querySelector('#todo-due-date-start');
            const todoEndTime = document.querySelector('#todo-due-date-end');
            
            const clearForm = function clearForm (e) {
                e.preventDefault();

                
                
                todoTask.value = '';
                todoStartTime.value = '';
                todoEndTime.value = '';

            };


            const todoListFormFunction = (function todoListFormFunction() {
                const todoListForm = document.querySelector('#todo-form');
                let k = 0;
                todoListForm.addEventListener('submit', function(e) {
                    
                    myTodoArray.push(newTodoFactory(todoTask.value, todoStartTime.value, todoEndTime.value));
                    myTodoArray[k++].createTodo();
                    console.log(myTodoArray);
                    clearForm(e);
                })
            }());
    }

