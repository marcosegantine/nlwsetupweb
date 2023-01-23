import React from 'react';
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const HabitsDayWeek = () => {
  return (
    <>
      {weekDays.map((weekDay, index) => (
        <div
          key={`${weekDay}-${index}`}
          className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold"
        >
          {weekDay}
        </div>
      ))}
    </>
  );
};

export default HabitsDayWeek;
