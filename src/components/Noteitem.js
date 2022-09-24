import React from 'react'
import eContext from '../context/notes/NoteContext';
import { useContext } from 'react';


const Noteitem = (props) => {
  const context = useContext(eContext);
   const {deleteNote}=context;
   const {note}=props;
  return (
    <div className="col-md-3">

    <div className="card my-3" >
  <div className="card-body">
 
    <div className="d-flex my-2 align-items-center">
    <h5 className="card-title">{note.title}</h5>
    
    <i className="fa-solid fa-trash  mx-3 "onClick={()=>{
      deleteNote(note._id)
    }}></i>
    <i className="fa-solid fa-pen-nib"></i>
    </div>
  
    <p className="card-text">{note.description}</p>

  </div>
</div>
    </div>
  )
}

export default Noteitem