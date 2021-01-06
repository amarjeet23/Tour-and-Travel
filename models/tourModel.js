const mongoose = require('mongoose')

const tourSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A tour must have name'],
        trim:true,
        unique:true
    },
    durations:{
        type:Number,
        required:[true,'A tour should have duration'],
    },
    maxGroupSize:{
        type:String,
        required:[true,'A tour must have a group']
    },
    difficulty:{
        type:String,
        required:[true,'A tour should have a difficulty']
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,'A tour must have a price']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        trim:true,
        required:[true,'A tour should have summary']
    },
    description:{
        type:String,
        required:true
    },
    imageCover:{
        type:String,
        // required:[true,'A tour should have a cover image']
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now().toISOString
    },
    startDates:[Date]


})

const Tour = mongoose.model('Tour',tourSchema)
module.exports = Tour;