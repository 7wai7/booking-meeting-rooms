import { Router } from "express";
import { authController } from "./auth.controller.js";
import { validateZodSchema } from "../middlewares/validateZodSchema.middleware.js";
import { loginSchema, registerSchema } from "./schemas.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateZodSchema(registerSchema),
  authController.register
);

authRouter.post(
    "/login",
    validateZodSchema(loginSchema),
    authController.login
);

export default authRouter;
