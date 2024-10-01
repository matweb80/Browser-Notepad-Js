const ui=new UI()
const notes=new Notes()

const from=document.querySelector('#form')

const textArea=document.querySelector('#note')
const noteList_div=document.querySelector('#note-list')
const clearAllNoteBtn=document.querySelector('.clear-all-notes')
eventListeners()
function eventListeners(){
    from.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(textArea.value==''){
            ui.showMessage('یادداشت را وارد کنید')
        }else{
            ui.addNote(textArea.value)
            let notesFromLS=notes.getFromLs()
            notes.addNoteToLocalStorage(textArea.value,notesFromLS)
        }

    })
    textArea.addEventListener('click',()=>{
        const error_span=document.querySelector('.error-empty')
            if(error_span.innerHTML!=''){
                error_span.innerHTML=''
            }
    })
    noteList_div.addEventListener('click',(e)=>{
        if(e.target.classList.contains('remove-note')){
        ui.removeNote(e.target.parentElement)
        let notesFromLS=notes.getFromLs()
        notes.removeNoteFromLocalStorage(e.target.parentElement.textContent,notesFromLS)
    }
    })
    clearAllNoteBtn.addEventListener('click',()=>{
        ui.clearAllNotes(noteList_div)
        localStorage.clear()
    })
    document.addEventListener('DOMContentLoaded',()=>{
        let notesFromLS=notes.getFromLs()
        notes.localStorageOnload(notesFromLS)
    })
}
