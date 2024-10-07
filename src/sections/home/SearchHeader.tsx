'use client';

import { useGetCategoriesQuery } from '@/redux/api/category.api';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Select = dynamic(()=>import('@/components/select/Select'),{ssr:false})

function SearchHeader() {
  const { data } = useGetCategoriesQuery(undefined);
  const categories = data?.data || [];

  const CategoryOptions = [
    ...categories.map((category) => ({
      display: category.name,
      value: category.name,
    })),
  ];

  const handelCategoryChange = () => {};
  const handelSortTypeChange = () => {};
  return (
    <div className="p-10 bg-white dark:bg-dark-light shadow flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center lg:justify-between ">
      <div className="flex items-center justify-between lg:w-1/3 w-full bg-gray-100 dark:bg-black p-1 rounded-full ">
        <input
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
      <Select onChange={handelSortTypeChange} options={CategoryOptions} />
    </div>
  );
}

export default SearchHeader;
