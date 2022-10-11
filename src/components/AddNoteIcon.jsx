import React,{useState} from 'react'
import AddNoteForm from './AddNoteForm';

const AddNote = () => {
  const [toggle, settoggle] = useState('');
 const noteform = ()=>{
   if(toggle === ''){
    settoggle('toggle');
    document.body.style.background = 'rgba(0,0,0,0.4)';
   }else{
    settoggle('');
    document.body.style.background = '';
   }
 }
  return (
    <>
    <AddNoteForm active={toggle}/>
    <div onClick={noteform} className={`position-fixed text-center d-flex align-items-center justify-content-center add-note ${toggle}`}>
       <i className="fa-solid fa-plus fs-1 text-white"></i>
    </div>
    </>
  )
}

export default AddNote