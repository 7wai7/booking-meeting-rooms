import { z } from "zod";

// Кастомний email-валідатор
const emailSchema = z
  .string()
  .min(1)
  .regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email format"
  );

// Базова схема для логіну
export const loginSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(24),
  password: z
    .string()
    .min(3)
    .max(24),
});

// Реєстраційна схема = логін + email
export const registerSchema = loginSchema.extend({
  email: emailSchema,
});