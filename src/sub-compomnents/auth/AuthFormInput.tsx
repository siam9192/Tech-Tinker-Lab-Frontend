'use client'
import React, { useState } from 'react'
import { IconType } from 'react-icons'

interface IAuthFormInput {
  icon:IconType,
  name:string,
  placeholder:string,
  type?:string,
  register:any
}

function AuthFormInput(props:IAuthFormInput) {
  const [isFocus,setIsFocus] = useState(false) 
  const {name,placeholder,type,register} = props  
   
  

  return (
   <div className={`flex items-center gap-2 pl-4 px-1 bg-gray-100  rounded-md ${isFocus ? 'border-2 border-primary-color':''}`}>
       <span className='text-2xl font-medium '>
        {
          <props.icon/>
        }
       </span>
       <input   {...register(name)} type={type||'text'} placeholder={placeholder}  className='w-full   border-none outline-none bg-transparent placeholder:font-medium pl-2 py-4'/>
   </div>
  )
}

export default AuthFormInput