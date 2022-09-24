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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxZWFjYjllNTU5MjBiMWQ1NWViNTlkIn0sImlhdCI6MTY2Mjk1ODc1OX0.X3WzQQkBBxAsi6LhKJ2hREA_dBm_Bb8GyTbNLIieF0I",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxZWFjYjllNTU5MjBiMWQ1NWViNTlkIn0sImlhdCI6MTY2Mjk1ODc1OX0.X3WzQQkBBxAsi6LhKJ2hREA_dBm_Bb8GyTbNLIieF0I",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    //
    console.log("adding a new note");
    const note = {
      _id: "631f0e690d2cef04e9276aec",
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
  const deleteNote = (id) => {
    console.log("deleted");
    const newNotes = notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxZWFjYjllNTU5MjBiMWQ1NWViNTlkIn0sImlhdCI6MTY2Mjk1ODc1OX0.X3WzQQkBBxAsi6LhKJ2hREA_dBm_Bb8GyTbNLIieF0I",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //lodic to edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <eContext.Provider value={{ notes, addNote, getNotes,deleteNote, editNote }}>
      {props.children}
    </eContext.Provider>
  );
};

export default NoteState;
