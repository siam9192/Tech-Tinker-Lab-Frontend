import Link from 'next/link'
import React from 'react'
interface IProfileImage {
    image:string,
    name:string
} 
const ProfileImage = () => {
  return (
   <Link href='/profile'>
    <div className='flex items-center gap-1'>
        <img className='size-14 rounded-full' src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="" />
    </div>
   </Link>
  )
}

export default ProfileImage