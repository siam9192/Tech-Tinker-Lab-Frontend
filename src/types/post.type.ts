export interface IPost {
  _id: string;
  title: string;
  content: string;
  category: string;
  thumbnail: string;
  images: any[];
  tags: string[];
  is_premium: boolean;
  is_private: boolean;
  total_earning: number;
  total_upvote: number;
  total_downvote: number;
  total_read: number;
  total_reader: number;
  total_gained_follower: number;
  total_lost_follower: number;
  total_comment: number;
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAuthor {
  username: string;
  profile_photo: any;
  total_follower: number;
  total_following: number;
  is_verified: boolean;
}
