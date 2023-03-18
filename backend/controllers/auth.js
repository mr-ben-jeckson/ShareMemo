import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
            friends,
            occupation,

        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            location,
            friends,
            occupation,
            viewProfile: Math.floor(Math.random() * 1000),
            impression: Math.floor(Math.random() * 1000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User does not exist" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Credential does not match" });
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        user.password = undefined;
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}