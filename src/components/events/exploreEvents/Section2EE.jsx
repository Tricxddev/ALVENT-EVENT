import React, { useState } from 'react';
import arrowDown from '../../../assets/arrowDown.svg';

const Section2EE = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('All');

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <section className="mt-[90px]">
        <div className="ml-[100px] lg:w-[578px] flex flex-wrap gap-[25px] text-[18px] font-bold text-[#757575]">
          {/* All Button */}
          <button
            onClick={() => handleButtonClick('All')}
            style={{
              color: activeButton === 'All' ? '#3A7BD5' : '#000000', // Active color or default
            }}
          >
            All
          </button>

          {/* Your Picks Button */}
          <button
            onClick={() => handleButtonClick('Your Picks')}
            style={{
              color: activeButton === 'Your Picks' ? '#3A7BD5' : '#000000',
            }}
          >
            Your Picks
          </button>

          {/* Today Button */}
          <button
            onClick={() => handleButtonClick('Today')}
            style={{
              color: activeButton === 'Today' ? '#3A7BD5' : '#000000',
            }}
          >
            Today
          </button>

          {/* This Week Button */}
          <button
            onClick={() => handleButtonClick('This week')}
            style={{
              color: activeButton === 'This week' ? '#3A7BD5' : '#000000',
            }}
          >
            This week
          </button>

          {/* Free Button */}
          <button
            onClick={() => handleButtonClick('Free')}
            style={{
              color: activeButton === 'Free' ? '#3A7BD5' : '#000000',
            }}
          >
            Free
          </button>

          {/* Categories Button with Icon */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleButtonClick('Categories')}
              style={{
                color: activeButton === 'Categories' ? '#3A7BD5' : '#000000',
              }}
            >
              Categories
            </button>
            <img src={arrowDown} alt="" className="pt-[7px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2EE;
