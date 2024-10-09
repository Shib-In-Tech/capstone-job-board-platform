import jwt  from "jsonwebtoken";
import env from 'dotenv';
env.config();
export const generateToken = (id, role) => {
    try {
        var token = jwt.sign({ id: id, role: role || "user" }, process.env.JWT_SECRET_KEY);
        return token;
    } catch (error) {
        console.log(error);
    }
};