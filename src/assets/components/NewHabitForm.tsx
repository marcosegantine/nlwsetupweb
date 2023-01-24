import { Check } from 'phosphor-react';
import React from 'react';

const NewHabitForm = () => {
  return (
    <form className="w-full flex flex-col max-w-xs  mt-6">
      <label htmlFor="title" className="font-semibold leading-tight mb-3">
        Qual seu comprometimento
      </label>

      <input
        className=" w-full rounded-lg p-4 mb-4 bg-zinc-800 placeholder:text-zinc-400"
        autoFocus
        type="text"
        id="title"
        placeholder="Exercícios, dormir bem etc..."
      />

      <label htmlFor="" className="font-semibold leading-tight mb-3">
        Qual a recorrência?
      </label>

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
