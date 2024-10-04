'use client';
import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  reset?: boolean;
  id?:string,
  className?: string;
  children: React.ReactNode;
} & TFormConfig;

const Form = ({
  onSubmit,
  reset,
  children,
  id,
  className,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  if (resolver) {
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    const status = onSubmit(data);
    if (status === true && reset) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <form id={id} className={className} onSubmit={methods.handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
