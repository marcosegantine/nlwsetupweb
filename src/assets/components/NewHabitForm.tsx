import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useState } from 'react';
import { FormEvent } from 'react';

const availableWeekDays = [
  'Domingo',
  'Segunda',
  'Terça-feira',
  'Quarta-Feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const NewHabitForm = () => {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(title, weekDays);
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);

      setWeekDays(weekDaysWithRemovedOne);
    } else {
      const weekDaysWithAddOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight mb-3">
        Qual seu comprometimento
      </label>

      <input
        onChange={(event) => setTitle(event.target.value)}
        className=" w-full rounded-lg p-4 mb-6 bg-zinc-800 placeholder:text-zinc-400"
        autoFocus
        type="text"
        id="title"
        placeholder="Exercícios, dormir bem etc..."
      />

      <label htmlFor="" className="font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <div className="flex flex-col mt-6 gap-2">
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              key={weekDay}
              className="flex items-center gap-3 group"
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div
                className="w-8 h-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg flex items-center justify-center
              group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-500"
              >
                <Checkbox.Indicator className="">
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="font-semibold leading-tight ">{weekDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="font-semibold flex items-center justify-center bg-green-600 gap-3 p-4 rounded-lg mt-6 hover:bg-green-500"
      >
        <Check size={24} />
        Confirmar
      </button>
    </form>
  );
};

export default NewHabitForm;
