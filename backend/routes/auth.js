const express =require('express');
const router =express.Router();
router.get('/',(req,res)=>{
    obj={
    'name':11
    }
 console.log(req.body);
 
    res.send("hello")
})
module.exports=router