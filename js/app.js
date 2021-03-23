console.log('Welcome to JavaScript Project 1: Build a Notes Taking Website Using Pure JavaScript tut22.js')
showNotes();

//If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = '';
    // console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="cardBody my-2 mx-2" style="width: 18rem;">
            <div class="noteCard">
                <h5 class="card-title">Your Note ${index + 1}</h5>
                <p class="myPara">${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" href="#" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
    });
    let notesElem = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = "Empty";
    }
}

//Function to Delete Note
function deleteNote(index) {
    // console.log('I am deleting', index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//Filter method and function
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    let noteCards1 = document.getElementsByClassName('noteCard');
    Array.from(noteCards1).forEach(function (element) {
        let cardTxt1 = element.getElementsByTagName('p')[0].innerHTML;
        if(cardTxt1.includes(inputVal)){

            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
        console.log(noteCards1)
    })
})


//Exercise
/*
1. Add Title
2. Mark a Note as important
3. Separate note by user
4. Sync and host to web server
*/
