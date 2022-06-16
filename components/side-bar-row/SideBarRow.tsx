import React, {FC} from 'react';

import {SideBarRowsProps} from './typings';

const SideBarRow: FC<SideBarRowsProps> = ({Icon, title}): JSX.Element => {
  return (
    <div>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SideBarRow;
