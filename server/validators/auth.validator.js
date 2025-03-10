import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(11, { message: "Phone must be at least 11 characters" }),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters" }),
});