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
    


    const folderFactory = function folderFactory (folderName, folderDescription, tracker) {
        const myTodoArray = [];
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
            
            const deserializedLocalStorageArray = JSON.parse(localStorage.getItem('myFolders'));
            // const realDeserialized = JSON.parse();
            const realDeserialized = (i) => JSON.parse(i);

            deleteButton.addEventListener('click', function(e) {
                
                mainPageControl.myFolders.splice(this.dataset.delete, 1);
                mainPageControl.stringMyFolders.splice(this.dataset.delete, 1);
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


        
        const createFolderButtons = function(i) {
            
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
            todoListUI(i, myTodoArray, mainPageControl.myLocalTodo);
            console.log(myTodoArray);
             if (myTodoArray.length === 0) {
                 return;
             } else if (myTodoArray.length > 0) {
                 myTodoArray.forEach(e => e.createTodo());
             }

            })
   
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
            renderTodos
        }
    };



    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    


const mainPageControl = (function mainPageControlModulePattern () {
        const myFolders = [];
        const stringMyFolders = [];
        const myLocalTodo = [];
        
        const pushFolders = function pushFoldersIntoArray (folderName, folderDescription, i) {
             myFolders.push(folderFactory(folderName, folderDescription, i));
             stringMyFolders.push(JSON.stringify(folderFactory(folderName, folderDescription, i)));
        };

        
        // console.log(testObj);

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
            todoDivUnderButtons.innerText = '';
        };

        

        window.onload = loadLS;
        function loadLS () {
            // localStorage.clear();
        if(localStorage.myFolders === 'null' || localStorage.length === 0 || localStorage.todo === 'null') {
            localStorage.setItem('myFolders', JSON.stringify(myFolders));
            localStorage.setItem('todo', JSON.stringify([]));
        } else {
        const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders'));
        const deserializedTodos = JSON.parse(localStorage.getItem('todo'));
        // const testDeser = JSON.parse(deserializeMyFolders);
        // const testObj = folderFactory(testDeser.folderName, testDeser.folderDescription);
        // const testSubject = Object.assign(testDeser, testObj);
        // console.log(testDeser);
        // console.log(testSubject);
        // testDeser.createFolderButtons();
        
        window.onbeforeunload = closingCode;
        function closingCode () {
            const instant = (function() {
                if (deserializeMyFolders.length === 0 && myFolders.length === 0) {
                    return;
                } else if (deserializeMyFolders.length > 0 || myFolders.length >= 0) {
                    for (const index of myFolders) {
                        deserializeMyFolders.push(JSON.stringify(index));
                    };
                };
                if (myLocalTodo.length === 0) {
                    return;
                } else if (myLocalTodo.length > 0) {
                    for (const index of myLocalTodo) {
                        deserializedTodos.push(index);
                    };
                }
            }());

            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
            localStorage.setItem('todo', JSON.stringify(deserializedTodos));
            return null;
        };
        const instant = (function () {
            if (deserializeMyFolders.length === 0 && myFolders.length === 0) {
                return;
            } else if(deserializeMyFolders.length > 0 || myFolders.length >= 0) {
                for (let i = 0; i < deserializeMyFolders.length; i++) {
                    const testSubj = Object.assign(JSON.parse(deserializeMyFolders[i]), folderFactory(JSON.parse(deserializeMyFolders[i]).folderName,
                    JSON.parse(deserializeMyFolders[i]).folderDescription, i));
                    console.log(testSubj.myTodoArray);
                    console.log(testSubj.myTodoArray = JSON.parse(deserializeMyFolders[i]).myTodoArray);
                    console.log(testSubj);
                    
                    // Object.assign(testSubj.myTodoArray)

                    testSubj.createFolderButtons(i).addEventListener('click', function() {
                        const todoInputArray = [document.querySelector('#todo-task'), 
            document.querySelector('#todo-due-date-start'), document.querySelector('#todo-due-date-end')];

                        testSubj.myTodoArray.forEach(e => {
                            Object.assign(e, newTodoFactory(e.task, e.start, e.end));
                            e.createTodo();
                        });
                        console.log(deserializeMyFolders);
                        console.log(JSON.parse(deserializeMyFolders[0]).myTodoArray);
                    const delButton = document.querySelector('.todo-description-div > button');
                    const addButton = document.querySelector('.todo-div-under-buttons > div > input[type="submit"]');
                    testSubj.deleteIndex = function() {
                        
                        delButton.addEventListener('click', function() {
                            mainPageControl.stringMyFolders.splice(this.dataset.delete, 1);
                            console.log('test');
                            deserializeMyFolders.splice(testSubj.tracker, 1);
                            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
                        })
                    }
                    testSubj.deleteIndex();
                    testSubj.addTodo = function() {
                        addButton.addEventListener('click', function() {
                            
                            JSON.parse(deserializeMyFolders[0]).myTodoArray.push(newTodoFactory(todoInputArray[0].value, todoInputArray[1].value,
                                todoInputArray[2].value));
                                console.log(JSON.parse(deserializeMyFolders[0]).myTodoArray.push('hello'));
                            // localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
                                console.log(testSubj.myTodoArray);
                        })
                    }; testSubj.addTodo();

                    },);
                    
                    
                };
            };
            }()); 
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
            console.log(mainPageControl.myFolders);
            
            
            // localStorage.setItem('myFolders', JSON.stringify(mainPageControl.myFolders));

            console.log(mainPageControl.stringMyFolders);
            hideNewFolderButton(e);
        });
        
    }());

};
export default createFolder;