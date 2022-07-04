import {Tweet} from '../typings';

export const fetchTweets = async (): Promise<Tweet[]> => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${BASE_URL}/api/getTweets`);
  const data = await res.json();

  return data.tweets;
};
