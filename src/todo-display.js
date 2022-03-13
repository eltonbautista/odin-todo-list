export const todoListFactory = function todoListFactoryFunction () {
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');
    // const buttonDiv = document.querySelector('.todo-div-under-buttons div:first-child');


        const newTodoForm = function newTodoFormFunction () {
            
        }










        const addButtonFunction = function addTodoListButton () {
            const todoFormDiv = document.createElement('div');
            const buttonDiv = document.createElement('div');
            const addButton = document.createElement('button');

            todoFormDiv.innerHTML = `
    <form action="todo">
    
        <div><input type="text" name="todo-input" id="todo-input" placeholder="Your task"></div>

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
            todoDivUnderButtons.append(buttonDiv);




            // addButton.addEventListener('click', function(e) {
                // pop up form to add information about todo list
            // })



            return addButton;
        }

        return {
            addButtonFunction,
        }
    }

