import React from 'react'
import { useState,useContext } from 'react';
import eContext from '../context/notes/NoteContext';
export default function AddNote(props) {
    const context = useContext(eContext);
    const{addNote}=context;
    const [note, setNote] = useState({title :"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title :"",description:"",tag:""})
props.showAlert("note added","success")
    }


    const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
    }
  return (

    <div>   <div className="container my-3">
    <h2>Add a Note</h2>
    <form>
  <div className="mb-3">
    <label for="title" className="form-label"><b>title</b> (min 3 characterr)</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}value={note.title}/>

  </div>
  <div className="mb-3">
    <label for="description" className="form-label"><b>Description</b>(min 3 character)</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description}/>
  </div>
  <div className="mb-3">
    <label for="tag" className="form-label"><b>Tag</b></label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}value={note.tag}/>
  </div>

  <button disabled={note.title.length<3||note.description.length<3}type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>

    </div></div>
  )
}
