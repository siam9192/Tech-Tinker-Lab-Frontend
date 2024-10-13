'use client';
import Form from '@/components/form/Form';
import FormInputWithIcon from '@/components/form/FormInputWithIcon';
import SuccessPopup from '@/components/popup/SuccessPopup';

import { toggleLoadingLineComponent } from '@/redux/features/toggle.slice';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { BiLock } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { LuUser2 } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { signUpUser } from '@/services/authService';
import { getActivityInfo } from '@/utils/func';


interface ISignUpForm {
  redirect_url: string | undefined;
}

function SignUpForm({ redirect_url }: ISignUpForm) {
  const [error, setError] = useState('');
  const [isOpenSuccessPopup, setIsOpenSuccessPop] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handelSubmit = async (values: FieldValues) => {
    // Reset error message
    setError('');

    // Checking is password match with confirm_password
    if (values.password !== values.confirm_password) {
      return setError('Both password dose not match');
    }
    openLoadingLine();
    const activity =  await getActivityInfo()
   
    // User  Registration data
    const userData = {
      personal_details: {
        name: values.name,
      },
      username: values.username,
      email: values.email,
      password: values.password,
      activity
    };

   
    try {
      const res = await signUpUser(userData);
     if(!res.success){
      throw new Error(res.message)
     }
      if (redirect_url) {
        window.location.pathname = redirect_url
        } else {
          window.location.pathname = '/';
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

  function closeSuccessPopup() {
    setIsOpenSuccessPop(false);
  }

  return (
    <>
      <Form
        reset={true}
        onSubmit={handelSubmit}
        resolver={zodResolver(ZodValidations.signUpValidation)}
        className="space-y-10"
      >
        <div className="grid md:grid-cols-2 gap-3">
          <FormInputWithIcon
            icon={LuUser2}
            name="name.first_name"
            placeholder="First Name"
          />
          <FormInputWithIcon
            icon={LuUser2}
            name="name.last_name"
            placeholder="Last Name"
          />
        </div>
        <FormInputWithIcon
          icon={LuUser2}
          name="username"
          placeholder="Username"
        />
        <FormInputWithIcon icon={CiMail} name="email" placeholder="Email" />
        <FormInputWithIcon
          icon={BiLock}
          name="password"
          placeholder="Password"
          type='password'
        />
        <FormInputWithIcon
          icon={BiLock}
          name="confirm_password"
          placeholder="Confirm Password"
          type='password'
        />
        <div className="mt-2">
          <button
            type="submit"
            className="w-full py-3 bg-button-color text-xl text-white rounded-lg"
          >
            Sign Up Now
          </button>
          {error && <p className="text-red-500  mt-3">{error}</p>}
        </div>
      </Form>
      <SuccessPopup isOpen={isOpenSuccessPopup} closeFn={closeSuccessPopup} />
    </>
  );
}

export default SignUpForm;
