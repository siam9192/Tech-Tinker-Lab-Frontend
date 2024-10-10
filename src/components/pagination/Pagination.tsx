'use client';
import { useEffect, useState } from 'react';

interface IPaginationProps {
  pages: number[];
  currentPage: number;
  onChange:(page:number)=>void
}

const Pagination = ({ pages, currentPage,onChange }: IPaginationProps) => {
  const [pageNumber, setPageNumber] = useState(1);
  
  const updatePageNumber = (num: number) => {
   
    if (num > pages.length || 1 > num) {
     setPageNumber(1);
     onChange(1)
    }
    else {
      setPageNumber(1);
      onChange(1)
    }
    
  };
 
  const changePage = (page:number)=>{
   if(page<=pages.length){
    setPageNumber(page)
    onChange(page)
   }
  }

  return (
    <div className="flex select-none justify-center items-center gap-5 ">
      {/* left arrow */}
      <div
        onClick={() => {
          updatePageNumber(pageNumber - 1);
        }}
        className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-zinc-200 px-1 py-1 rounded-full"
      >
        <svg
          className="w-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M15 7L10 12L15 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{' '}
          </g>
        </svg>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        {pages.map((item) => (
          <div
            onClick={() => {
              changePage(item);
            }}
            className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${pageNumber === item ? ' bg-button-color text-white' : 'bg-white'} border-zinc-300  font-semibold text-gray-700   py-3 rounded-full`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      {/* right arrow */}
      <div
        onClick={() => {
          updatePageNumber(pageNumber + 1);
        }}
        className="bg-gray-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-zinc-100 px-4 py-4 rounded-full"
      >
        <svg
          className="w-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
              fill="#000000"
            />{' '}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
