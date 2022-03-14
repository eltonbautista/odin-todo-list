import {todoListFactory} from './todo-display';




const createFolder = function createFolder () {
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    const formTextInputs = [document.querySelector('.folder.name'),
    document.querySelector('.folder.description')];
    const buttonFolderDiv = document.querySelector('.button-folder-div');
    const todoDescriptionDiv = document.querySelector('.todo-description-div');
    // const todoListTabsDiv = document.querySelector('.todo-list-tabs-div');
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');
    


    const folderFactory = function folderFactory (folderName, folderDescription, tracker) {

        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
        }
        

        const deleteFolderButton = function deleteFolderButton (i, tdcDiv, tdcSpan, tdcP, folderButton, addButton) {
            const todoListDiv = document.querySelector('.todo-div-under-buttons > div:last-child');
            const addButtonDiv = document.querySelector('.todo-div-under-buttons > div:first-child');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = i;
            todoDescriptionDiv.append(deleteButton);
            
            deleteButton.addEventListener('click', function(e) {
                console.log(this.dataset.delete);
                mainPageControl.myRenderTodoList.splice(this.dataset.delete, 1);
                mainPageControl.myFolders.splice(this.dataset.delete, 1);
                
                tdcDiv.remove();
                tdcSpan.remove();
                tdcP.remove();
                folderButton.remove();
                addButton.remove();
                addButtonDiv.remove();
                todoListDiv.remove();

                console.log(mainPageControl.myRenderTodoList);
                this.remove();

            })
            return deleteButton;
        };

        const createFolderButtons = function(i) {
            
            
            const folderButton = document.createElement('button');
            folderButton.dataset.count = i;
            folderButton.innerText = folderName;
            buttonFolderDiv.append(folderButton);

            folderButton.addEventListener('click', function() {
            console.log(i);
            const todoLength = mainPageControl.myRenderTodoList[this.dataset.count].renderTodo();
            console.log(todoLength);
            mainPageControl.clearDiv();
            const tdcDiv = document.createElement('div');
            tdcDiv.innerText = folderName;
            const tdcSpan = document.createElement('span');
            tdcSpan.innerText = folderDate();
            const tdcP = document.createElement('p');
            tdcP.innerText = folderDescription;

            tdcDiv.append(tdcSpan);
            todoDescriptionDiv.append(tdcDiv);
            todoDescriptionDiv.append(tdcP);

            deleteFolderButton(i, tdcDiv, tdcSpan, tdcP, folderButton, 
                mainPageControl.myRenderTodoList[i].addButtonFunction());
                console.log(mainPageControl.myRenderTodoList);
            
            if (todoLength === 0) {
                return;
            } else if (todoLength > 0) {
                for (let j = 0; j < todoLength; j++) {
                    mainPageControl.myRenderTodoList[i].todoListArray[j].createTodo();
                }
            }
            


            })
        };

        return {
            folderName,
            folderDescription,
            folderDate,
            createFolderButtons
        }
    };



    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    


const mainPageControl = (function mainPageControlModulePattern () {
        const myFolders = [];
        const myRenderTodoList = [];
        

        const pushFolders = function pushFoldersIntoArray (folderName, folderDescription, i) {
            return myFolders.push(folderFactory(folderName, folderDescription, i));
        };

        const pushRender = function pushIntoMyRenderTodoList () {
            return myRenderTodoList.push(todoListFactory());
        };


        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
            // todoListTabsDiv.innerText = '';
            todoDivUnderButtons.innerText = '';
        };

        // const generateTodoList = function generateTodoList (i, test) {
        //     for (let j = 0; j < test; j++) {
        //         mainPageControl.myRenderTodoList[i].todoListArray[j].createTodo();
        //     };
        // }


        return {
            myFolders,
            pushFolders,
            clearDiv,
            pushRender,
            myRenderTodoList,


        }
    }());


    const instant = (function instant () {
        
        form.addEventListener('submit', function(e) {
            let i = mainPageControl.myFolders.length;
            let t = mainPageControl.myRenderTodoList.length;

            mainPageControl.pushFolders(formTextInputs[0].value, formTextInputs[1].value, `${i}`);
            mainPageControl.pushRender();

            mainPageControl.myFolders[i].createFolderButtons(t);


            // mainPageControl.clearDiv();
            hideNewFolderButton(e);
        });
        
    }());

};
export default createFolder;