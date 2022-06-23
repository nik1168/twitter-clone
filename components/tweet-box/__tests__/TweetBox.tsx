import '@testing-library/jest-dom';

import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';

import TweetBox from '../TweetBox';

describe('TweetBox', () => {
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
