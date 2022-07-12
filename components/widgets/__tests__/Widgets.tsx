import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Widgets from '../Widgets';

describe('Widgets', () => {
  it('renders component', () => {
    const component = render(<Widgets />);

    expect(component.getByPlaceholderText('Search Twitter')).toBeTruthy();
  });
});
