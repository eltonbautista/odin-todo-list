const newFolderForm = function newFolderForm() {
    const formDiv = document.querySelector('#form-div');
    

    // CREATE DOM 
    const folderForm = document.createElement('form');
    const formField = document.createElement('fieldset');
    const folderFieldLegend = document.createElement('legend');
    const newFolderButton = document.createElement('button');

    // APPENDING 
    folderFieldLegend.append('Create a New Folder');
    formField.append(folderFieldLegend);
    folderForm.append(formField);
    formDiv.append(folderForm);

    // ADD FOLDER BUTTON
    newFolderButton.setAttribute('id', 'new-folder-button');
    newFolderButton.append('New Folder');
    formDiv.append(newFolderButton);



    // const createForm = function createForm() {
        
    // }

    // newFolderButton.addEventListener()
}
export default newFolderForm;