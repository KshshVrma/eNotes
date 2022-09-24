import React from 'react'
import { useState,useContext } from 'react';
import eContext from '../context/notes/NoteContext';
export default function AddNote() {
    const context = useContext(eContext);
    const{addNote}=context;
    const [note, setNote] = useState({title :"",description:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
addNote(note.title,note.description,note.tag);
    }


    const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
    }
  return (

    <div>   <div className="container my-3">
    <h2>Add a Note</h2>
    <form>
  <div className="mb-3">
    <label for="title" className="form-label">title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>

  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label for="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>

    </div></div>
  )
}
