export interface IComment {
  _id: string;
  comment: string;
  post: string;
  total_upvote: number;
  total_downvote: number;
  author: Author;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Author {
  profile_photo: any;
  profile_cover_photo: any;
  username: string;
  total_post: number;
  total_follower: number;
  total_following: number;
  is_verified: boolean;
  _id: string;
}

export interface IUserCommentReaction {
  comment: string;
  vote_type: 'DOWN' | 'UP';
}
