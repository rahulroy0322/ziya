// eslint-disable-next-line no-unused-vars
type SubscriberType<T> = (value: T) => void;

const Signal = <T>(value: T) => {
  const subscribers = new Set<SubscriberType<T>>();

  const get = (): T => value;
  const set = (newValue: T): void => updateAll(newValue);

  const updateAll = (_value: T): void => {
    value = _value;
    subscribers.forEach((sub) => sub(value));
  };

  const subscribe = (fn: SubscriberType<T>): { (): void } => {
    subscribers.add(fn);
    fn(value);
    return () => subscribers.delete(fn);
  };

  const destroyAll = () => {
    updateAll(value);
    subscribers.clear();
  };

  return {
    get,
    set,
    subscribe,
    destroyAll,
  };
};

export default Signal;
