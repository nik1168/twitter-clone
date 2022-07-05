import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import {mockTweets} from '../../../lib/__data__/mock';
import Feed from '../Feed';

describe('Feed', () => {
  it('renders component', () => {
    render(<Feed tweets={mockTweets} />);

    const title = screen.getByText('Home');

    expect(title).toBeInTheDocument();
  });
});
