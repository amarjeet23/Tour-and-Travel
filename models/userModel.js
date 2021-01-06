const mongoose  = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        validate:[validator.isEmail,'please provide a valid email']

    },
    password:{
        type:String,
        required:[true,'password is required'],
        select:false
    },
    confirmPassword:{
        type:String,
        validate:{
            validator:function(el){
                return el=== this.password
            },
            message:'Password are not same'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


// for hashing user password
userSchema.pre('save',async function(next){
    // this will only run if password is modified
    if(!this.isModified('password')){
        return next()
    }
    // encrypting password at a cos of 12
    this.password = await bcrypt.hash(this.password,12)
    // delete confirm password field 
    this.confirmPassword = undefined;
    next()

})

userSchema.methods.matchPassword = async function(candidatepassword , userpassword){
    return await bcrypt.compare(candidatepassword,userpassword)
}

const User = mongoose.model('User',userSchema)
module.exports = User