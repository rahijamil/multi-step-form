import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export const addressDetailsSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z
    .string()
    .min(5, "Zip code must be at least 5 digits")
    .regex(/^\d+$/, "Zip code must contain only numbers"),
});

const accountSetupBaseSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
});

export const accountSetupSchema = accountSetupBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }
);

// Combine all the schemas for the complete form
export const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...addressDetailsSchema.shape,
  ...accountSetupBaseSchema.shape,
});

export type FormData = z.infer<typeof formSchema>;
export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type AddressDetailsData = z.infer<typeof addressDetailsSchema>;
export type AccountSetupData = z.infer<typeof accountSetupSchema>;
