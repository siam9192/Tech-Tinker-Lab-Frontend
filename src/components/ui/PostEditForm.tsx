'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import TextEditor from '../text-editor/TextEditor';
import ImageInput from '../input/ImageInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { FieldValues, set } from 'react-hook-form';
import { updatePost } from '@/services/postService';
import axios from 'axios';
import { useGetCategoriesQuery } from '@/redux/api/category.api';
import { ICategory } from '@/types/category.type';
import { useGetPostById } from '@/hooks/post.hook';
import dynamic from 'next/dynamic';

interface IPostCreateForm {
  successFn: () => void;
  postId: string;
}

interface IError {
  thumbnail: string | null;
  content: string | null;
  category: string | null;
  default: string | null;
}

const initialError: IError = {
  thumbnail: null,
  content: null,
  category: null,
  default: null,
};

const defaultCategory = {
  display: 'Select category',
  value: '',
};

const Select = dynamic(() => import('@/components/select/Select'), {
  ssr: false,
});

const PostEditForm = ({ successFn, postId }: IPostCreateForm) => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [textEditorValue, setTextEditorValue] = useState<string>('');
  const [isPremium, setIsPremium] = useState(false);
  const [error, setError] = useState<IError>(initialError);
  const [isPending, setIsPending] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  const { data, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery(undefined);
  const { data: post, isLoading: isPostLoading } = useGetPostById(postId);

  useEffect(() => {
    const categories = data?.data;
    if (!isCategoriesLoading && categories?.length) {
      setCategories(categories);
    }
  }, [isCategoriesLoading]);

  useEffect(() => {
    if (post) {
      setTextEditorValue(post.content);
      setCategory(post.category);
    }
  }, [post]);
  const handelSubmit = async (values: FieldValues) => {
    setError(initialError);

    if (!textEditorValue) {
      initialError.content = 'Content is required';
      return setError({ ...initialError });
    }

    if (!category && !post?.category) {
      initialError.category = 'Category is Required';
      return setError({ ...initialError });
    }
    const updateData = {
      title: values.title,
      content: textEditorValue,
      thumbnail: post?.thumbnail,
      category: category || post?.category,
      is_premium: isPremium,
    };

    setIsPending(true);
    try {
      if (thumbnail) {
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,
          { image: thumbnail },
          {
            headers: {
              'content-type': 'multipart/form-data',
            },
          },
        );
        updateData.thumbnail = data.data.display_url;
      }
      const res = await updatePost(postId, updateData);
      console.log(res);
      successFn();
    } catch (error: any) {
      initialError.default = error.message;
      setError({ ...initialError });
    } finally {
      setIsPending(false);
    }
  };

  const handelSetThumbnail = (file: File) => {
    setThumbnail(file);
  };

  const handelSetTextEditorValue = (value: string) => {
    setTextEditorValue(value);
  };

  const handelSetPremium = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPremium(e.target.checked);
  };

  const categoryOptions = [
    ...categories.map((category) => ({
      display: category.name,
      value: category.name,
    })),
  ];

  const handelSelectCategory = (value: string) => {
    setCategory(value);
  };

  if (isPostLoading) {
    return <></>;
  }
  const defaultValues = {
    title: post?.title,
    content: post?.content,
    category: post?.category,
    is_premium: post?.is_premium,
  };

  return (
    <div>
      <Form
        className="space-y-5"
        reset={true}
        onSubmit={handelSubmit}
        resolver={zodResolver(ZodValidations.postFormValidation)}
        defaultValues={defaultValues}
      >
        <FormInput label="Title" name="title" />

        <div>
          <h6 className="mb-2 font-bold">Category</h6>
          <Select
            onChange={handelSelectCategory}
            defaultValue={defaultValues.category}
            options={categoryOptions}
          />
        </div>
        <div>
          <h6 className="mb-2 font-bold">Content </h6>
          <TextEditor
            defaultValue={defaultValues.content}
            onChange={handelSetTextEditorValue}
          />
          {error.content && (
            <p className=" text-red-600 mt-1">{error.content}</p>
          )}
        </div>

        <div>
          <div className="space-y-2">
            <img
              className="max-h-52"
              src={thumbnail ? URL.createObjectURL(thumbnail) : post?.thumbnail}
              alt=""
            />

            <ImageInput
              title="Click here to Change Thumbnail"
              onChange={handelSetThumbnail}
            />
            {error.thumbnail && (
              <p className=" text-red-600 mt-1">{error.thumbnail}</p>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              onChange={handelSetPremium}
              defaultChecked={defaultValues.is_premium}
              type="checkbox"
              className="size-6 accent-black mb-2"
            />
            <h5 className="font-bold text-xl">Set as premium</h5>
          </div>
        </div>
        <div className="flex justify-end">
          {isPending ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl">Posting</span>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            <button className=" bg-button-color  px-6 py-3 rounded-lg font-medium block">
              Post Now
            </button>
          )}
          {error.default && (
            <p className=" text-red-600 mt-1">{error.default}</p>
          )}
        </div>
      </Form>
    </div>
  );
};

export default PostEditForm;
