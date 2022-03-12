export const todoListFactory = function todoListFactoryFunction () {
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');


        const addButtonFunction = function addTodoListButton () {
            const addButton = document.createElement('button');
            addButton.textContent = '+';
            todoDivUnderButtons.append(addButton);

            // addButton.addEventListener('click', function(e) {
                // pop up form to add information about todo list
            // })



            return addButton;
        }

        return {
            addButtonFunction,
        }
    }

