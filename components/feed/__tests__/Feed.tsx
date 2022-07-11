import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';
import React from 'react';

import {mockTweets} from '../../../lib/__data__/mock';
import Feed from '../Feed';

jest.mock('next-auth/react');

describe('Feed', () => {
  beforeEach(() => {
    const mockSession: Session = {
      expires: '1',
      user: {email: 'a', name: 'Delta', image: 'c'},
    };

    (useSession as jest.Mock).mockReturnValue({data: mockSession});
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('renders component', () => {
    render(<Feed tweets={mockTweets} />);

    const title = screen.getByText('Home');

    expect(title).toBeInTheDocument();
  });
});
