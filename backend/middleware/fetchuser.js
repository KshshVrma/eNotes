// const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');
const JWT_SECRET="Kashishisagoodboy";
const fetchuser=(req,res,next)=>{
    //get the user from the jwt token and add id to request id
    const token=req.header('auth-token');
    if(!token){
        res.send('401').send({
            error:"please authenticate using a valid token"
        })
    }
    try {
        const data =jwt.verify(token,JWT_SECRET);
        req.user=data.user;
    
next();
    } catch (error) {
        res.send('401').send({
            error:"please authenticate using a valid token"
        })
    }
      
}
module.exports=fetchuser;
