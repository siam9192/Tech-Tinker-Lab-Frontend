'use client';
import Form from '@/components/form/Form';
import FormInputWithIcon from '@/components/form/FormInputWithIcon';
import { toggleLoadingLineComponent } from '@/redux/features/toggle.slice';
import { signInUser } from '@/services/authService';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { BiLock } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { useDispatch } from 'react-redux';

interface ISignUpForm {
  redirect_url:string|undefined
  }
  

function SignInForm({redirect_url}:ISignUpForm) {
  const [error, setError] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();
  

  const handelSubmit = async (values: FieldValues) => {
    // Reset error message
    setError('');
    openLoadingLine();
    
    try {
      await signInUser(values);
      if (redirect_url) {
        router.push(redirect_url);
      } else {
        router.push('/');
      }
      return true;
    } catch (error: any) {
      setError(error.message);
    } finally {
      closeLoadingLine();
    }
  };
  function openLoadingLine() {
    dispatch(toggleLoadingLineComponent(true));
  }

  function closeLoadingLine() {
    dispatch(toggleLoadingLineComponent(false));
  }

  return (
    <>
      <Form
        reset={true}
        onSubmit={handelSubmit}
        resolver={zodResolver(ZodValidations.signInValidation)}
        className="space-y-10"
      >
        <FormInputWithIcon icon={CiMail} name="email" placeholder="Email" />
        <FormInputWithIcon
          icon={BiLock}
          name="password"
          type="password"
          placeholder="Password"
        />
        <div className="mt-2">
          <button
            type="submit"
            className="w-full py-3 bg-button-color text-xl text-white rounded-lg"
          >
            Sign In Now
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </Form>
    </>
  );
}

export default SignInForm;
