import {Tweet} from '../../typings';

export const mockTweet: Tweet = {
  _id: '1',
  _rev: '',
  _createdAt: '',
  _updatedAt: '',
  _type: 'tweet',
  image: '',
  username: 'nik1168',
  text: 'Niks tweet',
  profileImg: '',
  blockTweet: false,
};

export const getMockTweet = (
  id: string,
  username: string,
  text: string,
  blockTweet: boolean,
  image: string | undefined,
): Tweet => {
  return {
    ...mockTweet,
    _id: id,
    username,
    text,
    blockTweet,
    image,
  };
};

export const mockTweets: Tweet[] = [
  getMockTweet('1', 'nik1168', 'nik', false, undefined),
  getMockTweet('2', 'nik1168', 'niko', false, undefined),
  getMockTweet('3', 'nik1168', 'tweet 3', false, undefined),
];
