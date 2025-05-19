import { type FC } from 'react';

import { Styles, SyFySlider } from '.';
import { Actions } from './action';

const MusicPlayer: FC = () => {
  return (
    <div className="relative flex gap-2 items-center ml-3 mb-4 isolate p-1">
      <Styles />
      <div className="w-14 rounded-sm aspect-square bg-gray-500"></div>

      <div className="w-60 flex flex-col gap-2.5">
        <h3 className="leading-0.5 text-sm">Lorem ipsum dolor...</h3>

        <SyFySlider
          max={100}
          min={0}
        />

        <div className="flex gap-3 justify-between">
          <p className="text-sm">
            <span>00:00</span>
            <i>/</i>
            <span>00:00</span>
          </p>
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
