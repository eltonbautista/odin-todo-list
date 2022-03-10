const createFolder = function createFolder () {
    const myFolders = [];
    // const myFolderButtons = [];
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

        // const createFolderButtons = function createFolderButtons () {
        //     const folderButton = document.createElement('button');
        //     // folderButton.setAttribute('data-count', `${i}`);
        //     folderButton.innerText = formTextInputs[0].value;
        //     buttonFolderDiv.append(folderButton);
        //     myFolderButtons.push(folderButton);
        //     return folderButton;
        // };

        const renderFolders = function clickFolderButtonToGenerateFolders (i) {
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
            const descriptionDivElements = [document.querySelector('.todo-description-div div'), 
            document.querySelector('.todo-description-div p', document.querySelector('.todo-description-div button'))];
            const deleteFolderButton = document.createElement('button');
            deleteFolderButton.setAttribute('class', `delete-button${i}`);
            deleteFolderButton.append('Delete Folder');
            todoDescriptionDiv.append(deleteFolderButton);

            deleteFolderButton.addEventListener('click', function() {
                myFolders.splice(i, 1);
                myFolderButtons[i].remove();
                myFolderButtons.splice(i, 1);
                console.log(myFolders);
                console.log(myFolderButtons);
                console.log(i)
                todoDescriptionDiv.innerText = '';
                return i -= 1;
            })
            
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
    


    const mainPageControl = function mainPageControlModulePattern () {
        const myFolderButtons = [];
        let i = 0;


        const createFolderButtons = function createFolderButtons () {
            const folderButton = document.createElement('button');
            folderButton.setAttribute('data-count', `${i += 1}`);
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            return folderButton;
        }

        const pushButtonIntoArray = function pushButtonIntoArray () {
            myFolderButtons.push(createFolderButtons());
        };

        

        return {
            myFolderButtons,
            pushButtonIntoArray,

        }
    }
























    const instant = (function instant () { 
        
        const render = function render () {
            for (let i = 0; i < myFolders.length; i++) {
                // i = myFolders.length-1;
                console.log(i)
                myFolderButtons[i].addEventListener('click', function() {
                    
                    myFolders[i].renderFolders();
                    myFolders[i].deleteFolder(i);
                    
                });
                
            };
        };

        form.addEventListener('submit', function(e) {
            let i = myFolders.length;
            
            fillArray(formTextInputs[0].value, formTextInputs[1].value);
            myFolders[i].createFolderButtons();
            render();
            // myFolders[i].createFolderButtons(i).addEventListener('click', function(e) {
            //     //will increment delete button attribute once, hitting delete button will decrement 
            // }, {once: true});
            hideNewFolderButton(e);
            i += 1;
            console.log(myFolders);
            console.log(myFolderButtons);
        });

        
    }());

    

    



};
export default createFolder;