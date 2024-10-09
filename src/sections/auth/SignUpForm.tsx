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
import { PageProps } from '../../../.next/types/app/layout';

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

    // User  Registration data
    const userData = {
      personal_details: {
        name: values.name,
      },
      username: values.username,
      email: values.email,
      password: values.password,
    };

    openLoadingLine();
    try {
      const res = await signUpUser(userData);
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

  function closeSuccessPopup() {
    setIsOpenSuccessPop(false);
  }

  function openSuccessPopup() {
    setIsOpenSuccessPop(true);
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
        />
        <FormInputWithIcon
          icon={BiLock}
          name="confirm_password"
          placeholder="Confirm Password"
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
