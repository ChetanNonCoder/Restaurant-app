import { z } from "zod";

export const userSignUpSchema = z.object({
  fullname: z.string().min(1, "Full name required"),
  email: z.string().email("Invalid Email "),
  contact: z.string().min(10, "10 digit number requred"),
  password: z.string().min(8, "Password must be in 8 charecter"),
});

export type SignupInputState = z.infer<typeof userSignUpSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid Email "),
  password: z.string().min(8, "Password must be in 8 charecter"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
