'use client';
import React, { ChangeEvent, useRef } from 'react';
import './Input.css';
import { HiOutlineCloudUpload } from 'react-icons/hi';
interface IImageInput {
  onChange: (image: File) => void;
  title?: string;
}
function ImageInput({ onChange, title }: IImageInput) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    if (!input) {
      return;
    }
    const files = e.target.files;
    if (files?.length) {
      onChange(files[0]);
    }
  };

  const openInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div
      onClick={openInput}
      className="h-60 w-full border-black dark:border-white border-2 border-dotted flex flex-col justify-center items-center"
    >
      <button className="text-[10rem] dark:text-white">
        <HiOutlineCloudUpload />
      </button>
      {title && <p className="text-xl dark:text-white">{title}</p>}
      <input
        ref={inputRef}
        onChange={handelInputChange}
        type="file"
        className="hidden"
      />
    </div>
  );
}

export default ImageInput;
