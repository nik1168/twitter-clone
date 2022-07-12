import '@testing-library/jest-dom';

import {HomeIcon} from '@heroicons/react/outline';
import {render, screen} from '@testing-library/react';
import React from 'react';

import SideBarRow from '../SideBarRow';

describe('SideBarRow', () => {
  it('renders component', () => {
    render(<SideBarRow Icon={HomeIcon} title="Home" />);

    const title = screen.getByText('Home');

    expect(title).toBeInTheDocument();
  });
});
