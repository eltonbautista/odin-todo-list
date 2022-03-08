const createFolder = function createFolder() {
    const form = document.querySelector('#form-div form');
    const folderButton = document.querySelector('.folder.button');
    const newFolderButton = document.querySelector('#new-folder-button');
    const formFieldset = document.querySelector('#form-div fieldset');
    const formTextInputs = [document.querySelector('.folder.name'),
     document.querySelector('.folder.description')];

    const renderFolder = function renderFolder(e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.textContent = '');
    }


    form.addEventListener('submit', renderFolder);

    newFolderButton.addEventListener('click', (e) => {
        formFieldset.style.visibility = 'visible';
        e.preventDefault();
    });

};
export default createFolder;