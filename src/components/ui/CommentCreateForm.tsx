import React, { useState } from 'react';
import Form from '../form/Form';
import { FieldValues } from 'react-hook-form';
import FormTextArea from '../form/FormTextarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { postComment } from '@/services/commentService';
import { useQueryClient } from '@tanstack/react-query';
import { errorToast, successToast } from '@/utils/toast';
import { IUser } from '@/types/user.type';
import { usePathname, useRouter } from 'next/navigation';

interface ICreateCommentFormProps {
  postId: string;
  currentUser: IUser | null;
}

function CreateCommentForm({ postId, currentUser }: ICreateCommentFormProps) {
  const [isPosting, setIsPosting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const handelSubmit = async (values: FieldValues) => {
    if (!currentUser) {
      return router.push(`/auth/sign-in?redirect-url=${pathname}`);
    }

    const data = {
      comment: values.comment,
      postId,
    };
    setIsPosting(true);
    try {
      const res = await postComment(data);
   
      queryClient.invalidateQueries(['POST-COMMENTS']);
      successToast('Comment Posted successfully');
    } catch (error: any) {
      errorToast(error.message);
    } finally {
      setIsPosting(false);
      return true;
    }
  };
  return (
    <div>
      <h1 className="text-xl font-medium mb-2">Add Comment</h1>
      <Form
        onSubmit={handelSubmit}
        reset={true}
        resolver={zodResolver(ZodValidations.createCommentValidation)}
        className="space-y-4"
      >
        <FormTextArea
          name="comment"
          placeholder="Write something about this post"
        />
        <div className="flex ju-e">
          {isPosting ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl">Posting</span>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            <button
              type="submit"
              className="px-8 py-3  bg-button-color text-white rounded-full"
            >
              POST
            </button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default CreateCommentForm;
