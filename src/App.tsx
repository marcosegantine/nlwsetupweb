import './styles/global.css';
import { useState } from 'react';
import Header from './assets/components/Header';
import SummaryTable from './assets/components/SummaryTable';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
          <Header />
          <SummaryTable/>
        </div>
      </div>
    </>
  );
}

export default App;
