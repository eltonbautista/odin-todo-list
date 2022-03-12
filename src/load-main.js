const loadMainPage = function loadMainPage (cat) {
    // EXISTING 
    const mainContent = document.querySelector('#main-content');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    // CREATE
    const octocatImage = document.createElement('img');
    const ghLink = document.createElement('a');

    const folderDiv = document.createElement('div');
    const formDiv = document.createElement('div');
    
    // MAIN CONTENT
    folderDiv.setAttribute('id', 'folder-div');
    formDiv.setAttribute('id', 'form-div');

    mainContent.append(folderDiv, formDiv);


// FOOTER     
    octocatImage.src = `${cat}`;
    ghLink.href = 'https://github.com/eltonbautista';
    ghLink.innerText = 'Copyright © PsychToTech 2022';
    ghLink.append(octocatImage); 
    footer.append(ghLink);


    const newFolderForm = (function newFolderForm () {

        formDiv.innerHTML = 
        `
            <form>
                <fieldset>
                    <legend>Create a New Folder</legend>
                    <div>
                        <div>
                            <label for="folder-name">Folder Name:</label>
                            <input type="text" name="folder-name" class="folder name" required maxlength='20'>
                        </div>
                        <div>
                            <label for="folder-description">Description:</label>
                            <textarea rows= "5" cols= "30" name="folder-description" class="folder description" required></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Create New Folder" class="folder button">
                        </div>
                    </div>
                </fieldset>
                <button id="new-folder-button">
                New Folder
                </button>
            </form>
        `
        const newFolderButton = document.querySelector('#new-folder-button');
        const formFieldset = document.querySelector('#form-div fieldset');
        newFolderButton.addEventListener('click', (e) => {

            if (formFieldset.style.visibility == 'hidden' || formFieldset.style.visibility == '') {
                formFieldset.style.visibility = 'visible';
            } else if (formFieldset.style.visibility == 'visible') {
                formFieldset.style.visibility = 'hidden';
            };
            e.preventDefault();
        });
    }());

    const folderContainer = (function divThatContainsFolders () {
        const buttonFolderDiv = document.createElement('div');
        buttonFolderDiv.setAttribute('class', 'button-folder-div');
        folderDiv.append(buttonFolderDiv);

        const todoDisplayDiv = document.createElement('div');
        todoDisplayDiv.setAttribute('class', 'todo-display-div');
        folderDiv.append(todoDisplayDiv);

        const todoDescriptionDiv = document.createElement('div');
        todoDescriptionDiv.setAttribute('class', 'todo-description-div');
        todoDisplayDiv.append(todoDescriptionDiv);

        const todoCardContainer = document.createElement('div');
        todoCardContainer.setAttribute('class', 'todo-card-container');
        todoDisplayDiv.append(todoCardContainer);

        const todoListTabsDiv= document.createElement('div');
        todoListTabsDiv.setAttribute('class', 'todo-list-tabs-div');
        todoCardContainer.append(todoListTabsDiv);

        const todoDivUnderButtons = document.createElement('div');
        todoDivUnderButtons.setAttribute('class', 'todo-div-under-buttons');
        todoCardContainer.append(todoDivUnderButtons);

    }());

    

}; 
export default loadMainPage;