const express =require('express');
const User = require('../models/User');
const router =express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');


//create a user using post .api/auth/createuser
//doesnt require auth 
const JWT_SECRET="Kashishisagoodboy";
//Jwt ensures secure authentication between client and server
router.post('/createuser',[
    body('name','enter a valid name').isLength({ min: 3 }),
    body('email','enter a valild email').isEmail(),
    body('password','shorter than required').isLength({ min: 5 })
],async(req,res)=>{
  //if there are errors return bad request and the 
  let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try{
  let user=  await User.findOne({
    email:req.body.email
  });
  if(user){
    return res.status(400).json({success,error:"sorry a user already exist here"})
  }
  //check whether the user with this email already exist
  const salt = await bcrypt.genSalt(10);
 let secPass= await bcrypt.hash(req.body.password,salt);

  user =await User.create({
        name: req.body.name,
        password:secPass,
        email: req.body.email,
        // password: req.body.password
        // password: req.body.password
      })
    //   then(user => res.json(user)).catch(err=>{
    //     console.log(err)
    // res.json({
    //     error:'please enter non dupes'
    // })});
    const data={
      user:{
        id:user.id
      }
    }
   const authtoken= jwt.sign(data,JWT_SECRET);
  
  // res.json(user);
  success=true;
  res.json({success,authtoken})
    }catch(error){
      console.error(error.message);
      res.status(500).send("some error occured");
    }
   
})


//authenticate a user using /spi/auth/login 2
router.post('/login',[
  
  body('email','enter a valild email').isEmail(),
  body('password','Password cannot be blank').exists(),
  
],async(req,res)=>{

 let  success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
const{email,password}=req.body;
try {
  let user=  await User.findOne({email});
  if(!user){
    success=false;
    return res.status(400).json({error:"sorry wrong credentials"});}

    const passwordCompare= await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      success=false;
      return res.status(400).json({success,error:"sorry wrong credentials"})
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authtoken= jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authtoken})
  
} catch (error) {
  console.error(error.message);
      res.status(500).send("internal server  error occured");
}


})

//route 3=> get user detail /spi/auth/getuser login required
router.post('/getuser',fetchuser,[
  
],async(req,res)=>{
try {
  
userId=req.user.id;
  const user=await User.findById(userId).select("-password")
  res.send(user);
} catch (error) {
  console.error(error.message);
  res.status(500).send("internal server  error occured");
}}
)

module.exports=router