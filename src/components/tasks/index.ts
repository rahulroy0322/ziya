export { default as Group } from './group';
export { default as Task } from './task';
export { default as Step } from './step';
export { default as Tasks } from './main';

type TaskGroupType = {
  id: string;
  tasks: {
    id: string;
    title: string;
    steps: {
      id: string;
      title: string;
    }[];
  }[];
};

export type { TaskGroupType };
