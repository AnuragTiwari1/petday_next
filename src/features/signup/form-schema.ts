import * as z from "zod";

export const SignupSchema = z.object({
  fname: z.string().min(1, "First Name is required."),
  lname: z.string().min(1, "Last Name is required."),
  email: z.string().email("Invalid email address."),
  mobile: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});
