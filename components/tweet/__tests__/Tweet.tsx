import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';
import React from 'react';

import {getMockTweet} from '../../../lib/__data__/mock';
import Tweet from '../Tweet';

jest.mock('next-auth/react');

describe('Tweet', () => {
  beforeEach(() => {
    const mockSession: Session = {
      expires: '1',
      user: {email: 'a', name: 'Delta', image: 'c'},
    };

    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('renders component', () => {
    render(
      <Tweet
        tweet={getMockTweet(
          '123',
          'nik1168',
          'This is a mocked tweet',
          false,
          undefined,
        )}
      />,
    );

    const text = screen.getByText('This is a mocked tweet');
    const username = screen.getByText('nik1168');

    expect(text).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });

  it('renders tweet with image', () => {
    render(
      <Tweet
        tweet={getMockTweet(
          '123',
          'nik1168',
          'This is a mocked tweet',
          false,
          'https://pbs.twimg.com/media/FR8dfYmXIAATrhS?format=jpg&name=medium',
        )}
      />,
    );

    const text = screen.getByText('This is a mocked tweet');
    const username = screen.getByText('nik1168');

    expect(text).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
