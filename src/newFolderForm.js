import {todoListUI} from './todo-display';
import { newTodoFactory } from './todo-list-logic';
// import storageModulePattern from './local-storage';



const createFolder = function createFolder () {
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    const formTextInputs = [document.querySelector('.folder.name'),
    document.querySelector('.folder.description')];
    const buttonFolderDiv = document.querySelector('.button-folder-div');
    const todoDescriptionDiv = document.querySelector('.todo-description-div');
    // const todoListTabsDiv = document.querySelector('.todo-list-tabs-div');
    const todoDivUnderButtons = document.querySelector('.todo-div-under-buttons');
    


    const folderFactory = function folderFactory (folderName, folderDescription, tracker, todoArr) {
        const myTodoArray = [];
        
        const myClonedArr = todoArr;

        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
        }
        
        const clonedArrFunction = () => {
            return [...todoArr]
        }

        // const myClonedTodo = ;

        const deleteFolderButton = function deleteFolderButton (i, tdcDiv, tdcSpan, tdcP, folderButton, addButton) {
            const todoListDiv = document.querySelector('.todo-div-under-buttons > div:last-child');
            const addButtonDiv = document.querySelector('.todo-div-under-buttons > div:first-child');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = i;
            todoDescriptionDiv.append(deleteButton);
            
            // const deserializedLocalStorageArray = JSON.parse(localStorage.getItem('myFolders'));
            // // const realDeserialized = JSON.parse();
            // const realDeserialized = (i) => JSON.parse(i);

            deleteButton.addEventListener('click', function(e) {
                mainPageControl.myFolders[i] = null;
                
                // deserializedLocalStorageArray.splice(this.dataset.delete, 1);
                // localStorage.setItem('myFolders', JSON.stringify(deserializedLocalStorageArray));
                tdcDiv.remove();
                tdcSpan.remove();
                tdcP.remove();
                folderButton.remove();
                todoDivUnderButtons.innerText = '';
                
                this.remove();

            })
            return deleteButton;
        };

        const pleaseWork = function () {
            if (myTodoArray.length === 0) {
                return;
            } else if (myTodoArray.length > 0 ) {
                myTodoArray.forEach(e => e.createTodo());
            }
        }
        
        const createFolderButtons = function(i, y) {
            const testArr = [];

            const tester = JSON.parse(localStorage.getItem('myFolders'));
            
            const folderButton = document.createElement('button');
            folderButton.dataset.count = i;
            folderButton.innerText = folderName;
            buttonFolderDiv.append(folderButton);
            
            

            folderButton.addEventListener('click', function() {
            
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
            
            deleteFolderButton(i, tdcDiv, tdcSpan, tdcP, folderButton,);
            todoListUI(i, myTodoArray, mainPageControl.myLocalTodo, testArr);
        
            })

            folderButton.addEventListener('click', pleaseWork);
            
            return folderButton;
        };

        const renderTodos = function() {
            return myTodoArray;
        };


        return {
            folderName,
            folderDescription,
            folderDate,
            createFolderButtons,
            tracker,
            myTodoArray,
            renderTodos,
            // myClonedTodo,
            clonedArrFunction,
            myClonedArr,
            pleaseWork
        }
    };

    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    };
    
const mainPageControl = (function mainPageControlModulePattern () {
        const myFolders = [];
        const stringMyFolders = [];
        const myLocalTodo = [];
        
        const pushFolders = function pushFoldersIntoArray (folderName, folderDescription, i) {
             myFolders.push(folderFactory(folderName, folderDescription, i));
             stringMyFolders.push((folderFactory(folderName, folderDescription, i)));
        };

        

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
            todoDivUnderButtons.innerText = '';
        };

        /* WORK ON LOCAL STORAGE. */

        window.onload = loadLS;
        function loadLS () {
            // localStorage.clear();
        if(localStorage.myFolders === 'null' || localStorage.length === 0 || localStorage.todo === 'null') {
            localStorage.setItem('myFolders', JSON.stringify([]));
            localStorage.setItem('todo', JSON.stringify([]));
        } else {
        
        // const ownScope = (function() {

            const removeNull = (function removeNull () {
                const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders'));
                
                return localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders.filter(a => a!= null)));
            }());



            
            const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders')).filter(a => a != null);
            const deserializedTodos = JSON.parse(localStorage.getItem('todo'));
            // window.addEventListener('visibilitychange', closingCode);
            window.onbeforeunload = closingCode;
            function closingCode () {
            const instant = (function() {
                if (deserializeMyFolders.length === 0 && myFolders.length === 0) {
                    return;
                } else if (myFolders.length >= 0) {
                    for (const index of myFolders) {
                        const foo = JSON.parse(localStorage.getItem('myFolders'));
                        localStorage.setItem('myFolders', JSON.stringify(foo.filter(a => a != null)));
                        foo.push(index);
                        localStorage.setItem('myFolders', JSON.stringify(foo));  
                    }; 
                };
                if (myLocalTodo.length === 0) {
                    return;
                } else if (myLocalTodo.length > 0) {
                    for (const index of myLocalTodo) {
                        deserializedTodos.push(index);
                        localStorage.setItem('todo', JSON.stringify(deserializedTodos));
                    };
                }
            
            
            }());
            return null;
        };

        // }());

        
        const instant = function () {
            const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders')).filter(a => a != null);
            const copiedMyFolders = JSON.parse(localStorage.getItem('myFolders')).filter(a => a != null);

            
            if (deserializeMyFolders.length === 0 && myFolders.length === 0) {
                return;
            } else if(deserializeMyFolders.length > 0 || myFolders.length >= 0) {
                for (let i = 0; i < deserializeMyFolders.length; i++) {
                    
                    
                    const testSubj = Object.assign(copiedMyFolders[i], folderFactory(deserializeMyFolders[i].folderName,
                    deserializeMyFolders[i].folderDescription, i, deserializeMyFolders[i].myTodoArray));

                    testSubj.myTodoArray = deserializeMyFolders[i].myTodoArray;
                    

                    testSubj.createFolderButtons(i).addEventListener('click', function() {

                        
                        this.removeEventListener('click', testSubj.pleaseWork);

                        const todoInputArray = [document.querySelector('#todo-task'), 
            document.querySelector('#todo-due-date-start'), document.querySelector('#todo-due-date-end')];
                       
                        testSubj.myTodoArray.forEach(e => {
                            Object.assign(e, newTodoFactory(e.task, e.start, e.end));
                            e.createTodo();
                        });
                        
                    const delButton = document.querySelector('.todo-description-div > button');
                    delButton.remove();
                    delButton.removeAttribute('data-delete');

                    const deleteButton = document.createElement('button');
                    deleteButton.innerText = 'Delete Folder';
                    deleteButton.setAttribute('data-count', i);
                    todoDescriptionDiv.append(deleteButton);
                    const addButton = document.querySelector('.todo-div-under-buttons > div > input[type="submit"]');
                    testSubj.deleteIndex = function() {
                        
                        deleteButton.addEventListener('click', function() {
                            
                            deserializeMyFolders[i] = null;
                            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
                            document.querySelector('.todo-description-div').innerText = '';
                            document.querySelector('.todo-div-under-buttons div:first-child').innerText = '';
                            document.querySelector('.todo-div-under-buttons div:last-child').innerText = '';
                            document.querySelector(`.button-folder-div button[data-count="${this.dataset.count}"]`).remove();
                        })
                    }
                    testSubj.deleteIndex();
                    testSubj.addTodo = function() {
                        addButton.addEventListener('click', function() {
                            deserializeMyFolders[i].myTodoArray.push(newTodoFactory(todoInputArray[0].value, todoInputArray[1].value,
                                todoInputArray[2].value));
                            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));

                        })
                    }; testSubj.addTodo(); 

                    },);
                    
                    
                };
            };
            }; instant();
        };
        };


        return {
            myFolders,
            pushFolders,
            clearDiv,
            stringMyFolders,
            myLocalTodo
        }
    }());


    const instant = (function instant () {

        form.addEventListener('submit', function(e) {
            let i = mainPageControl.myFolders.length;

            mainPageControl.pushFolders(formTextInputs[0].value, formTextInputs[1].value, `${i}`);
            
            mainPageControl.myFolders[i].createFolderButtons(i);
            
            hideNewFolderButton(e);
        });
        
    }());

};
export default createFolder;