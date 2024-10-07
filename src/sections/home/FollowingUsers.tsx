import { following_users } from '@/data/FollowingUsers';
import React from 'react';
import { MdDashboardCustomize } from 'react-icons/md';

const FollowingUsers = () => {
  return (
    <section className="flex items-center gap-5  ">
      {[...following_users].map((user) => (
        <div>
          <div className="">
            <img
              className=" size-16 md:size-20  rounded-full"
              src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
              alt=""
            />
          </div>
          <h2 className="font-medium text-center mt-2 dark:text-white">
            {user.personal_details.first_name +
              ' ' +
              user.personal_details.last_name}
          </h2>
        </div>
      ))}
      <div>
        <div className="text-3xl md:text-4xl  p-4 bg-button-color text-white rounded-full">
          <MdDashboardCustomize />
        </div>
        <h2 className="font-medium text-center mt-2 text-button-color">
          See All
        </h2>
      </div>
    </section>
  );
};

export default FollowingUsers;
