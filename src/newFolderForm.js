const createFolder = function createFolder () {
    // const myFolders = [];
    // const myFolderButtons = [];
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    // const folderButton = document.querySelector('.folder.button');
    const formTextInputs = [document.querySelector('.folder.name'),
    document.querySelector('.folder.description')];
    const buttonFolderDiv = document.querySelector('.button-folder-div');
    const folderDiv = document.querySelector('.todo-display-div');
    const todoDescriptionDiv = document.querySelector('.todo-description-div');


    const folderFactory = function folderFactory (folderName, folderDescription) {

        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
        }

        // const createFolderButtons = function createFolderButtons () {
        //     const folderButton = document.createElement('button');
        //     // folderButton.setAttribute('data-count', `${i}`);
        //     folderButton.innerText = formTextInputs[0].value;
        //     buttonFolderDiv.append(folderButton);
        //     myFolderButtons.push(folderButton);
        //     return folderButton;
        // };


        // const deleteFolder = function deleteFolder (i) {
        //     const todoDescriptionDiv = document.querySelector('.todo-description-div');
        //     const descriptionDivElements = [document.querySelector('.todo-description-div div'), 
        //     document.querySelector('.todo-description-div p', document.querySelector('.todo-description-div button'))];
        //     const deleteFolderButton = document.createElement('button');
        //     deleteFolderButton.setAttribute('class', `delete-button${i}`);
        //     deleteFolderButton.append('Delete Folder');
        //     todoDescriptionDiv.append(deleteFolderButton);

        //     deleteFolderButton.addEventListener('click', function() {
        //         myFolders.splice(i, 1);
        //         myFolderButtons[i].remove();
        //         myFolderButtons.splice(i, 1);
        //         console.log(myFolders);
        //         console.log(myFolderButtons);
        //         console.log(i)
        //         todoDescriptionDiv.innerText = '';
        //         return i -= 1;
        //     })
            
        // }


        return {
            folderName,
            folderDescription,
            folderDate,
        }
    };

    // const fillArray = function pushFoldersIntoArray (folderName, folderDescription) {
    //     myFolders.push(folderFactory(folderName, folderDescription));
    // };

    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    


const mainPageControl = (function mainPageControlModulePattern () {
        let c = 0;
        const myFolderButtons = [];
        const myFolders = [];
        const myRenders = [];
        const myDeleteButtons = [];

        const fillArray = function pushFoldersIntoArray (folderName, folderDescription) {
            return myFolders.push(folderFactory(folderName, folderDescription));
        };

        const renderFolders = function clickFolderButtonToGenerateFolders (i) {
            const render = function() {
                return(
                todoDescriptionDiv.innerHTML = `
            <div>
                ${myFolders[i].folderName}
                <span>
                ${myFolders[i].folderDate()}
                </span>
            </div>
            <p>${myFolders[i].folderDescription}</p>
            
            `);
            };
            myRenders.push(render());
        };

        const createFolderButtons = function createFolderButtons () {
            
            let i = myFolderButtons.length - 1;
            const folderButton = document.createElement('button');
            folderButton.setAttribute('data-count', `${i += 1}`);
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            renderFolders(i);
            return folderButton;
        };

        const pushButtonIntoArray = function pushButtonIntoArray () {
            myFolderButtons.push(createFolderButtons());
        };

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
        };

        const deleteFolderButton = function deleteFolderButton () {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = c+=1;
            todoDescriptionDiv.append(deleteButton);
            
            return deleteButton;
        };

        const deleteFolderFunction = function deleteFolderFunction (i) {
            clearDiv();
            myFolderButtons.splice(i, 1)
            myFolders.splice(i, 1)
            myRenders.splice(i, 1)
            myDeleteButtons.splice(i, 1);
        }





        

        const controllingFunction = function controllingFunction() {
            for (let i = 0; i < myFolderButtons.length; i++) {
                myFolderButtons[i].addEventListener('click', function (e) {
                    clearDiv();
                    todoDescriptionDiv.innerHTML = myRenders[i];
                })


            }
            // for (let i = 0; i < myFolderButtons.length; i++) {

            // }
        }

        // Put event listener on .button-folder-div and use target to apply event listeners to each button.
        // Each button will then be responsible for generating each index of myFolders. 

        // buttonFolderDiv.addEventListener('click', function(e) {
            //     const isButton = e.target.nodeName === 'BUTTON';
            //     if (!isButton) {
            //         return;
            //     }
            //     if(e.target === myFolderButtons[e.target.dataset.count]) {
            //         console.log(e.target.dataset.count);
            //     }
                
            // })



        return {
            myFolderButtons,
            myFolders,
            pushButtonIntoArray,
            controllingFunction,
            fillArray
        }
    }());


    const instant = (function instant () { 
        
        // const render = function render () {
        //     for (let i = 0; i < myFolders.length; i++) {
        //         // i = myFolders.length-1;
        //         console.log(i)
        //         myFolderButtons[i].addEventListener('click', function() {
                    
        //             myFolders[i].renderFolders();
        //             myFolders[i].deleteFolder(i);
                    
        //         });
                
        //     };
        // };

        form.addEventListener('submit', function(e) {
            //let i = myFolders.length;
            mainPageControl.fillArray(formTextInputs[0].value, formTextInputs[1].value);
            mainPageControl.pushButtonIntoArray();
            mainPageControl.controllingFunction();
            
            //myFolders[i].createFolderButtons();
            //render();
            // myFolders[i].createFolderButtons(i).addEventListener('click', function(e) {
            //     //will increment delete button attribute once, hitting delete button will decrement 
            // }, {once: true});
            hideNewFolderButton(e);
            // i += 1;
            // console.log(myFolders);
            // console.log(myFolderButtons);
        });

        
    }());

    

    



};
export default createFolder;