import type { FC } from 'react';

import { Task, type TaskGroupType } from '.';

type GroupPropsType = TaskGroupType;

const Group: FC<GroupPropsType> = ({ id, tasks }) => (
  <section className="outline p-1">
    <h4 className="font-medium text-green-400">{id}</h4>
    {tasks.map(({ id, steps, title }) => (
      <Task
        title={title}
        steps={steps}
        key={`details-${id}`}
      />
    ))}
  </section>
);

export default Group;
