import React, {FC} from 'react';

import {SideBarRowsProps} from './typings';

const SideBarRow: FC<SideBarRowsProps> = ({Icon, title}): JSX.Element => {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 px-4 py-3 rounded-full transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden group-hover:text-twitter md:inline-flex text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SideBarRow;
