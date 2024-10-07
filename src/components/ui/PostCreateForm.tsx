import React, { ChangeEvent, useEffect, useState } from 'react';
import Form from '../form/Form';
import FormInput from '../form/FormInput';
import ImageInput from '../input/ImageInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { FieldValues } from 'react-hook-form';
import { createPost } from '@/services/postService';
import axios from 'axios';
import { useGetCategoriesQuery } from '@/redux/api/category.api';
import { ICategory } from '@/types/category.type';
import dynamic from 'next/dynamic';

interface IPostCreateForm {
  successFn: () => void;
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

const Select = dynamic(()=>import('@/components/select/Select'),{ssr:false})
const TextEditor = dynamic(()=>import('@/components/text-editor/TextEditor'),{ssr:false})

const PostCreateForm = ({ successFn }: IPostCreateForm) => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [textEditorValue, setTextEditorValue] = useState<string>('');
  const [isPremium, setIsPremium] = useState(false);
  const [error, setError] = useState<IError>(initialError);
  const [isPending, setIsPending] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  const { data, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery(undefined);

  useEffect(() => {
    const categories = data?.data;
    if (!isCategoriesLoading && categories?.length) {
      setCategories(categories);
    }
  }, [isCategoriesLoading]);

  const handelSubmit = async (values: FieldValues) => {
    setError(initialError);

    if (!textEditorValue) {
      initialError.content = 'Content is required';
      return setError({ ...initialError });
    }

    if (!thumbnail) {
      initialError.thumbnail = 'Thumbnail is required';
      return setError({ ...initialError });
    }
    if (!category) {
      initialError.category = 'Category is Required';
      return setError({ ...initialError });
    }
    const post = {
      title: values.title,
      content: textEditorValue,
      thumbnail: '',
      category,
      is_premium:isPremium,
    };
    setIsPending(true);
    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,
        { image: thumbnail },
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      );
      post.thumbnail = data.data.display_url;

      const res = await createPost(post);
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
    defaultCategory,
    ...categories.map((category) => ({
      display: category.name,
      value: category.name,
    })),
  ];

  const handelSelectCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <div>
      <Form
        className="space-y-5"
        reset={true}
        onSubmit={handelSubmit}
        resolver={zodResolver(ZodValidations.postFormValidation)}
      >
        <FormInput label="Title" name="title" />

        <div>
          <h6 className="mb-2 font-bold">Category</h6>
          <Select onChange={handelSelectCategory} options={categoryOptions} />
        </div>
        <div>
          <h6 className="mb-2 font-bold">Content </h6>
          <TextEditor onChange={handelSetTextEditorValue} />
          {error.content && (
            <p className=" text-red-600 mt-1">{error.content}</p>
          )}
        </div>

        <div>
          {!thumbnail ? (
            /* Thumbnail input */
            <>
              <ImageInput
                title="Click here to add Thumbnail"
                onChange={handelSetThumbnail}
              />
              {error.thumbnail && (
                <p className=" text-red-600 mt-1">{error.thumbnail}</p>
              )}
            </>
          ) : (
            //    Thumbnail preview
            <img
              className="max-h-52"
              src={URL.createObjectURL(thumbnail)}
              alt=""
            />
          )}

          <div className="mt-3 flex items-center gap-2">
            <input
              onChange={handelSetPremium}
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

export default PostCreateForm;
