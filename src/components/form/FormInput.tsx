'use client';
import { ChangeEvent } from 'react';
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

  const handle_key_press = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key press
    }
  };

  return (
    <Controller
      name={name}
      render={({ field }) => {
        return (
          <div>
            {label && (
              <label
                className="  block text-start dark:text-slate-100 font-medium text-[1.2rem]"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <input
              className={
                className ||
                'w-full mt-1 px-2 py-3  bg-gray-100  dark:text-slate-100 dark:bg-dark-light dark:border-opacity-35  font-medium outline-primary-color outline-2'
              }
              {...field}
              value={field.value || ''}
              type={type || 'text'}
              placeholder={placeholder || ''}
              id={name}
              required={required}
              onKeyDown={handle_key_press}
            />
            {error && <p className=" text-red-600 mt-1">{error}</p>}
          </div>
        );
      }}
    />
  );
};

export default FormInput;
