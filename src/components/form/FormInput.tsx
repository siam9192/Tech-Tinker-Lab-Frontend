'use client';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

const FormInput = ({
  type,
  name,
  label,
  placeholder,
  className,
  required,
}: TInputProps) => {
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
            <input
              className={
                className ||
                'w-full mt-1 p-2 border-2  dark:text-slate-100 dark:bg-transparent border-gray-500 dark:border-slate-200 dark:border-opacity-35  font-medium'
              }
              {...field}
              value={field.value || ''}
              type={type || 'text'}
              placeholder={placeholder || ''}
              id={name}
              required={required}
            />
            {error && <p className=" text-red-600 mt-1">{error}</p>}
          </div>
        );
      }}
    />
  );
};

export default FormInput;
