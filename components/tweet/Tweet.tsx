import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline';
import React, {FC} from 'react';
import TimeAgo from 'react-timeago';

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
          <p>5</p>
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
    </div>
  );
};

export default Tweet;
