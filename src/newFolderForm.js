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
            const myTodoArray = [];


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
            todoListUI(i, myTodoArray);
            
            
             if (myTodoArray.length === 0) {
                 return;
             } else if (myTodoArray.length > 0) {
                 myTodoArray.forEach(e => e.createTodo());
             }

            })
            return folderButton;
        };

        return {
            folderName,
            folderDescription,
            folderDate,
            createFolderButtons,
            tracker
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
        const myLocalStorageArray = [];

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

        if(localStorage.myFolders === 'null' || localStorage.length === 0) {
            localStorage.setItem('myFolders', JSON.stringify(stringMyFolders));
        } else {
        const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders'));
        // const testDeser = JSON.parse(deserializeMyFolders);
        // const testObj = folderFactory(testDeser.folderName, testDeser.folderDescription);
        // const testSubject = Object.assign(testDeser, testObj);
        // console.log(testDeser);
        // console.log(testSubject);
        // testDeser.createFolderButtons();
        
        window.onbeforeunload = closingCode;
        function closingCode () {

            if (stringMyFolders.length === 0) {
                return;
            } else if (stringMyFolders.length > 0) {
                for (const index of stringMyFolders) {
                    deserializeMyFolders.push(index);
                }
            }
            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
            
            return null;
        };
        const instant = (function () {
            if (deserializeMyFolders.length === 0) {
                return;
            } else if(deserializeMyFolders.length > 0) {
                for (let i = 0; i < deserializeMyFolders.length; i++) {
                    const testSubj = Object.assign(JSON.parse(deserializeMyFolders[i]), folderFactory(JSON.parse(deserializeMyFolders[i]).folderName,
                    JSON.parse(deserializeMyFolders[i]).folderDescription, i));
                    testSubj.createFolderButtons(i).addEventListener('click', function() {
                    const delButton = document.querySelector('.todo-description-div > button');
                    testSubj.deleteIndex = function() {
                        
                        delButton.addEventListener('click', function() {
                            mainPageControl.stringMyFolders.splice(this.dataset.delete, 1);
                            console.log('test');
                            deserializeMyFolders.splice(testSubj.tracker, 1);
                            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
                        })
                    }
                    testSubj.deleteIndex();
                    }, {once: true});
                    
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
           
        }
    }());


    const instant = (function instant () {
        // Storage.prototype.setObject = function(key, value) {
        //     this.setItem(key, JSON.stringify(value));
        // }
        
        // Storage.prototype.getObject = function(key) {
        //     return JSON.parse(this.getItem(key));
        // }

        // localStorage.getObject('myFolders');

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