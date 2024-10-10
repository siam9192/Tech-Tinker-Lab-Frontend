'use client';

import React, { ReactNode } from 'react';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeFn: () => void;
}

const Modal = ({ isOpen, children, closeFn }: IModalProps) => {
  const closeModal = () => {
    closeFn();
  };
  return (
    <div
      onClick={closeModal}
      className={` bg-black/40 bg-opacity-0 h-screen w-screen fixed  inset-0 ${isOpen ? 'visible' : 'invisible'}  px-2 lg:px-0 flex justify-center items-center  z-50`}
    >
      {children}
    </div>
  );
};

export default Modal;
