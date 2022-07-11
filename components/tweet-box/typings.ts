import {Dispatch, SetStateAction} from 'react';

import {Tweet} from '../../typings';

export interface TweetBoxProps {
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
}
