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


    const folderFactory = function folderFactory (folderName, folderDescription, tracker) {

        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
        }
        

        const deleteFolderButton = function deleteFolderButton (i, tdcDiv, tdcSpan, tdcP, folderButton) {
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = i;
            todoDescriptionDiv.append(deleteButton);
            
            deleteButton.addEventListener('click', function(e) {
                const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
                // const deleteButton = document.querySelector(`.todo-description-div button[data-delete="${i}"]`);
                // mainPageControl.myFolders[this.dataset.remove] = undefined;
                mainPageControl.myFolders.splice(this.dataset.delete, 1);
                tdcDiv.remove();
                tdcSpan.remove();
                tdcP.remove();
                folderButton.remove();
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

            deleteFolderButton(i, tdcDiv, tdcSpan, tdcP, folderButton);
            })
            };

        return {
            folderName,
            folderDescription,
            folderDate,
            tracker,
            deleteFolderButton,
            createFolderButtons
            // folderDescriptionDiv,
        }
    };



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

        const fillArray = function pushFoldersIntoArray (folderName, folderDescription, i) {
            return myFolders.push(folderFactory(folderName, folderDescription, i));
        };


        const createFolderButtons = function createFolderButtons (i) {
            
            
            console.log(myFolders);
            folderButton.addEventListener('click', function(e) {
                myFolders[i].folderDescriptionDiv(i, this);
                console.log(myFolders);
            });
            return folderButton;
        };

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
        };

        return {
            // myFolderButtons,
            myFolders,
            // pushButtonIntoArray,
            // controllingFunction,
            fillArray,
            // deleteFolderButton,
            // folderDescriptionDiv,
            createFolderButtons,
            clearDiv,
            // testFunction
        }
    }());


    const instant = (function instant () {
        

        form.addEventListener('submit', function(e) {
            let i = mainPageControl.myFolders.length;
            console.log(i);
            mainPageControl.fillArray(formTextInputs[0].value, formTextInputs[1].value, `${i}`);
            mainPageControl.myFolders[i].createFolderButtons(i);
            mainPageControl.clearDiv();
            console.log(mainPageControl.myFolders);

            // mainPageControl.controllingFunction(i);
           // mainPageControl.testFunction(i);

            hideNewFolderButton(e);
            // i+=1;
        });

        
    }());

};
export default createFolder;