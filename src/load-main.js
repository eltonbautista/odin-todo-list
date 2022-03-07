const loadMainPage = function loadMainPage(cat) {
    // EXISTING 
    const mainContent = document.querySelector('#main-content');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    // CREATE
    const octocatImage = document.createElement('img');
    const ghLink = document.createElement('a');
    const newFileButton = document.createElement('button');
    
    // ADD FILE BUTTON
    newFileButton.setAttribute('id', 'new-file-button');
    newFileButton.append('New File');
    mainContent.append(newFileButton);

// FOOTER     
    octocatImage.src = `${cat}`;
    ghLink.href = 'https://github.com/eltonbautista';
    ghLink.innerText = 'Copyright © PsychToTech 2022';
    ghLink.append(octocatImage); 
    footer.append(ghLink);

}; 
export default loadMainPage;