const createFolder = function createFolder () {
    const myFolders = [];
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    // const folderButton = document.querySelector('.folder.button');
    const formTextInputs = [document.querySelector('.folder.name'),
    document.querySelector('.folder.description')];
    const buttonFolderDiv = document.querySelector('.button-folder-div');


    const folderFactory = function folderFactory (folderName, folderDescription) {
        const folderDate = function dateToString () {
            let date;
            let today = new Date();

            return date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +
            today.getDate();
            
        }

        return {
            folderName,
            folderDescription,
            folderDate,
        }
    };

    const fillArray = function pushFoldersIntoArray (folderName, folderDescription) {
        myFolders.push(folderFactory(folderName, folderDescription));
    };


    const renderFolderButton = function renderFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        
        const folderButton = document.createElement('button');
        folderButton.innerText = formTextInputs[0].value;
        buttonFolderDiv.append(folderButton);

        formTextInputs.forEach((e) => e.value = '');
    }

    form.addEventListener('submit', function(e) {
        fillArray(formTextInputs[0].value, formTextInputs[1].value);
        renderFolderButton(e);
    });

};
export default createFolder;