import React from 'react';
import Tabs from '../Components/Tabs'; // Adjust the import path based on your folder structure

const Main = () => {
  return (
    <div className='pl-5 pt-5 pr-5 flex flex-col items-center'>
      <div className='w-full text-center flex justify-center max-w-6xl'>
        {/* Centering the Tabs component */}
        <Tabs />
      </div>
    </div>
  );
};

export default Main;
