import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';

import SideBar from '../SideBar';

jest.mock('next-auth/react');

describe('SideBar', () => {
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
