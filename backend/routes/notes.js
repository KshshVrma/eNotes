const express = require("express");
const Note = require("../models/Note");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//route 1 getall the notes -get
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({
         user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
})

//route 2 post add new node /api/auth/addnote login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid name").isLength({ min: 3 }),
    body("description", "must be atleast 5 charcters").isLength({ min: 4 })
    

  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user:req.user.id
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
}
)
//route 3 update an existing note /api/
router.put(
  '/updatenote/:id',
  fetchuser,
  async (req, res) => {
const{title,description,tag}=req.body;
//create a newNote object
const newNote={};
if(title){
  newNote.title=title};
  if(description){
    newNote.description=description};
    if(tag){
      newNote.tag=tag};

      //find the note to be update and update it

let note=await Note.findById(req.params.id);
if(!note){
 return   res.status(404).send("Not Found")
}

if(note.user.toString()!==req.user.id){
  return res.status(401).send("Not allowed");
}
note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
res.json({note});
  })
module.exports = router;
