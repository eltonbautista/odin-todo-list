const createFolder = function createFolder () {
    const myFolders = [];
    const folderFactory = function folderFactory (folderName, folderDescription) {
        const folderDate = function dateToString () {
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




    const form = document.querySelector('#form-div form');
    const folderButton = document.querySelector('.folder.button');
    const formTextInputs = [document.querySelector('.folder.name'),
     document.querySelector('.folder.description')];
     
    const renderFolder = function renderFolder (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }

    form.addEventListener('submit', renderFolder);
};
export default createFolder;