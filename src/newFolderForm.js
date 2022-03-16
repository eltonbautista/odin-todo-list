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
            
            deleteButton.addEventListener('click', function(e) {
                
                mainPageControl.myFolders.splice(this.dataset.delete, 1);
                
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
        const stringMyFolders = [];
        const myLocalStorageArray = [];

        const pushFolders = function pushFoldersIntoArray (folderName, folderDescription, i) {
             myFolders.push(folderFactory(folderName, folderDescription, i));
             stringMyFolders.push(JSON.stringify(folderFactory(folderName, folderDescription, i)));
        };


        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
            // todoListTabsDiv.innerText = '';
            todoDivUnderButtons.innerText = '';
        };
        // let i = foo.length;
        

        // TO "RESTART" 'foo' which is the array in localStorage holding folders 
        // set this code: localStorage.setItem('foo', foo); in loadLS() then once "reset" remove it.

        window.onload = loadLS;
        function loadLS () {
        localStorage.setItem('myFolders', JSON.stringify(myLocalStorageArray));
        const deserializeMyFolders = JSON.parse(localStorage.getItem('myFolders'));

        window.onbeforeunload = closingCode;
        function closingCode () {
            
            if (stringMyFolders.length === 0) {
                return;
            } else if (stringMyFolders.length > 0) {
                deserializeMyFolders.push(stringMyFolders);
            }
            localStorage.setItem('myFolders', JSON.stringify(deserializeMyFolders));
            
            return null;
        }; 

        }


        return {
            myFolders,
            pushFolders,
            clearDiv,
            stringMyFolders,
           
            // fooLocalStorage,
            // loadLocalStorage
            // pushRender,
            // myRenderTodoList,


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