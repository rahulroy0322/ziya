import type { FC } from 'react';

import type { TaskGroupType } from '.';

type StepPropsType = Omit<
  TaskGroupType['tasks'][number]['steps'][number],
  'id'
>;

const Step: FC<StepPropsType> = ({ title }) => <li>{title}</li>;

export default Step;
