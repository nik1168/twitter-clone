import {SearchIcon} from '@heroicons/react/outline';
import React, {FC} from 'react';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Widgets: FC = (): JSX.Element => {
  return (
    <div className="col-span-2 px-2 mt-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className=" flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nik1168"
        options={{height: 1000}}
      />
    </div>
  );
};

export default Widgets;
