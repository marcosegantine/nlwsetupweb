import dayjs from 'dayjs';

function GenerateRangeDates() {
  const firstDayOfYear = dayjs().startOf('year');
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }
  return dates
}

export default GenerateRangeDates;
