import { z } from 'zod';

const signUpValidation = z.object({
  name: z.object({
    first_name: z.string({ required_error: 'First name is required' }),
    last_name: z.string({ required_error: 'Last name is required' }),
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

const signInValidation = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter a valid email address'),
  password: z.string({ required_error: 'Password is required' }),
});

const postFormValidation = z.object({
  title: z.string({ required_error: 'Title is Required' }),
});

const editProfileValidation = z.object({
  name: z.object({
    first_name: z.string({ required_error: 'First name is required' }),
    last_name: z.string({ required_error: 'Last name is required' }),
  }),
  about: z.string().optional(),
  profession: z.string().optional(),
});

export const createCommentValidation = z.object({
  comment: z.string({ required_error: 'Write Something..' }),
});


const changePasswordValidation = z.object({
  current_password: z
  .string({ required_error: 'Current Password is required' }),
  new_password: z
    .string({ required_error: 'New Password is required' })
    .min(6, 'Password must be at least 6 character'),
  confirm_password: z
    .string({ required_error: 'Confirm is required' })
    .min(6, 'Password must be at least 6 character'),
})

const commentUpdateValidation =  z.object({
  comment: z.string({required_error:'Comment is required'}).nonempty('Comment is required')
});

export const ZodValidations = {
  signUpValidation,
  signInValidation,
  postFormValidation,
  editProfileValidation,
  createCommentValidation,
  changePasswordValidation,
  commentUpdateValidation
};
