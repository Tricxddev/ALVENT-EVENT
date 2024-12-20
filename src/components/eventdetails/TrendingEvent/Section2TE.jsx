import React from "react";
import heartWhite from '../../../assets/heartWhite.svg';
import calenderWhite from '../../../assets/calenderWhite.svg';
import locationWhite from '../../../assets/locationWhite.svg';
import arrowblue from '../../../assets/arrowblue.svg';
import data from '../../../../data/db.json'; // Import the data
import { Link } from 'react-router-dom';
const Section3 = () => {
  return (
    <>
      <section className="mt-[24px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[30px] lg:gap-[40px] overflow-hidden"> {/* Made the grid responsive */}


          {data.trendingEvent.map((event) => (
            <Link key={event.id} to={`/eventsdetailshome/${event.id}`}>
              <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row w-full max-w-[500px] mx-auto">
                <div className="relative sm:w-[200px] md:w-[230px] lg:w-[250px]">
                  <button className="absolute top-[20px] left-[20px] bg-[#3A7BD5] px-[10px] sm:px-[12px] py-[6px] rounded-[10px] text-[#FFFFFF] text-[12px] sm:text-[14px] z-10">
                    {event.eventType}
                  </button>
                  <img
                    src={event.bg}
                    loading="lazy"
                    alt="event background"
                    className="w-full h-[150px] sm:h-full object-cover" /* Ensures image fits */
                  />
                </div>
                <div className="lightBlueBg bg-[#3A7BD5] w-full">
                  <div className="px-[12px] sm:px-[20px]">
                    <div className="flex justify-between mt-[12px] sm:mt-[17px]">
                      <p className="text-[18px] sm:text-[24px] font-bold text-[#FFF0F0]">
                        {event.conference}
                      </p>
                      <img src={heartWhite} alt="heart icon" className="w-[16px] sm:w-auto" />
                    </div>
                    <div className="flex flex-col gap-[8px] sm:gap-[10px] mt-[10px] sm:mt-[16px]">
                      <div className="flex gap-[5px]">
                        <img src={calenderWhite} alt="calendar icon" />
                        <p className="text-[12px] sm:text-[14px] text-[#FFF0F0] font-light">
                          {event.date}
                        </p>
                      </div>
                      <div className="flex gap-[5px]">
                        <img src={locationWhite} alt="location icon" />
                        <p className="text-[12px] sm:text-[14px] text-[#FFF0F0] font-light">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
                    <p className="text-left text-[#FFF0F0] font-bold text-[12px] sm:text-[14px]">
                      Organized by <span className="text-white">{event.by}</span>
                    </p>
                    <div className="flex justify-between items-center mt-[8px] lg:mt-[40px]">
                      <div className="flex gap-[5px] text-[#FFF0F0]">
                        <p>
                          $ <span>{event.initialAmount}</span>
                        </p>
                        <p>-</p>
                        <p>
                          $ <span>{event.lastAmount}</span>
                        </p>
                      </div>
                      <button className="bg-[#3A7BD5] text-white border-2 border-[#FFF0F0] px-[16px] sm:px-[22px] py-[4px] sm:py-[6px] rounded-[10px]">
                        Get Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          ))}
        </div>
        <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
          <p className="text-[#3A7BD5] text-[12px] sm:text-[14px]"> <Link to="/ExploreEvents">SEE MORE EVENTS</Link></p>
          <img src={arrowblue} alt="arrow" className="w-[12px] sm:w-auto" />
        </div>
      </section>
    </>
  );
};

export default Section3;







