import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import {getMockTweet} from '../../../lib/__data__/mock';
import Tweet from '../Tweet';

describe('Tweet', () => {
  it('renders component', () => {
    render(
      <Tweet
        tweet={getMockTweet('123', 'nik1168', 'This is a mocked tweet', false)}
      />,
    );

    const text = screen.getByText('This is a mocked tweet');
    const username = screen.getByText('nik1168');

    expect(text).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});