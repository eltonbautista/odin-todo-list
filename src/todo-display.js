const todoListContainer = function todoListContainerLogic () {
    const todoCardContainer = document.querySelector('.todo-card-container');
    // const myRenderTodoList = [];

   export const todoListFactory = function todoListFactoryFunction () {
        
        const addButtonFunction = function addTodoListButton () {
            const addButton = document.createElement('button');
            addButton.textContent = '+';
            todoCardContainer.append(addButton);
        }

        return {
            addButtonFunction,
        }
    }

}