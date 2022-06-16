import {render} from '@testing-library/react';

import SideBar from '../SideBar';

describe('SideBar', () => {
  it('renders component', () => {
    const component = render(<SideBar />);

    expect(component).toBeTruthy();
  });

  it('renders elements', () => {
    const component = render(<SideBar />);

    const homeElement = component.getByText('home');

    expect(homeElement).toBeTruthy();
  });
});
