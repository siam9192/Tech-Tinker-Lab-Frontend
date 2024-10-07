'use client';
import React, { useState } from 'react';

type TAlertModalProps = {
  heading?: string;
  message: string;
  children: React.ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void | any;
  onCancel?: () => void | any;
};
const AlertModal = ({
  heading,
  message,
  children,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
}: TAlertModalProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handelConfirm = () => {
    if (onConfirm) {
      onConfirm();
      setOpenModal(false);
    }
  };

  const handelCancel = () => {
    if (onCancel) {
      onCancel();
    }
    setOpenModal(false);
  };

  return (
    <div className="">
      <button onClick={() => setOpenModal(true)}>{children}</button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full md:w-[350px] lg:w-[500px] rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}
        >
          <img src="/images/alert.png" className="h-32 mx-auto" alt="" />
          <div className="mt-5 space-y-5">
            <h4 className="text-2xl font-semibold text-black dark:text-white">
              {heading || 'Are you sure ?'}
            </h4>
            <h6 className="text-center text-sm font-medium opacity-70 dark:text-white">
              {message}
            </h6>
            <div className="flex justify-between  ">
              <button
                onClick={handelConfirm}
                className="rounded-md bg-green-500 px-6 py-2 text-sm text-white"
              >
                {confirmButtonText || 'Yes Iam Sure'}
              </button>
              <button
                onClick={handelCancel}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                {cancelButtonText || '  Not Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
