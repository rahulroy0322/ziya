import type { FC } from 'react';

import { Group, type TaskGroupType } from '.';

const Tasks: FC = () => {
  const taskGroups: TaskGroupType[] = [
    {
      id: '10-11',
      tasks: [
        {
          id: '1',
          title: 'Task One',
          steps: [],
        },
        {
          id: '2',
          title: 'Task Two',
          steps: [
            {
              id: 'step-id',
              title: 'Step One',
            },
          ],
        },
        {
          id: '3',
          title: 'Task Three',
          steps: [
            {
              id: 'step-id-2',
              title: 'Step Todo',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="absolute flex flex-col gap-2 w-60 overflow-auto max-h-80 p-3 right-50 top-20 bg-secondary">
      <h3 className="font-bold">Tasks</h3>

      {taskGroups.map(({ id, tasks }) => (
        <Group
          id={id}
          tasks={tasks}
          key={`section-${id}`}
        />
      ))}
    </div>
  );
};

export default Tasks;
