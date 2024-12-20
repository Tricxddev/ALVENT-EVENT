import React from 'react';
import data from '../../../../data/db.json'; // Import the data
import ellipsisHorizontal from '../../../assets/ellipsisHorizontal.svg';
import calender from '../../../assets/calender.svg';
import location from '../../../assets/location.svg';

const Section1 = () => {
  return (
    <>
     <section className="font-lato">
  <div className="flex flex-col lg:flex-row flex-wrap gap-[16px] pl-[30px] pr-[20px]">
    {data.existingEvent.map((event) => (
      <div
        className="parentContainer w-full lg:w-[240px] bg-[#FFFFFF] rounded-[10px] p-[8px] shadow-md"
        key={event.id}
      >
        <div className="image">
          <img src={event.bg} alt="Event Background" className='w-full'/>
        </div>
        <div className="dataInfo pl-[10px] pr-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-[32px] font-normal text-[#333333]">
              {event.day}{" "}
              <span className="text-[12px] font-light text-[#333333]">
                {event.month}
              </span>
            </p>
            <img src={ellipsisHorizontal} alt="More options" />
          </div>
          <div>
            <p className="text-[16px] font-bold text-[#333333] mt-[4px] mb-[4px]">
              {event.by}
            </p>
            <div className="flex gap-[8px] items-center">
              <img
                src={calender}
                alt="Calendar icon"
                className="w-[13.33px] h-[13.33px]"
              />
              <p className="text-[10px] font-light text-[#333333]">
                {event.date}
              </p>
            </div>
            <div className="flex gap-[8px] items-center mt-[4px]">
              <img
                src={location}
                alt="Location icon"
                className="w-[13.33px] h-[13.33px]"
              />
              <p className="text-[10px] font-light text-[#333333]">
                {event.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default Section1;
