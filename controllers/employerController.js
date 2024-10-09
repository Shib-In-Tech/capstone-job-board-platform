import bcrypt from 'bcrypt';
import {generateToken} from '../utils/token.js';
import {employerData} from '../models/employerModel.js';
export const employerSignup = async (req, res, next) => {
    try {
        const { name, email, password, mobile, profilePic } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields required" });
        }
        const isMentorExist = await employerData.findOne({ email });

        if (isMentorExist) {
            return res.status(400).json({ message: "user already exist" });
        }

        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newEmployer = new employerData({ name, email, password: hashedPassword, mobile, profilePic });
        await newEmployer.save();

        const token = generateToken( newEmployer._id,'employer');

        res.cookie("token", token);

        res.json({ success: true, message: "Employer account created successfully" });
    } catch (error) {
        console.log(error);
    res.status(error.statusCode || 500).json(error.message || 'Internal server error')        
    }
};

export const employerLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const isEmployerExist = await employerData.findOne({ email });
        if (!isEmployerExist) {
            return res.status(404).json({ success: false, message: "Employer does not exist" });
        }

        const passwordMatch = bcrypt.compareSync(password, isEmployerExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "user not autherized" });
        }

        const token = generateToken(isEmployerExist._id,'employer');

        res.cookie("token", token);
        res.json({ success: true, message: "Employer login successfull" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};


export const employerProfile = async (req, res, next) => {
    try {

        const {user}=req

        const userData = await employerData.findById(user.id).select('-password')

        res.json({ success: true, message: "user profile fetched", userData });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};
export const employerLogout = async (req, res, next) => {
    try {

        res.clearCookie('token')
        res.json({ success: true, message: "user logged out" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};
export const checkemployer = async (req, res, next) => {
    try {

        res.json({ success: true, message: "employer autherized" });
    } catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json(error.message || 'Internal server error')
    }
};