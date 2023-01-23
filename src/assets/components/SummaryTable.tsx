import React from 'react';
import HabitDaily from './HabitDaily';
import HabitsDayWeek from './HabitsDayWeek';

const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-2">
        <HabitsDayWeek />
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-2">
        <HabitDaily />
      </div>
    </div>
  );
};

export default SummaryTable;
