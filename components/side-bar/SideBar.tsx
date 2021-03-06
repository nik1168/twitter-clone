import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline';
import {signIn, signOut, useSession} from 'next-auth/react';
import React, {FC} from 'react';

import SideBarRow from '../side-bar-row/SideBarRow';

const SideBar: FC = (): JSX.Element => {
  const {data: session} = useSession();

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow
        Icon={UserIcon}
        title={session ? 'Sign Out' : 'Sign In'}
        onClick={session ? signOut : signIn}
      />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default SideBar;
