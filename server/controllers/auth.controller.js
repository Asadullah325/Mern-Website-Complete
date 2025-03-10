import User from "../models/user.model.js";

export const register = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            phone
        });

        res.status(201).json({
            message: "User created successfully",
            token: user.generateJWT(),
            userId: user._id
        });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
