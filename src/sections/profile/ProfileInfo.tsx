'use client';
import EditProfileButton from '@/components/ui/EditProfileButton';
import FollowButton from '@/components/ui/FollowButton';
import { getCurrentUser } from '@/services/authService';
import { IUser } from '@/types/user.type';
import { default_profile_photo } from '@/utils/constant';
import React, { useEffect, useState } from 'react';

interface IProfile {
  profile: IUser;
}

 function ProfileInfo({ profile }: IProfile) {
  const [currentUser,setCurrentUser] = useState<any|null>(null)
  const personal_details = profile.personal_details;
  const full_name =
    personal_details.name.first_name + ' ' + personal_details.name.last_name ||
    '';
  useEffect(()=>{
   getCurrentUser().then((data)=>setCurrentUser(data))
  },[])

  return (
    <section className="space-y-4">
      <div className="space-y-2 text-center ">
        {profile.profile_photo ? (
          <img
            src={profile.profile_photo}
            className=" size-20 md:size-40 bg-black p-0.5 md:p-2 rounded-full -mt-10 md:-mt-14 dark:bg-white mx-auto relative z-20 "
            alt=""
          />
        ) : (
          <div className="bg-black  dark:bg-white  z-20 relative p-2   -mt-10 md:-mt-14 w-fit   mx-auto rounded-full ">
            <img
              src={default_profile_photo}
              className=" size-20 md:size-40 rounded-full  "
              alt=""
            />
          </div>
        )}

        <div className="space-y-1 dark:text-white">
          <h1 className="text-3xl font-bold dark:text-white">
            {profile.username}
          </h1>
          <h4 className="font-bold text-xl">{full_name}</h4>
        </div>
        <div className="flex justify-center">
          {currentUser?.id === profile._id ? (
            <EditProfileButton />
          ) : (
            <FollowButton username={profile.username} userId={profile._id} />
          )}
        </div>
        <p className='dark:text-white'>{profile.personal_details.about || ''}</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-2 text-center dark:text-white">
          <h1 className=" text-4xl md:text-5xl font-bold ">
            {profile.total_post}
          </h1>
          <h2 className=" text-2xl md:text-3xl font-bold ">Posts</h2>
        </div>
        <div className="space-y-2 text-center dark:text-white">
          <h1 className=" text-4xl md:text-5xl font-bold ">
            {profile.total_follower}
          </h1>
          <h2 className=" text-2xl md:text-3xl font-bold ">Follower</h2>
        </div>
        <div className="space-y-2 text-center dark:text-white">
          <h1 className=" text-4xl md:text-5xl font-bold ">
            {profile.total_following}
          </h1>
          <h2 className=" text-2xl md:text-3xl font-bold ">Following</h2>
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
