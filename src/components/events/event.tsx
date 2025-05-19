import type { FC } from 'react';

import type { EventGroupType } from '.';

type EventPropsType = Omit<EventGroupType['events'][number], 'id'>;

const Event: FC<EventPropsType> = ({ title }) => (
  <h2 className='ml-2 text-secondary-foreground'>
    {title}
  </h2>
);

export default Event;
