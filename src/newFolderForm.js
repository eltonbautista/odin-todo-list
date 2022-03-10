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
        let c = -1;
        // const myFolderButtons = [];
        const myFolders = [];
        // const myRenders = [];
        // const myDeleteButtons = [];

        const fillArray = function pushFoldersIntoArray (folderName, folderDescription) {
            return myFolders.push(folderFactory(folderName, folderDescription));
        };

        const deleteFolderButton = function deleteFolderButton (i) {
            // const deleteButton = document.querySelector('.todo-description-div button');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = i;
            todoDescriptionDiv.append(deleteButton);
            // myDeleteButtons.push(deleteButton);
            return deleteButton;
        };

        const folderDescriptionDiv = function (i) {

            const tdcDiv = document.createElement('div');
            tdcDiv.innerText = myFolders[i].folderName;
            const tdcSpan = document.createElement('span');
            tdcSpan.innerText = myFolders[i].folderDate();
            const tdcP = document.createElement('p');
            tdcP.innerText = myFolders[i].folderDescription;

            tdcDiv.append(tdcSpan);
            todoDescriptionDiv.append(tdcDiv);
            todoDescriptionDiv.append(tdcP);

        }

        // const renderFolders = function clickFolderButtonToGenerateFolders (i) {
        //     myRenders.push(folderDescriptionDiv(i));
        //     deleteFolderButton();
        // };

        const createFolderButtons = function createFolderButtons (i) {
            
            // let i = myFolderButtons.length - 1;
            const folderButton = document.createElement('button');
            // folderButton.setAttribute('data-count', `${i += 1}`);
            folderButton.dataset.count = i;
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            // renderFolders(i);
            return folderButton;
        };

        // const pushButtonIntoArray = function pushButtonIntoArray () {
        //     myFolderButtons.push(createFolderButtons());
        // };

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
        };

        
        

        const controllingFunction = function controllingFunction(i) {

            const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
            let deleteButton = document.querySelector(`.todo-description-div button[data-delete="${i}"]`);

            const deleteFolderFunction = function deleteFolderFunction (i) {
                // const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
                // const deleteButton = document.querySelector('.todo-description-div button');
                // myFolderButtons.splice(deleteButton.dataset.delete, 1)
                myFolders.splice(deleteButton.dataset.delete, 1)
                // myRenders.splice(deleteButton.dataset.delete, 1)
                // myDeleteButtons.splice(deleteButton.dataset.delete, 1);
                buttonFolder.remove();
                clearDiv();
            }
            for (let i = 0; i < myFolders.length; i++) {

                buttonFolder.addEventListener('click', function (e) {
                    clearDiv();
                    folderDescriptionDiv(i);
                    console.log(myFolders);
                    deleteFolderButton(i);
                    console.log(i);
                });
                console.log(i);

                deleteButton.addEventListener('click', function(e) {
                    console.log(i)
                    deleteFolderFunction(i);
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
            // myFolderButtons,
            myFolders,
            // pushButtonIntoArray,
            controllingFunction,
            fillArray,
            deleteFolderButton,
            folderDescriptionDiv,
            createFolderButtons,
            clearDiv
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
            let i = mainPageControl.myFolders.length;
            mainPageControl.fillArray(formTextInputs[0].value, formTextInputs[1].value);
            mainPageControl.createFolderButtons(i);
            mainPageControl.clearDiv();
            mainPageControl.folderDescriptionDiv(i);
            mainPageControl.deleteFolderButton(i);
            // mainPageControl.pushButtonIntoArray();
            mainPageControl.controllingFunction(i);

            
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