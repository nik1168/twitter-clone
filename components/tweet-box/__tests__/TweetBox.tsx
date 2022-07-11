import '@testing-library/jest-dom';

import {fireEvent, render, screen} from '@testing-library/react';
import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';
import React from 'react';

import TweetBox from '../TweetBox';

jest.mock('next-auth/react');

describe('TweetBox', () => {
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
    render(<TweetBox />);

    const title = screen.getByPlaceholderText("What's happening?");

    expect(title).toBeInTheDocument();
  });

  it('changes tweet text', () => {
    render(<TweetBox />);
    const text = 'Today is a great day!';
    const input = screen.getByPlaceholderText(
      "What's happening?",
    ) as HTMLInputElement;

    fireEvent.change(input, {target: {value: text}});
    expect(input.value).toBe(text);
  });
});
