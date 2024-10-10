import { IComment } from '@/types/comment.type'
import React, { useState } from 'react'
import Modal from '../modal/Modal'
import FormTextArea from '../form/FormTextarea'
import Form from '../form/Form'
import { updateComment } from '@/services/commentService'
import { errorToast, successToast } from '@/utils/toast'
import { useQueryClient } from '@tanstack/react-query'
import { FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodValidations } from '@/utils/zodValidationSchame'

function CommentEditButton({comment}:{comment:IComment}) {
  const [isOpen,setIsOpen] = useState(false)
  const [isPending,setIsPending] = useState(false)
  const queryClient = useQueryClient()
  const close = ()=>{
    setIsOpen(false)
  }

  const handelUpdateComment = async(values:FieldValues)=>{
       setIsPending(true)
       try {
       const res =  await updateComment({commentId:comment._id,comment:values.comment})
         successToast('comment successfully edited')
         queryClient.invalidateQueries(['POST-COMMENTS'])
         close()
       } catch (error:any) {
         errorToast(error.message)
       }
       setIsPending(false)
  }

  return (
    <>
      <button onClick={()=>setIsOpen(true)} className=" px-4 py-2 text-white bg-indigo-600 rounded-full">
        Edit
      </button>
     <Modal isOpen={isOpen} closeFn={close}>
       <div onClick={(e)=>e.stopPropagation()} className='w-full md:w-1/2 bg-white  dark:bg-dark-light min-h-52 shadow p-5 md:p-10'>
       <h1 className='text-3xl font-medium'>Edit Comment</h1>
     <Form onSubmit={handelUpdateComment} resolver={zodResolver(ZodValidations.commentUpdateValidation)} defaultValues={{comment:comment.comment}}>
     <FormTextArea name='comment'/>
    <div className='text-end'>
   {
    !isPending ?  <button className='px-6 py-3 bg-primary-color text-white rounded-full'>Edit</button>
    :
    <span className="loading loading-dots loading-md dark:text-white"></span>
   }
    </div>
     </Form>
       </div>
     </Modal>
    </> 
  )
}

export default CommentEditButton