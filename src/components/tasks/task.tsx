import type { FC } from 'react';

import { Step, type TaskGroupType } from '.';

type TaskPropsType = Omit<TaskGroupType['tasks'][number], 'id'>;

const Task: FC<TaskPropsType> = ({ title, steps }) => {
  if (!steps.length) {
    return <p className="ml-2 text-secondary-foreground">{title}</p>;
  }

  return (
    <details className="ml-2">
      <summary className="text-secondary-foreground">{title}</summary>
      <ul className="ml-2">
        {steps.map(({ title, id }) => (
          <Step
            title={title}
            key={`steps-${id}`}
          />
        ))}
      </ul>
    </details>
  );
};

export default Task;
