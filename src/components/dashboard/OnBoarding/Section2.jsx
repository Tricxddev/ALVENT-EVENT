import React from 'react';
import belleNotoYellow from '../../../assets/belleNotoYellow.svg';

const Section2 = () => {
  return (
    <>
      <section>
        <div className="flex items-center gap-[5px] pl-[30px] pb-[24px] font-lato">
          <p className="text-[24px] font-bold text-[#333333]">Upcoming Events</p>
          <img src={belleNotoYellow} alt="icon" className="w-[20px] h-[20px]" />
        </div>
      </section>
    </>
  );
};

export default Section2;
