import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string()
    .min(3, {
      message: "Email must contain at least 3 characters"
    })
    .max(255, {
      message: "Email must not contain more than 255 characters"
    }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string()
    .min(3, {
      message: "Message must contain at least 3 characters"
    })
    .max(255, {
      message: "Message must not contain more than 255 characters"
    }),
})