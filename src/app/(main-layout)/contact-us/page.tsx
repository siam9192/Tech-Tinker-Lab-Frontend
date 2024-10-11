'use client';
import Form from '@/components/form/Form'
import FormInput from '@/components/form/FormInput';
import FormTextArea from '@/components/form/FormTextarea';
import React from 'react'

function page() {
    const handelSubmit = ()=>{

    }
  return (
    <div className=" w-full lg:w-1/2 mx-auto  p-6  rounded-lg mt-10">
    <h2 className=" font-bold mb-6 text-center dark:text-white text-4xl">Contact Us</h2>
   
    <Form onSubmit={handelSubmit} className='space-y-3'>
    <FormInput name='name' label='Name'/>
    <FormInput name='email' label='Email'/>
    <FormTextArea name='message' placeholder='Write your message'/>
    <button className='w-full py-3 bg-primary-color text-white'>Submit</button>
    </Form>
    
  </div>
  )
}

export default page