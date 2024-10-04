import React from 'react'
interface ISuccessPopup {
    isOpen:boolean,
    closeFn:()=>void,
    heading?:string,
    description?:string
}
const SuccessPopup = ({isOpen,closeFn}:ISuccessPopup) => {
  return (
  <div onClick={closeFn} className={` bg-gray-700/60 h-screen w-screen absolute inset-0 ${isOpen ? 'visible':'invisible'} flex justify-center items-center px-2 lg:px-0`}>
     <div className={`bg-white dark:bg-dark-mode min-h-52 w-full md:w-1/2 lg:w-1/3 rounded-lg p-10 space-y-5 ${isOpen ? '':'scale-0 -translate-y-10 opacity-30'} duration-200`}>
     <img className='w-1/2 mx-auto' src="/images/done.png" alt="" />
     <div className='space-y-2 text-center'>
     <h1 className='text-3xl font-medium dark:text-white text-center'>Successful!</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit soluta, eveniet officiis corrupti nemo porro ut rem. Voluptate, reprehenderit eaque.</p>
     </div>
     </div>
  </div>
  )
}

export default SuccessPopup