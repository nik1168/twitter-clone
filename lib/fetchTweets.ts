import fetch from 'cross-fetch';

import {Tweet} from '../typings';
import {BASE_URL} from './constants';

export const fetchTweets = async (): Promise<Tweet[]> => {
  console.log('/api/getTweets`');
  console.log(`${BASE_URL}/api/getTweets`);
  const res = await fetch(`${BASE_URL}/api/getTweets`);
  const data = await res.json();

  return data.tweets;
};
