
const Tour = require("../models/tourModel");

exports.getAlltours = async (req, res) => {
  try {
    const tour = await Tour.find();

    res.status(200).json({
      status: "success",
      results:tour.length,
      data: {
        tours: tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.gettour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tours: tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.createtour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.updatetour = async(req, res) => {
  try{
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    })
    res.status(200).json({
      status:'success',
      data:{
        tour
      }
    })

  }
  catch(err){
    console.log(err)
    res.status(400).json({
      status:'Fail',
      message:err
    })
  }
};

exports.deletetour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        message: "item deleted successfully",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
