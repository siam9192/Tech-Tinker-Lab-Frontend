import AlertModal from '@/components/modal/AlertModal';
import { deleteComment } from '@/services/commentService';
import { errorToast, successToast } from '@/utils/toast';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'sonner';

function ManageComment({commentId}:{commentId:string}) {

  const queryClient = useQueryClient()

  const handelDelete = async()=>{
  const toastId =   toast.loading('Comment Deleting...')
   try {
   
    await deleteComment(commentId)
    successToast('Comment deleted')
    queryClient.invalidateQueries(['POST-COMMENTS'])
   } catch (error:any) {
     errorToast(error.message)
   }
   toast.dismiss(toastId)
  }
  return (
    <div className="flex items-center  gap-2">
      <button className=" px-4 py-2 text-white bg-indigo-600 rounded-full">
        Edit
      </button>
      <AlertModal heading='Are you want to delete it?' message='It can not be undone' onConfirm={handelDelete}>
      <button className=" px-4 py-2 text-white bg-pink-700 rounded-full">
        Delete
      </button>
      </AlertModal>
    </div>
  );
}

export default ManageComment;
