import fetch from 'cross-fetch';

import {Tweet} from '../typings';
import {BASE_URL} from './constants';

export const fetchTweets = async (): Promise<Tweet[]> => {
  const res = await fetch(`${BASE_URL}/api/getTweets`);
  const data = await res.json();

  return data.tweets;
};
