class Notes{
    getFromLs(){
        let notes;

        let getFromLS= localStorage.getItem('notes')

        if(getFromLS===null){
            notes=[]
        }else{
            notes=JSON.parse(getFromLS)
        }
        return notes;
    }
    addNoteToLocalStorage(notes,notesFromLS){
        notesFromLS.push(notes)
        localStorage.setItem('notes',JSON.stringify(notesFromLS))
    }
    localStorageOnload(notesFromLS){
        notesFromLS.forEach(note => {
            const noteList_div=document.querySelector('#note-list')

            const removeBtn_a=document.createElement('a')
            removeBtn_a.classList='remove-note'
            removeBtn_a.textContent='X'
            const li=document.createElement('li')
    
            li.appendChild(document.createTextNode(note))
    
            li.appendChild(removeBtn_a)
    
            noteList_div.appendChild(li)
    
        });
    }
    removeNoteFromLocalStorage(noteContent,notesFromLS){
        const noteDelete= noteContent.substring(0,noteContent.length -1)

        notesFromLS.forEach((note,index) => {
            if(noteDelete===note){
                notesFromLS.splice(index,1)
            }
        });
        
        localStorage.setItem("notes", JSON.stringify(notesFromLS));
    }
}