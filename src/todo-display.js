export const todoListFactory = function todoListFactoryFunction () {
    const todoCardContainer = document.querySelector('.todo-card-container');


        const addButtonFunction = function addTodoListButton () {
            const addButton = document.createElement('button');
            addButton.textContent = '+';
            todoCardContainer.append(addButton);

            // addButton.addEventListener('click', function(e) {
                // pop up form to add information about todo list
            // })



            return addButton;
        }

        return {
            addButtonFunction,
        }
    }

