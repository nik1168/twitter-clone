import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import React from 'react';

import Feed from '../Feed';

describe('Feed', () => {
  it('renders component', () => {
    render(<Feed />);

    const title = screen.getByText('Home');

    expect(title).toBeInTheDocument();
  });
});
