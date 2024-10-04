'use client'
import React from 'react'
import { BiLogOutCircle } from 'react-icons/bi'

function LogoutButton() {
  return (
    <button className='text-3xl text-white p-3 bg-[#fc927d] rounded-full'> 
    <BiLogOutCircle/>
</button>
  )
}

export default LogoutButton