const createFolder = function createFolder () {
    const myFolders = [];
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
            folderButton.setAttribute('data-count', `${i}`)
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            return folderButton;
        }

        const renderFolders = function clickFolderButtonToGenerateFolders () {
            folderDiv.innerText = '';
            folderDiv.innerHTML = `
            <div>
                ${folderName}
                <span>
                ${folderDate()}
                </span>
            </div>
            <p>${folderDescription}</p>
            `;
    }

        return {
            folderName,
            folderDescription,
            folderDate,
            createFolderButtons,
            renderFolders
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
    

    form.addEventListener('submit', function(e) {
        fillArray(formTextInputs[0].value, formTextInputs[1].value);
        myFolders[i].createFolderButtons(i).addEventListener('click', myFolders[i].renderFolders);
        hideNewFolderButton(e);
        
        console.log(myFolders[i]);
        i += 1;
        console.log(i);
        console.log(myFolders);
    });

    



};
export default createFolder;