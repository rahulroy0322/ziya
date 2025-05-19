const { format: monthFormat } = Intl.DateTimeFormat(undefined, {
  month: 'long',
});
const { format: dayFormat } = Intl.DateTimeFormat(undefined, {
  weekday: 'long',
});
const { format: timeFormat } = Intl.DateTimeFormat(undefined, {
  day: '2-digit',
});

const useDate = (time = new Date()) => {
  const date = timeFormat(time);
  const month = monthFormat(time);
  const day = dayFormat(time);

  return {
    date,
    month,
    day,
  };
};

export default useDate;
