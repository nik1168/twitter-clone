import {render} from '@testing-library/react';

import SideBar from '../SideBar';

describe('SideBar', () => {
  it('renders component', () => {
    const component = render(<SideBar />);

    expect(component).toBeTruthy();
  });

  it('renders elements', () => {
    const component = render(<SideBar />);

    const homeElement = component.getByText('Home');

    expect(homeElement).toBeTruthy();

    const hashtagElement = component.getByText('Explore');

    expect(hashtagElement).toBeTruthy();

    const notificationsElement = component.getByText('Notifications');

    expect(notificationsElement).toBeTruthy();

    const messagesElement = component.getByText('Messages');

    expect(messagesElement).toBeTruthy();

    const bookmarkElement = component.getByText('Bookmarks');

    expect(bookmarkElement).toBeTruthy();

    const listElement = component.getByText('Lists');

    expect(listElement).toBeTruthy();

    const moreElement = component.getByText('More');

    expect(moreElement).toBeTruthy();
  });
});
