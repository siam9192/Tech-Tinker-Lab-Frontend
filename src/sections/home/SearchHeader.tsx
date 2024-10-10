'use client';

import Debounce from '@/debounce';
import { useGetCategoriesQuery } from '@/redux/api/category.api';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { PageProps } from '../../../.next/types/app/layout';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

const Select = dynamic(() => import('@/components/select/Select'), {
  ssr: false,
});
const defaultCategory = {
  display: 'Select Post Category',
  value: '',
};

const defaultSort = {
  display: 'Select Sort Type (default)',
  value: '',
};

const sorts = [
  'Posted Time (dec)',
  'Upvote (ace)',
  'Upvote (dec)',
  'Downvote (ace)',
];

function SearchHeader({ searchParams }: PageProps) {
  const { data } = useGetCategoriesQuery(undefined);
  const [fieldValue, setFieldValue] = useState('');
  const router = useRouter();
  const categories = data?.data || [];
  const searchTerm = Debounce(fieldValue);

  useEffect(() => {
    handelSearch('searchTerm', searchTerm);
  }, [searchTerm]);

  const CategoryOptions = [
    defaultCategory,
    ...categories.map((category) => ({
      display: category.name,
      value: category.name,
    })),
  ];

  const sortOptions = [
    defaultSort,
    ...sorts.map((sort) => ({
      display: sort,
      value: sort.toLowerCase(),
    })),
  ];

  function handelSearch(field: string, value: string | number) {
    const queryField = ['searchTerm', 'category', 'sort'];
    const urlSearchParams = new URLSearchParams();
    queryField.forEach((item) => {
      if (field === item) {
        if (value) {
          urlSearchParams.set(field, value.toString());
        } else {
          delete searchParams[field];
        }
      } else {
        if (searchParams[item]) {
          urlSearchParams.set(item, searchParams[item]);
        }
      }
    });
   
    router.push(`/?${urlSearchParams.toString()}`);
    
  }

  const handelCategoryChange = (value: string) => {
    handelSearch('category', value);
  };
  const handelSortTypeChange = (value: string) => {
    handelSearch('sort', value);
  };

  const handelTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
   
      setFieldValue(e.target.value);
    
  };

  return (
    <div className="p-10 bg-white dark:bg-dark-light shadow flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center lg:justify-between  w">
      <div className="flex items-center justify-between lg:w-1/3 w-full bg-gray-100 dark:bg-black p-1 rounded-full ">
        <input
          onChange={handelTextInputChange}
          type="text"
          className="w-full bg-transparent border-none outline-none px-1 dark:text-white"
          placeholder="Search.."
        />
        <button className="p-3 text-2xl bg-dark-light rounded-full text-white hover:bg-primary-color duration-100 ease-in-out hover:scale-90">
          {' '}
          <IoSearchOutline />
        </button>
      </div>
      <Select onChange={handelCategoryChange} options={CategoryOptions} />
      <Select onChange={handelSortTypeChange} options={sortOptions} />
    </div>
  );
}

export default SearchHeader;
