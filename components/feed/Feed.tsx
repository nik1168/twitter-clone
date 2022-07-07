import {RefreshIcon} from '@heroicons/react/outline';
import React, {FC, useState} from 'react';

import {fetchTweets} from '../../lib/fetchTweets';
import Tweet from '../tweet/Tweet';
import TweetBox from '../tweet-box/TweetBox';
import {FeedProps} from './typings';

const Feed: FC<FeedProps> = ({tweets}): JSX.Element => {
  const [tweetsList, setTweetsList] = useState<FeedProps['tweets']>(tweets);
  const handleRefresh = async () => {
    const tweetsData = await fetchTweets();

    setTweetsList(tweetsData);
  };

  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
          onClick={handleRefresh}
        />
      </div>
      <TweetBox />
      {/*Feed*/}
      <div>
        {tweetsList.map(element => {
          return <Tweet key={element._id} tweet={element} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
