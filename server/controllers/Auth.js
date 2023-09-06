import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
export const signUp = async (req, res) => {
    try {
        let temp = req.body;
        let password = CryptoJS.AES.encrypt(temp.Password, process.env.SECRET_KEY).toString();
        temp.Password = password;
        const user = new User(temp);
        await user.save();
        res.cookie("token", jwt.sign({ id: user._id, Role: user.Role }, process.env.SIGN, { expiresIn: "5d" }),
            {
                httpOnly: true,
            });
            const newuser = {};
            newuser.Email = user.Email;
            newuser.Name = user.Name;
            newuser.Role = user.Role;
            newuser.ProfilePicture = user.ProfilePicture;
            newuser.Phone = user.Phone;
            newuser.Contributions = user.Contributions;
        res.status(200).json(newuser);
    } catch (err) {
        res.status(400).json("Internal Server Error");
    }
};

export const logIn = async (req, res) => {
    try {
        let user = await User.findOne({ Email: req.body.Email });
        if (!user) {
            res.status(401).json("Invalid Email or Password");
        } else {
            let bytes = CryptoJS.AES.decrypt(user.Password, process.env.SECRET_KEY);
            let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (originalPassword === req.body.Password) {
                res.cookie("token", jwt.sign({ id: user._id, Role: user.Role }, process.env.SIGN, { expiresIn: "5d" }), { httpOnly: true });
                const newuser = {};
                newuser.Email = user.Email;
                newuser.Name = user.Name;
                newuser.Role = user.Role;
                newuser.ProfilePicture = user.ProfilePicture;
                newuser.Phone = user.Phone;
                newuser.Contributions = user.Contributions;
                res.status(200).json(newuser);
            } else {
                res.status(400).json("Invalid Email or Password");
            }
        }
    } catch (err) {
        res.status(400).json("Internal Server Error");
    }
}

export const verifyUser = async (req,res) => {
    try {
        const token = req?.cookies?.token;
        if (!token) {
            res.status(400).json("Unauthorized");
        } else {
            const verified = jwt.verify(token, process.env.SIGN);
            const user = await User.findById(verified.id);
            if (!user) {
                res.status(400).json("Unauthorized");
            }
            const newuser = {};
            newuser.Email = user.Email;
            newuser.Name = user.Name;
            newuser.Role = user.Role;
            newuser.ProfilePicture = user.ProfilePicture;
            newuser.Phone = user.Phone;
            newuser.Contributions = user.Contributions;
            res.status(200).json(newuser);
        }
    } catch (err) {
        res.status(401).json("Unauthorized");
    }
}

