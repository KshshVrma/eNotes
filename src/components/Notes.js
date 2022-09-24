import React, { useEffect, useRef,useState } from "react";
import { useContext } from "react";
import Noteitem from "./Noteitem";
import eContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
const Notes = (props) => {
  const context = useContext(eContext);
  const { notes, getNotes,editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
    // with useRef you can refer any part
  }, []);
// 

// const{addNote}=context;
const [note, setNote] = useState({ id:"",etitle :"",edescription:"",etag:""})
// 


  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})


  };

  const handleClick=(e)=>{
    e.preventDefault();
// addNote(note.title,note.description,note.tag);
editNote(note.id,note.etitle,note.edescription,note.etag)
refClose.current.click();
props.showAlert("note updated","success")


}


const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})

}
  return (
    <>
      <AddNote showAlert={props.showAlert}></AddNote>

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="modal-dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">




              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">
                    title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange} 
                  />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange} 

                  />
                </div>

                
              </form>




            </div>
            <div className="modal-footer">
              <button ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" row my-3">
        <h2>Your Notes</h2>
        {/* <div className="container">
        {notes.length()===0 && 'no notes to display'}
        </div> */}
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote} showAlert={props.showAlert}
              note={note}
            ></Noteitem>
          );
        })}
      </div>
    </>
  );
};
export default Notes;
