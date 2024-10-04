import { z } from "zod";


const signUpValidation = z.object({
  name:z.object({
    first_name: z
    .string({ required_error: 'First name is required' }),
    last_name: z
    .string({ required_error: 'Last name is required' }),
  }),
  
  username: z.string({ required_error: 'Username is required' }),
  email: z
  .string({ required_error: 'Email is required' })
    .email('Enter a valid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 character'),
  confirm_password: z
    .string({ required_error: 'Confirm is required' })
    .min(6, 'Password must be at least 6 character'),
});

export const ZodValidations = {
  signUpValidation
};
