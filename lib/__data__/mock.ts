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
  image = '',
): Tweet => {
  return {
    ...mockTweet,
    _id: id,
    username,
    text,
    blockTweet,
    profileImg: image,
  };
};

export const mockTweets: Tweet[] = [
  getMockTweet('1', 'nik1168', 'nik', false),
  getMockTweet('2', 'nik1168', 'niko', false),
  getMockTweet('3', 'nik1168', 'tweet 3', false),
];
