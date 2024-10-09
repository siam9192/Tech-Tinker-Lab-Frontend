'use client';
import { FaDownLong, FaUpLong } from 'react-icons/fa6';
import React, { useEffect, useState } from 'react';
import { upsertCommentReaction } from '@/services/commentReactionService';
import { errorToast } from '@/utils/toast';
interface ICommentReaction {
  data: {
    commentId: string;
    upvote: number;
    downvote: number;
  };
  currentUserVoteType: 'UP' | 'DOWN' | null;
}

function CommentReaction({ data, currentUserVoteType }: ICommentReaction) {
  const [upvote, setUpvote] = useState(data.upvote);
  const [downvote, setDownvote] = useState(data.downvote);
  const [voteType, setVoteType] = useState<string | null>(currentUserVoteType);
  const [recentlyVotedType, setIsRecentlyVotedType] = useState<string | null>(
    null,
  );


  const handelVote = async (type: string|null) => {
    try {
      if ((recentlyVotedType || voteType) === type) {
        setIsRecentlyVotedType(null);
        type = 'NULL'
        
        setIsRecentlyVotedType(null)
        setVoteType(null)
      } else {
        setIsRecentlyVotedType(type);
        setVoteType(type)
      }
     
      if(voteType === 'DOWN'){
        if(type === 'UP'){
          setUpvote(current=>current+1)
        }
         setDownvote(current=>current-1)
      }
      else if(voteType === 'UP'){
        if(type === 'DOWN'){
          setDownvote(current=>current+1)
        }
         setUpvote(current=>current-1)
      }
      else {
        if(type === 'DOWN'){
          setDownvote(current=>current+1)
        }
        else  if(type === 'UP'){
          setUpvote(current=>current+1)
        }
      }
   
      await upsertCommentReaction({
        commentId: data.commentId,
        vote_type: type,
      });
    } catch (error: any) {
      setIsRecentlyVotedType(null);
      errorToast(error.message);
    }
  };

  return (
    <div className="flex items-center gap-2">
          <button
        onClick={() => handelVote('UP')}
        className="flex items-center gap-1"
      >
        <span
          className={`${voteType === 'UP' ? 'text-primary-color' : 'text-black dark:text-white'}`}
        >
          <FaUpLong />
        </span>
        <span>{upvote}</span>
      </button>
      <button
        onClick={() => handelVote('DOWN')}
        className="flex items-center gap-1"
      >
        <span
          className={`${voteType === 'DOWN' ? 'text-primary-color' : 'text-black dark:text-white'}`}
        >
          <FaDownLong />
        </span>
        <span>{downvote}</span>
      </button>
  
    </div>
  );
}

export default CommentReaction;
