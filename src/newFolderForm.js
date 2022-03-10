const createFolder = function createFolder () {
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
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
        }
    };



    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    


const mainPageControl = (function mainPageControlModulePattern () {
        const myFolders = [];
        

        const fillArray = function pushFoldersIntoArray (folderName, folderDescription, i) {
            return myFolders.push(folderFactory(folderName, folderDescription, i));
        };

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
        };

        return {
            myFolders,
            fillArray,
            clearDiv,

        }
    }());


    const instant = (function instant () {
        
        form.addEventListener('submit', function(e) {
            let i = mainPageControl.myFolders.length;
            mainPageControl.fillArray(formTextInputs[0].value, formTextInputs[1].value, `${i}`);
            mainPageControl.myFolders[i].createFolderButtons(i);
            mainPageControl.clearDiv();
            hideNewFolderButton(e);
        });
        
    }());

};
export default createFolder;