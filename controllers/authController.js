var jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// var jwt = require('express-jwt');
// JWT token
    const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    };

// user signup
    exports.signup = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: "user already registered" });
        }
        const newUser = await User.create(req.body);
        const token = signToken(newUser._id);

        res.status(201).json({
        status: "success",
        token,
        data: {
            newUser,
                },
            });
         } 
    catch (err) {
        res.status(400).json({
        status: "Fail",
        errors: err.errors,
        });
    }
    };

// user login
    exports.login = async (req, res) => {
    try {
        // check if email and password exist
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
            status: "Fail",
            message: "please provide email and password",
            });
        }

        // check if user is registered or not
        const registered = await User.findOne({ email });
        if (!registered) {
            return res.status(400).json({
                message: "user is not registered with this email",
            });
        }
        // check if user exist and password is correct
        const user = await User.findOne({ email }).select("+password");
        if (!user || !(await user.matchPassword(password, user.password))) {
            return res.status(401).json({
                status: "Fail",
                message: "Email and password dont match",
            });
        }

        // send the token to the client
        const token = signToken(user._id);
        res.status(200).json({
        status: "success",
        token,
        message: {
            user,
        },
        });
    } 
    catch (err) {
        res.status(400).json({
        status: "fail",
        errors: err,
            });
        }
    };



  
