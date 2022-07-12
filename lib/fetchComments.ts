import fetch from 'cross-fetch';

import {Comment} from '../typings';
import {BASE_URL} from './constants';

export const fetchComments = async (
  tweetId: string,
): Promise<Comment[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/api/getComments?tweetId=${tweetId}`);

    return await res.json();
  } catch (ex) {
    return null;
  }
};
