import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import {Session} from 'next-auth';
import {useSession} from 'next-auth/react';

import Home from '../pages/index';

jest.mock('next-auth/react');

describe('Home', () => {
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
  it('renders a heading', () => {
    const component = render(<Home tweets={[]} />);

    expect(component).toBeTruthy();
  });
});
