class UI{
    showMessage(message){
            const error_span=document.querySelector('.error-empty')
            error_span.innerHTML=message
    }
    addNote(note){
        const noteList_div=document.querySelector('#note-list')

        const removeBtn_a=document.createElement('a')
        removeBtn_a.classList='remove-note'
        removeBtn_a.textContent='X'
        const li=document.createElement('li')

        li.appendChild(document.createTextNode(note))

        li.appendChild(removeBtn_a)

        noteList_div.appendChild(li)

        alert("یادداشت با موفقیت ذخیره شد!");

    }
    removeNote(liTag){
        liTag.remove()
    }
    clearAllNotes(noteList_div){
        noteList_div.innerHTML=''
    }
    
}