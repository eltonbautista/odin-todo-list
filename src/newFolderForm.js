const createFolder = function createFolder () {
    const myFolders = [];
    const myFolderButtons = [];
    let i = 0;
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    // const folderButton = document.querySelector('.folder.button');
    const formTextInputs = [document.querySelector('.folder.name'),
    document.querySelector('.folder.description')];
    const buttonFolderDiv = document.querySelector('.button-folder-div');
    const folderDiv = document.querySelector('.todo-display-div');


    const folderFactory = function folderFactory (folderName, folderDescription) {

        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
        }

        const createFolderButtons = function createFolderButtons (i) {
            const folderButton = document.createElement('button');
            folderButton.setAttribute('data-count', `${i}`);
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            myFolderButtons.push(folderButton);
            return folderButton;
        };

        const renderFolders = function clickFolderButtonToGenerateFolders () {
            const todoDescriptionDiv = document.querySelector('.todo-description-div');

            todoDescriptionDiv.innerText = '';
            todoDescriptionDiv.innerHTML = `
            <div>
                ${folderName}
                <span>
                ${folderDate()}
                </span>
            </div>
            <p>${folderDescription}</p>
            
            `;
    }

        const deleteFolder = function deleteFolder (i) {
            const todoDescriptionDiv = document.querySelector('.todo-description-div');
            const deleteFolderButton = document.createElement('button');
            deleteFolderButton.setAttribute('class', `delete-button${i}`);
            deleteFolderButton.append('Delete Folder');
            todoDescriptionDiv.append(deleteFolderButton);
        }


        return {
            folderName,
            folderDescription,
            folderDate,
            createFolderButtons,
            renderFolders,
            deleteFolder
        }
    };

    const fillArray = function pushFoldersIntoArray (folderName, folderDescription) {
        myFolders.push(folderFactory(folderName, folderDescription));
    };

    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    

    const instant = (function instant () { 
        let i = 0;
        
        const render = function render () {
            for (let i = 0; i < myFolders.length; i++) {
                myFolderButtons[i].addEventListener('click', function() {
                    myFolders[i].renderFolders();
                    myFolders[i].deleteFolder(i);
                })
            }
        }

        form.addEventListener('submit', function(e) {
            fillArray(formTextInputs[0].value, formTextInputs[1].value);
            myFolders[i].createFolderButtons(i);
            render();
            // myFolders[i].createFolderButtons(i).addEventListener('click', function(e) {
            //     //will increment delete button attribute once, hitting delete button will decrement 
            // }, {once: true});
            hideNewFolderButton(e);
            
            i += 1;
            
        });

        
        


    }());

    

    



};
export default createFolder;