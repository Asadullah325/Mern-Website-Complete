import { z } from "zod";


export const contactSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .email({ message: "Invalid email" })
        .trim()
        .min(3, { message: "Email must be at least 3 characters" }),
    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(3, { message: "Message must be at least 3 characters" }),
});