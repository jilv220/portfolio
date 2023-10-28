import { z } from "zod";

const MAX_LENGTH = 1024;

export const inquiryFormSchema = z.object({
  name: z.string().nonempty({
    message: "name is required",
  }),
  email: z
    .string()
    .nonempty({
      message: "email is required",
    })
    .email({
      message: "must be a valid email",
    }),
  message: z
    .string()
    .max(MAX_LENGTH, {
      message: `message cannot exceed ${MAX_LENGTH} characters`,
    })
    .nonempty({
      message: "message is required",
    }),
});

export type Inquiry = z.infer<typeof inquiryFormSchema>;
