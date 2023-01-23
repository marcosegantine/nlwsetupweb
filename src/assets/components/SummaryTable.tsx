import React from 'react';
import GenerateRangeDates from '../../utils/GenerateRangeDates';
import HabitDaily from './HabitDaily';
import HabitsDayWeek from './HabitsDayWeek';

const summaryDates = GenerateRangeDates();
const minSummaryDateSize = 19 * 7;
const amountOfDaysToFill = minSummaryDateSize - summaryDates.length;

const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-2">
        <HabitsDayWeek />
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-2">
        {summaryDates.map((date) => {
          return <HabitDaily key={date.toString()} />;
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((day, index) => {
            return <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded opacity-40 cursor-not-allowed"></div>;
          })}
      </div>
    </div>
  );
};

export default SummaryTable;
