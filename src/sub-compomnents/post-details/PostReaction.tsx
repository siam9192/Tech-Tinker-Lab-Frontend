'use client';
import { useGetPostReactionOfCurrentUser } from '@/hooks/postReaction.hook';
import { useGetPostReactionQuery } from '@/redux/api/reaction.api';
import { upsertPostReaction } from '@/services/postReactionService';
import { errorToast } from '@/utils/toast';
import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import {
  FaBookReader,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from 'react-icons/fa';

interface IPostReactionProps {
  data: {
    upvote: number;
    downvote: number;
    id: string;
  };
}

function PostReaction({ data }: IPostReactionProps) {
  const [vote_type, setVote_type] = useState<string | null>(null);

  const { data: reactionData } = useGetPostReactionOfCurrentUser(data.id);
  const {
    data: reactionRes,
    refetch,
    isFetching,
    isLoading,
  } = useGetPostReactionQuery(data.id);
  const reaction = reactionRes?.data;
  useEffect(() => {
    setVote_type(reactionData?.vote_type || null);
  }, [reactionData]);

  const handelVote = async (type: string) => {
    try {
      if (vote_type === type) {
        setVote_type(null);

        await upsertPostReaction({ postId: data.id, vote_type: 'NULL' });
      } else {
        setVote_type(type);
        await upsertPostReaction({ postId: data.id, vote_type: type });
      }
      refetch();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const isOnload = isLoading || isFetching;
  return (
    <div>
      <div className="">
        <h6 className="mb-1 font-medium text-xl">Votes</h6>
        <div className="flex items-center gap-2 text-gray-600 dark:text-slate-50 text-xl">
          {isOnload ? (
            <span className="loading loading-dots loading-md dark:text-white"></span>
          ) : (
            <button
              onClick={() => handelVote('UP')}
              className="flex items-center gap-1 text-3xl hover:text-primary-color "
            >
              <span
                className={`p-2 bg-gray-100 dark:bg-dark-mode rounded-full ${vote_type === 'UP' ? 'text-primary-color' : ''}`}
              >
                <FaLongArrowAltUp />
              </span>
              <span>{reaction?.upvote}</span>
            </button>
          )}
          {isOnload ? (
            <span className="loading loading-dots loading-md dark:text-white"></span>
          ) : (
            <button
              onClick={() => handelVote('DOWN')}
              className="flex items-center gap-1 text-3xl hover:text-primary-color "
            >
              <span
                className={`p-2 bg-gray-100 dark:bg-dark-mode rounded-full ${vote_type === 'DOWN' && 'text-primary-color'}`}
              >
                <FaLongArrowAltDown />
              </span>

              <span>{reaction?.downvote}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostReaction;
