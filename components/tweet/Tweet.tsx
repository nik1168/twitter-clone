import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline';
import React, {FC, useCallback, useEffect, useState} from 'react';
import TimeAgo from 'react-timeago';

import {fetchComments} from '../../lib/fetchComments';
import {Comment} from '../../typings';
import BaseIcon from '../base-icon/BaseIcon';
import {TweetProps} from './typings';

const TweetActionIcon: FC<{children: React.ReactNode}> = ({
  children,
}): JSX.Element => {
  return (
    <BaseIcon iconContainerStyle="flex items-center space-x-3 text-gray-400">
      {children}
    </BaseIcon>
  );
};

const Tweet: FC<TweetProps> = ({tweet}): JSX.Element => {
  const [comments, setComments] = useState<Comment[] | null>([]);

  const refreshComments = useCallback(async () => {
    const commentsList = await fetchComments(tweet._id);

    setComments(commentsList);
  }, [tweet._id]);

  useEffect(() => {
    refreshComments();
  }, [refreshComments]);

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()}.
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image ? (
            <img
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover w-max shadow-sm"
              src={tweet.image}
              alt=""
            />
          ) : null}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <TweetActionIcon>
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments?.length}</p>
        </TweetActionIcon>
        <TweetActionIcon>
          <SwitchHorizontalIcon className="h-5 w-5" />
        </TweetActionIcon>
        <TweetActionIcon>
          <HeartIcon className="h-5 w-5" />
        </TweetActionIcon>
        <TweetActionIcon>
          <UploadIcon className="h-5 w-5" />
        </TweetActionIcon>
      </div>
      {comments && comments?.length > 0 ? (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments?.map((comment: Comment) => {
            return (
              <div className="relative flex space-x-2" key={comment._id}>
                <hr className="absolute left-5 top-10 h-8 border-x" />
                <img
                  className="mt-2 h-7 w-7 object-cover rounded-full"
                  src={comment.profileImg}
                  alt=""
                />
                <div className="">
                  <div className="flex items-center space-x-1">
                    <p className="mr-1 font-blod">{comment.username}</p>
                    <p className="hidden text-sm text-gray-500 lg:inline">
                      @{comment.username.replace(/\s+/g, '').toLowerCase()}.
                    </p>
                    <TimeAgo
                      className="text-sm text-gray-500"
                      date={comment._createdAt}
                    />
                  </div>
                  <p className="">{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Tweet;
