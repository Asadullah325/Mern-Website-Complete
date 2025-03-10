import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10,15}$/, "Invalid phone number format"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        isAdmin: this.isAdmin
    }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const User = mongoose.model("User", userSchema);

export default User;
