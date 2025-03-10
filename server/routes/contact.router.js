import express from "express";
import { contactForm } from "../controllers/contact.controller.js";
import { contactSchema } from "../validators/contact.validator.js";
import validate from "../middlewares/validate.middleware.js";


const router = express.Router();


router.route("/contact").post(validate(contactSchema),contactForm);

export default router;