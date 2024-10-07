'use client';
import Modal from '@/components/modal/Modal';
import PostAnalysis from '@/sections/dashboard/my-posts/PostAnalysis';
import React, { useState } from 'react'

function PostAnalysisModal({postId}:{postId:string}) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
       <button onClick={openModal} className=" bg-button-color px-4 py-2 rounded-full">
            Analysis
          </button>
  <Modal isOpen={isOpen} closeFn={closeModal}>
    
    <div onClick={(e)=>e.stopPropagation()} className=' w-full md:w-10/12 bg-white dark:bg-dark-mode  h-[90vh] overflow-y-auto rounded-md shadow  '>
   {   
    isOpen && <PostAnalysis postId={postId}/>
   }
    </div>

  </Modal>
    </>
  )
}

export default PostAnalysisModal