'use client';
import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { standardPackage } from '@/data/Package.data';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { subscribePackage } from '@/services/subscriptionService';
import { toggleSubscriptionPurchaseModal } from '@/redux/features/toggle.slice';
import { usePathname } from 'next/navigation';
import { errorToast } from '@/utils/toast';

function SubscriptionPurchasePopup() {
  const isOpen = useAppSelector(
    (state) => state.toggle.isSubscriptionPurchaseModalOpen,
  );
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  let redirect_url = `https://tech-tinker-lab-fo.vercel.app/${pathname}`;

  const packageServices = standardPackage.services;

  const handelPurchase = async () => {
    const subscriptionData = {
      package_id: '66faf58d5908139fae191761',
      redirect_url,
    };

    try {
      const data = await subscribePackage(subscriptionData);
       window.location.href = data.checkout_url;
    } catch (error:any) {
     errorToast(error.message)
    }
  };
  const closeModal = () => {
    dispatch(toggleSubscriptionPurchaseModal(false));
  };

  return (
    <Modal closeFn={closeModal} isOpen={isOpen}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white dark:bg-dark-mode w-full md:w-1/2 lg:w-1/4 p-10 rounded-lg"
      >
        <div className="space-y-2">
          <h1 className=" text-4xl md:text-5xl font-bold text-info-color text-center">
            {standardPackage.name}
          </h1>
          <h1 className="text-3xl md:text-4xl text-primary-color font-bold text-center">
            ${standardPackage.price}{' '}
            <span className="text-black dark:text-white font-medium text-2xl">
              /month
            </span>
          </h1>
        </div>
        <ul className="mt-5 space-y-2">
          {packageServices.map((service) => (
            <li className="flex items-center gap-2">
              <span className=" text-2xl text-green-500">
                <IoCheckmarkDoneSharp />
              </span>
              <h5 className=" text-xl md:text-2xl font-medium dark:text-white">
                {service.service_name}
              </h5>
            </li>
          ))}
        </ul>
        <div className="text-center mt-5">
          <button
            onClick={handelPurchase}
            className="w-1/2 py-3 bg-button-color hover:bg-primary-color duration-200 text-white rounded-lg text-xl"
          >
            Purchase
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SubscriptionPurchasePopup;
