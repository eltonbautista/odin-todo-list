const loadMainPage = function loadMainPage(cat) {
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


    const newFolderForm = (function newFolderForm() {
        const formDiv = document.querySelector('#form-div');
        formDiv.innerHTML = 
        `
            <form>
                <fieldset>
                    <legend>Create a New Folder</legend>
                    <div>
                        <div>
                            <label for="folder-name">Folder Name:</label>
                            <input type="text" name="folder-name" class="folder name" required>
                        </div>
                        <div>
                            <label for="folder-description">Description:</label>
                            <input type="text" name="folder-description" class="folder description" required>
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
    })();

}; 
export default loadMainPage;