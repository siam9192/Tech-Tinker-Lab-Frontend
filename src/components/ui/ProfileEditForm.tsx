import { userGetCurrentUserProfile } from '@/hooks/auth.hook'
import ProfileCoverPhoto from '@/sections/profile/ProfileCoverPhoto'
import { default_cover_photo, default_profile_photo } from '@/utils/constant'
import React, { ChangeEvent, useRef, useState } from 'react'
import Form from '../form/Form'
import FormInput from '../form/FormInput'
import { FieldValues } from 'react-hook-form'
import FormTextArea from '../form/FormTextarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodValidations } from '@/utils/zodValidationSchame'
import { UploadImage } from '@/utils/upload'
import { updateProfile } from '@/services/profileService'
import { errorToast, successToast } from '@/utils/toast'

function ProfileEditForm() {
  const coverPhotoInputRef = useRef<HTMLInputElement>(null)
  const profilePhotoInputRef = useRef<HTMLInputElement>(null)
  const [changedCoverPhoto,setChangedCoverPhoto] = useState<File|null>(null)
  const [changedProfilePhoto,setChangedProfilePhoto] = useState<File|null>(null)
 const [isUpdating,setIsUpdating] = useState(false)
  const {data:currentUser,isLoading:isCurrentUserLoading} = userGetCurrentUserProfile()
   
  let coverPhoto;
  let profilePhoto;
  if(changedCoverPhoto){
    coverPhoto = URL.createObjectURL(changedCoverPhoto)
  }
  else if(currentUser?.profile_cover_photo){
     coverPhoto = currentUser.profile_cover_photo
  }
  else {
    coverPhoto = default_cover_photo
  }
  
  if(changedProfilePhoto){
    profilePhoto = URL.createObjectURL(changedProfilePhoto)
  }
  else if(currentUser?.profile_photo){
     profilePhoto = currentUser.profile_photo
  }
  else {
   profilePhoto = default_profile_photo
  }

  const openInput = (ref:HTMLInputElement|null)=>{

   if(ref){
    ref.click()
   }
  }



   const handelImageInputOnChange = (name:'profile'|'cover',e:ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files
    if (!files?.length){
      return
    }
   
     if(name==='profile'){
     setChangedProfilePhoto(files[0])
     }
     else if(name==='cover'){
      setChangedCoverPhoto(files[0])
     }
   
   } 
   
   const handelSubmit = async (values:FieldValues)=>{
      const data = {
       
        personal_details:{
          ...values
        },
        profile_photo:currentUser?.profile_photo,
        profile_cover_photo:currentUser?.profile_cover_photo
      }
      setIsUpdating(true)
      
     try {
      if(changedCoverPhoto){
       data.profile_cover_photo = await UploadImage(changedCoverPhoto)
      }
      if(changedProfilePhoto){
        data.profile_photo = await UploadImage(changedProfilePhoto)
      }
     
      const res = await updateProfile(data)
      successToast('Profile edited successfully')
     } catch (error:any) {
       errorToast(error.message)
     }
     finally{
      setIsUpdating(false)
     }
   }
  

   if(isCurrentUserLoading){
    return <></>
   }
   const personal_details = currentUser?.personal_details
   const defaultValues = {
    name:personal_details?.name,
    about:personal_details?.about||'',
    profession:personal_details?.profession||''
   }
   
  return (
    <section>

      {/* Cover photo input */}
      <input ref={coverPhotoInputRef} onChange={(e)=>handelImageInputOnChange('cover',e)} type="file" className='hidden' />

       {/* profile photo input */}
       <input ref={profilePhotoInputRef} onChange={(e)=>handelImageInputOnChange('profile',e)} type="file" className='hidden' />

        <div   onClick={()=>openInput(coverPhotoInputRef.current)} className='relative'>
        <img src={coverPhoto} alt="" className='h-60 rounded-lg w-full relative ' />
        <div className='w-full absolute inset-0 h-full bg-gray-800/40 flex justify-center items-center'>
        <span className='text-xl text-white font-medium'>Change cover photo</span>
        </div>
        </div>
         <div onClick={()=>openInput(profilePhotoInputRef.current)} className='bg-black  dark:bg-white  z-40 p-1 -mt-14 rounded-full  mx-auto relative w-fit '>
     <img src={profilePhoto} className='-z-10  size-20 md:size-40 rounded-full' alt="" />
     <div className='w-full absolute inset-0 h-full bg-gray-800/60 flex justify-center items-center rounded-full'>
        <span className='text-xl text-white font-medium'>Change</span>
        </div>
    
   </div>
   <Form onSubmit={handelSubmit} className='space-y-3' defaultValues={defaultValues} resolver={zodResolver(ZodValidations.editProfileValidation)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <FormInput name='name.first_name' label='First Name*' />
          <FormInput name='name.last_name' label='Last Name*' />
          </div>
          <FormInput name='profession' label='Profession' />
          <FormTextArea name='about' placeholder='Write something about your self..'/>
         <div className='text-end'>
         {isUpdating ? (
            <div className="flex items-center gap-2">
              <span className="font-medium text-xl">Updating</span>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            <button className=" bg-button-color  px-6 py-3 rounded-lg font-medium block">
           Submit
            </button>
          )}
         </div>
        </Form>
    </section>
  )
}

export default ProfileEditForm