export { default as Group } from './group';
export { default as Event } from './event';
export { default as Events } from './main';

type EventGroupType = {
  id: string;
  events: {
    id: string;
    title: string;
  }[];
};

export type { EventGroupType };
