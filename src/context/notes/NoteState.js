import React from "react";
import eContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];


  const [notes, setNotes] = useState(notesInitial);
  //get all notes
  const getNotes = async () => {
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      }

    
    });
    const json =await response.json()
    console.log(json)
    setNotes(json)

    //
    
  };

  //delete a note



  // [
  //     {
  //       "_id": "631f0e690d2cef04e9276aea",
  //       "user": "631eacb9e55920b1d55eb59d",
  //       "title": "finally",
  //       "description": "please become the hardest man",
  //       "tag": "oofff",
  //       "date": "2022-09-12T10:41:38.807Z",
  //       "__v": 0
  //     },
  //     {
  //         "_id": "631f0e690d2cef04e9276aeb",
  //         "user": "631eacb9e55920b1d55eb59d",
  //         "title": "hhaa",
  //         "description": "please sleep today",
  //         "tag": "oofff",
  //         "date": "2022-09-12T10:41:38.807Z",
  //         "__v": 0
  //       },
  //       {
  //         "_id": "631f0e690d2cef04e9276aed",
  //         "user": "631eacb9e55920b1d55eb59d",
  //         "title": "urgent",
  //         "description": " eat today",
  //         "tag": "oofff",
  //         "date": "2022-09-12T10:41:38.807Z",
  //         "__v": 0
  //       }
  //   ]


  //add a note
  const addNote = async (title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag })
    });console.log(response);
// const note=response.json();

// setNotes(notes.concat(note));
     console.log("adding a new note");
     const note = {
       _id: "631f0e690d2cef04e9276aed",
       user: "631eacb9e55920b1d55eb59d",
       title: title,
       description: description,
       tag: tag,
       date: "2022-09-12T10:41:38.807Z",
       __v: 0,
     };
     setNotes(notes.concat(note));
   };

  //delete a note
  const deleteNote = async(id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      }

     
    });
    const json = response.json();
    console.log(json);

    //
    console.log("deleted");
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
         localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json =await  response.json();
    
let newNotes=JSON.parse(JSON.stringify(notes))
    //lodic to edit
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  };

  return (
    <eContext.Provider value={{ notes, addNote, getNotes,deleteNote, editNote }}>
      {props.children}
    </eContext.Provider>
  );
};

export default NoteState;
