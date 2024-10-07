'use client';
import PostEditForm from '@/components/ui/PostEditForm';
import { successToast } from '@/utils/toast';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface IEditPostProps {
  postId: string;
}

function EditPost({ postId }: IEditPostProps) {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const closeModal = () => {
    setIsOpen(false);
    queryClient.invalidateQueries(['MY-POSTS']);
    successToast('Post Updated successfully');
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={openModal}
        className=" bg-info-color px-4 py-2 rounded-full"
      >
        Edit
      </button>
      <div
        onClick={() => setIsOpen(false)}
        className={`bg-modal inset-0 fixed  z-[1000] flex justify-center items-center p-2 lg:p-5 ${isOpen ? '' : 'hidden'}`}
      >
        {isOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-dark-mode w-full lg:w-1/2 p-5 md:p-10  rounded-lg h-full overflow-auto"
          >
            <h1 className="text-3xl font-medium mb-5 text-center dark:text-white ">
              Edit Your Post
            </h1>
            <PostEditForm postId={postId} successFn={closeModal} />
          </div>
        )}
      </div>
    </>
  );
}

export default EditPost;
