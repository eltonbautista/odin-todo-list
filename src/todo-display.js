import { newTodoFactory } from "./todo-list-logic";

export const todoListUI = function todoListUIFunction (i, myTodoArray, myLocalTodo, testArr) {
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

            const todoInputArray = [document.querySelector('#todo-task'), 
            document.querySelector('#todo-due-date-start'), document.querySelector('#todo-due-date-end')]
            
            const clearForm = function clearForm (e) {
                e.preventDefault();

                todoInputArray.forEach(e => e.value = '');

            };


            const todoListFormFunction = (function todoListFormFunction() {
                const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders'));
                const todoListForm = document.querySelector('#todo-form');
                
                todoListForm.addEventListener('submit', function(e) {
                    let i = deserializeMyFolders.length - 1;
                    console.log(myTodoArray);
                    myTodoArray.push(newTodoFactory(todoInputArray[0].value, todoInputArray[1].value,
                        todoInputArray[2].value));
                    myLocalTodo.push(newTodoFactory(todoInputArray[0].value, todoInputArray[1].value,
                        todoInputArray[2].value));
                    
                    deserializeMyFolders[i].myTodoArray.push(newTodoFactory(todoInputArray[0].value, todoInputArray[1].value,
                        todoInputArray[2].value));
                        localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
                    clearForm(e);
                })

                const fooTest = function() {
                    myTodoArray[myTodoArray.length - 1].createTodo();
                };
                console.log()
                if (myTodoArray.length < deserializeMyFolders[deserializeMyFolders.length -1].myTodoArray.length) {
                    todoListForm.addEventListener('submit', fooTest);
                } else {
                    todoListForm.removeEventListener('submit', fooTest);
                }

                if (deserializeMyFolders[deserializeMyFolders.length -1].myTodoArray < 0) {
                    todoListForm.addEventListener('submit', fooTest);
                }

                return {
                    fooTest
                }

            }());

            return {
                todoListFormFunction
            }
    };

