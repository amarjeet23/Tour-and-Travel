
const User = require("../models/userModel")

exports.getAllusers = async(req,res)=>{
   try{
       const users = await User.find().sort({name:1})
       res.status(200).json({
           status:'success',
           results:users.length,
           data:{
               users
           }
       })

   }
   catch(err){
       res.status(400).json({
           status:'Fail from alluser',
           errors:err.errors
       })
   }
}

exports.getuser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:{
                user
            }
        })
 
    }
    catch(err){
        res.status(400).json({
            status:'Fail',
            errors:err.errors
        })
    }
}
exports.createUser = (req,res)=>{
    res.status(500).json({
        status:'success',
        message:'this route is not yet implemented'
    })
}

exports.updateUser = (req,res)=>{
    res.status(500).json({
        status:'success',
        message:'this route is not yet implemented'
    })
}
exports.deleteUser = (req,res)=>{
    res.status(500).json({
        status:'success',
        message:'this route is not yet implemented'
    })
}