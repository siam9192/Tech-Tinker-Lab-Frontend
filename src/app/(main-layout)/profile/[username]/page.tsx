'use client'
import ProfileCoverPhoto from '@/sections/profile/ProfileCoverPhoto';
import React, { use } from 'react';
import { PageProps } from '../../../../../.next/types/app/layout';
import ProfileInfo from '@/sections/profile/ProfileInfo';
import ProfileTabs from '@/sub-compomnents/profile/ProfileTabs';
import { useGetUserProfile } from '@/hooks/profile.hook';

 function page({ params }: PageProps) {
 
  const username = params.username;
  const {data:profileData,isLoading,error} = useGetUserProfile(username)

  if(isLoading){
    return <div className='text-center'>
      <span className="loading loading-ring w-32 md:w-52 text-primary-color mt-40"></span>
    </div>
  }
  else if (error){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <ProfileCoverPhoto image_url={profileData?.profile_cover_photo} />
      <div className="lg:grid grid-cols-6">
        <div className="col-span-2">
          <ProfileInfo profile={profileData!} />
        </div>
        <div className=" col-span-4">
          <ProfileTabs username={profileData?.username!} />
        </div>
      </div>
    </div>
  );
}

export default page;
