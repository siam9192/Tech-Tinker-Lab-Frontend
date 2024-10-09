import { getUserProfile } from '@/services/profileService';
import ProfileCoverPhoto from '@/sections/profile/ProfileCoverPhoto';
import React, { use } from 'react';
import { PageProps } from '../../../../../.next/types/app/layout';
import ProfileInfo from '@/sections/profile/ProfileInfo';
import ProfileTabs from '@/sub-compomnents/profile/ProfileTabs';

async function page({ params }: PageProps) {
  let profileData;
  const username = params.username;
  try {
    if (username) {
      profileData = await getUserProfile(username);
    }
  } catch (error) {
    return <h1></h1>;
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
