import type { FC } from 'react';

import { Event, type EventGroupType } from '.';

type GroupPropsType = EventGroupType;

const Group: FC<GroupPropsType> = ({ id, events }) => (
  <section className="outline p-1">
    <h4 className="font-medium text-green-400">{id}</h4>
    {events.map(({ id, title }) => (
      <Event
        title={title}
        key={`details-${id}`}
      />
    ))}
  </section>
);

export default Group;
