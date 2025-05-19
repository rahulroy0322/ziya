import type { FC } from 'react';

import { type EventGroupType, Group } from '.';

const Events: FC = () => {
  const eventGroups: EventGroupType[] = [
    {
      id: '10-11',
      events: [
        {
          id: '1',
          title: 'Event One',
        },
        {
          id: '2',
          title: 'Event Two',
        },
        {
          id: '3',
          title: 'Event Three',
        },
      ],
    },
  ];

  return (
    <div className="absolute flex flex-col gap-2 w-60 overflow-auto max-h-80 p-3 right-50 bottom-10 bg-accent">
      <h3 className="font-bold">Events</h3>
      {eventGroups.map(({ id, events }) => (
        <Group
          id={id}
          events={events}
          key={`section-${id}`}
        />
      ))}
    </div>
  );
};

export default Events;
