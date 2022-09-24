import React, { useEffect } from 'react'
import { useContext } from 'react';
import Noteitem from './Noteitem';
import eContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
export const Notes = () => {
      const context = useContext(eContext);
  const{notes,getNotes}=context;
useEffect(() => {
  getNotes()


}, [])

  return (
    <>
    <AddNote></AddNote>
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <Noteitem key={note._id}note={note}></Noteitem>
    })}
    </div>
    </>
  )
}
export default Notes