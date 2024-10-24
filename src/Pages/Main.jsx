import React from 'react';
import Tabs from '../Components/Tabs'; 

const Main = () => {
  return (
    <div className=' pl-3 md:pl-5 pt-4 pr-3 md:pr-5 flex flex-col items-center'>
      <div className='w-full text-center flex justify-center max-w-6xl'>
        {/* Centering the Tabs component */}
        <Tabs />
      </div>
    </div>
  );
};

export default Main;
