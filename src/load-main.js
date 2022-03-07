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

}; 
export default loadMainPage;