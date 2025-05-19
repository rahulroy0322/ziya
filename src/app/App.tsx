import { type FC } from 'react';

import {
  Clock,
  DesktopOnly,
  MusicPlayer,
  SyFyVolume,
  Time,
  Ziya,
} from '@/components';
import { CheckAndRender } from '@/components';

const App: FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-primary p-5">
      <CheckAndRender>
        <Ziya />
        <Time />
        <DesktopOnly />

        <div className="absolute bottom-0 left-0">
          <MusicPlayer />
        </div>
        <div className="z-50 absolute top-1/2 left-1/2 -translate-1/2 h-1/2 aspect-square">
          <Clock />
        </div>

        <SyFyVolume />
      </CheckAndRender>
    </div>
  );
};

export default App;
