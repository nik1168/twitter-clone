import React, {FC} from 'react';

const BaseIcon: FC<{
  children: React.ReactNode;
  iconContainerStyle?: string | undefined;
}> = ({children, iconContainerStyle}): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <div className={iconContainerStyle}>{children}</div>
    </div>
  );
};

export default BaseIcon;
