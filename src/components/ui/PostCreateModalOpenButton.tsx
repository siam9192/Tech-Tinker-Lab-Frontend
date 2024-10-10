'use client';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import PostCreateForm from './PostCreateForm';
import { useRouter } from 'next/navigation';

interface Props {
  isUser:boolean
}

function PostCreateModalOpenButton({isUser}:Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
  if(isUser){
    setIsOpen(true);
  }
  else{
    router.push('/auth/sign-in')
  }
  };

  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col justify-center items-center hover:cursor-pointer"
      >
        <div className="text-xl  w-fit p-3 bg-primary-color text-white rounded-full">
          <FaPlus />
        </div>
        <h2 className="font-medium text-center text-primary-color dark:text-white">
          Create a Post
        </h2>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`bg-modal inset-0 fixed  z-[1000] flex justify-center items-center p-2 lg:p-5 ${isOpen ? '' : 'hidden'}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-dark-mode w-full md:w-10/12 lg:w-1/2 p-5 md:p-10  rounded-lg h-full overflow-auto"
        >
          <h1 className="text-3xl font-medium mb-5 text-center dark:text-white ">
            Create Your Post
          </h1>
          <PostCreateForm successFn={closeModal} />
        </div>
      </div>
    </>
  );
}

export default PostCreateModalOpenButton;
