

var jwt = require("jsonwebtoken");

  // protected route authorization

  exports.isLoggedIn = async(req,res,next)=>{
    try{
        
         const token = await req.headers.authorization.split(' ')[1];
         const decodedToken = await jwt.verify(token,process.env.JWT_SECRET);
         const userId = decodedToken.id;
         console.log(userId)
         if (req.body._id && req.body._id!== userId) {
             return res.status(401).json({
                 errors:'you are not authorised pls login'
             })
             } 
         else {
             next();
         }   
    }
    catch(err){
     res.status(401).json({
         error: 'you are not authorised please login again'
       });

    }
 }