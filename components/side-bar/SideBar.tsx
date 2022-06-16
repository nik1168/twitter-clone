import {HomeIcon} from '@heroicons/react/outline';
import React, {FC} from 'react';

import SideBarRow from '../side-bar-row/SideBarRow';

const SideBar: FC = (): JSX.Element => {
  return (
    <div>
      <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="" />
      <SideBarRow Icon={HomeIcon} title="home" />
    </div>
  );
};

export default SideBar;
