const createFolder = function createFolder () {
    // const myFolders = [];
    // const myFolderButtons = [];
    const form = document.querySelector('#form-div form');
    const formFieldset = document.querySelector('#form-div fieldset');
    // const folderButton = document.querySelector('.folder.button');
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
        
        const testFunction = function() {
            let i = mainPageControl.myFolders.length;
            return i
        }

        const deleteFolderButton = function deleteFolderButton (i, tdcDiv, tdcSpan, tdcP, folderButton) {
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Folder';
            deleteButton.dataset.delete = i;
            todoDescriptionDiv.append(deleteButton);
            
            deleteButton.addEventListener('click', function(e) {
                const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
                // const deleteButton = document.querySelector(`.todo-description-div button[data-delete="${i}"]`);
                mainPageControl.myFolders[this.dataset.remove] = undefined;
                tdcDiv.remove();
                tdcSpan.remove();
                tdcP.remove();
                folderButton.remove();
                this.remove();

            })
            return deleteButton;
        };

        const folderDescriptionDiv = function (i, folderButton) {

            const tdcDiv = document.createElement('div');
            tdcDiv.innerText = mainPageControl.myFolders[i].folderName;
            const tdcSpan = document.createElement('span');
            tdcSpan.innerText = mainPageControl.myFolders[i].folderDate();
            const tdcP = document.createElement('p');
            tdcP.innerText = mainPageControl.myFolders[i].folderDescription;

            tdcDiv.append(tdcSpan);
            todoDescriptionDiv.append(tdcDiv);
            todoDescriptionDiv.append(tdcP);

            deleteFolderButton(i, tdcDiv, tdcSpan, tdcP, folderButton);

        };

        return {
            folderName,
            folderDescription,
            folderDate,
            tracker,
            deleteFolderButton,
            folderDescriptionDiv,
        }
    };



    const hideNewFolderButton = function hideNewFolderButton (e) {
        e.preventDefault();
        formFieldset.style.visibility = 'hidden';
        formTextInputs.forEach((e) => e.value = '');
    }
    


const mainPageControl = (function mainPageControlModulePattern () {
        let c = -1;
        // const myFolderButtons = [];
        const myFolders = [];
        // const myRenders = [];
        // const myDeleteButtons = [];

        const fillArray = function pushFoldersIntoArray (folderName, folderDescription, i) {
            return myFolders.push(folderFactory(folderName, folderDescription, i));
        };


        const createFolderButtons = function createFolderButtons (i) {
            
            const folderButton = document.createElement('button');
            folderButton.dataset.count = i;
            folderButton.innerText = formTextInputs[0].value;
            buttonFolderDiv.append(folderButton);
            console.log(myFolders);
            folderButton.addEventListener('click', function(e) {
                clearDiv();
                myFolders[this.dataset.count].folderDescriptionDiv(this.dataset.count, this);
                console.log(myFolders);
            });

            
            return folderButton;
        };

        const clearDiv = function clearTodoDescriptionDiv () {
            todoDescriptionDiv.innerText = '';
        };

        // const testFunction = function testFunction(i) {

        //     const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
        //     const deleteButton = document.querySelector(`.todo-description-div button[data-delete="${i}"]`);

        //     const deleteFolderFunction = function deleteFolderFunction (i) {

        //         myFolders.splice(deleteButton.dataset.delete, 1)

        //         buttonFolder.remove();
        //         clearDiv();
        //         i-=1;
                
        //     }

        //     for (let j = 0; j < myFolders.length; j++) {
        //         deleteButton.addEventListener('click', function() {
        //             console.log(j)
        //             deleteFolderFunction(j);
                    
        //         })
        //     }

        // }        
        

        // const controllingFunction = function controllingFunction(i) {

        //     for (let i = 0; i < myFolders.length; i++) {
        //         const buttonFolder = document.querySelector(`.button-folder-div button[data-count="${i}"]`);
        //         buttonFolder.addEventListener('click', function (e) {
                    
        //             console.log(myFolders);
        //         });
        //     }
        // };

        





        return {
            // myFolderButtons,
            myFolders,
            // pushButtonIntoArray,
            // controllingFunction,
            fillArray,
            // deleteFolderButton,
            // folderDescriptionDiv,
            createFolderButtons,
            clearDiv,
            // testFunction
        }
    }());


    const instant = (function instant () {
        


        form.addEventListener('submit', function(e) {
            let i = mainPageControl.myFolders.length;
            console.log(i);
            mainPageControl.fillArray(formTextInputs[0].value, formTextInputs[1].value, `${i}`);
            mainPageControl.createFolderButtons(i);
            mainPageControl.clearDiv();

            console.log(mainPageControl.myFolders);

            // mainPageControl.controllingFunction(i);
           // mainPageControl.testFunction(i);

            hideNewFolderButton(e);

        });

        
    }());

};
export default createFolder;