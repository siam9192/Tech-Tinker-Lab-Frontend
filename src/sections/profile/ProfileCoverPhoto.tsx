import { default_cover_photo } from '@/utils/constant'
import React from 'react'

interface IProfileCoverPhotoProps {
    image_url:string|null|undefined
}

function ProfileCoverPhoto({image_url}:IProfileCoverPhotoProps) {
  return (
    <div>
        <img  src={image_url||default_cover_photo} alt="" className='w-full min-60 max-h-80 rounded-lg  -z-20' />
    </div>
  )
}

export default ProfileCoverPhoto