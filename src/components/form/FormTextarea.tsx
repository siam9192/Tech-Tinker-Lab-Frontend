'use client';
import { Controller, useFormContext } from 'react-hook-form';

type TFormTextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
};

const FormTextArea = ({
  name,
  label,
  placeholder,
  className,
}: TFormTextAreaProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message?.toString();

  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div>
            {label && (
              <label
                className=" block dark:text-slate-100 font-medium"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <textarea
              className={
                className ||
                'w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium'
              }
              {...field}
              value={field.value || ''}
              placeholder={placeholder || ''}
              id={name}
            />
            {error && <p className=" text-red-600 mt-1">{error}</p>}
          </div>
        );
      }}
    />
  );
};

export default FormTextArea;
