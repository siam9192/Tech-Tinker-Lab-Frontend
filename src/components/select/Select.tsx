'use client';
import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

type TSelectOption = {
  display: string | number;
  value: any;
};

interface TSelectProps {
  options: TSelectOption[];
  defaultValue?: string;
  onChange: (value: any) => void | any;
}

const Select = ({ options, onChange, defaultValue }: TSelectProps) => {
  const [isOpen, setOpenStatus] = useState(false);

  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      document.body.addEventListener('click', () => {
        setOpenStatus(false);
      });
      return () => {
        document.body.removeEventListener('click', () => {
          setOpenStatus(false);
        });
      };
    }
  }, [isOpen]);

  const selectOption = (index: number) => {
    setSelectedOption(index);
    onChange(options[index].value);
    setOpenStatus(false);
  };

  return (
    <div className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpenStatus(true);
        }}
        className=" p-2   border-2 border-opacity-70 border-primary-color rounded-md flex items-center justify-between hover:cursor-pointer select-none min-w-52"
      >
        {/* Selected options or default value */}
        <div className="dark:text-white">
          {defaultValue || options[selectedOption]?.display || ''}
        </div>
        <span
          className={`text-xl dark:text-white ${isOpen ? 'rotate-180' : 'rotate-0'} duration-200`}
        >
          <RiArrowDropDownLine />
        </span>

        {/* Options */}
        <div
          className={`absolute w-full min-w-52 left-0  mt-72  h-52 overflow-y-auto customize-scroll-bar bg-white dark:bg-dark-light dark:text-white shadow-lg rounded-lg z-20 p-3 space-y-3 ${isOpen ? 'translate-y-0 visible opacity-100' : 'translate-y-5 scale-75 invisible opacity-0'} duration-200  `}
        >
          {options.map((option, index) => (
            <div
              onClick={(e) => {
                e.stopPropagation();
                selectOption(index);
              }}
              key={option.display}
              className="block font-medium hover:bg-gray-100 dark:hover:bg-dark-mode py-1 select-none"
            >
              {option.display}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
