import React, { useState, useEffect, useRef } from "react";
import ellipsis from '../../../assets/ellipsis.svg';
import arrowGreenUp from '../../../assets/arrowGreenUp.svg';
import arrowRedDown from '../../../assets/arrowRedDown.svg';
//import data from '../../../../data/db.json'; // Import the data

const Section1 = () => {
  const [totalRevenue, setTotalRevenue] = useState(null); // Total revenue state
  const [ticketsSold, setTotalTicketSld] = useState(null); // Total revenue state
  const [userEmail, setUserEmail] = useState(''); // User email state
  //const {   engagementRate } = data; // Destructure the data


  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      fetchTotalRev(storedEmail);
      fetchTotalTic(storedEmail);
    }
  }, []);
  const fetchTotalRev = async (userEmail) => {
    try {
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/orGTicketRev/${userEmail}`);
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched REV:', data.totalRevenue);
        setTotalRevenue(data.totalRevenue); // Fallback to 0 if undefined
      } else {
        console.error('Failed to fetch total revenue:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
      fetchTotalTic(storedEmail);
      fetchTotalRev(storedEmail)
    }
  }, []);
  const fetchTotalTic = async (userEmail) => {
    try {
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/totTikContDisp/${userEmail}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched TIC:', data.ticketsSold);
        setTotalTicketSld(data.ticketsSold); // Fallback to 0 if undefined
      } else {
        console.error('Failed to fetch total revenue:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };

  return (
    <section>
      <div className="parentContainer  flex flex-col lg:flex-row flex-wrap gap-[24px] pl-[30px] pr-[20px] pt-[48px] pb-[48px] ">
        {/* Total Revenue */}
        
          <div
            className="totalRevenue w-full mx-auto md:w-[68%] lg:w-[30%] bg-white px-[24px] py-[24px] rounded-[10px]"
          >
            <div className="up flex justify-between  mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Total Revenue</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>
                    ₦<span>{totalRevenue !== null ? totalRevenue : 'Loading...'}</span>
                  </p>
                </div>
                <div className="flex bg-[#E4FEDD] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowGreenUp} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#4AAA2F] text-[14px] font-light">
                    +<span>1</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        

        {/* Tickets Sold */}
           <div
             className="ticketsSold w-full mx-auto md:w-[68%] lg:w-[30%] bg-white px-[24px] py-[24px] rounded-[10px]"
          >
            <div className="up flex justify-between mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Tickets Sold</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>{ticketsSold !== null ? ticketsSold : 'Loading...'}</p>
                </div>
                <div className="flex bg-[#FFE4E4] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowRedDown} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#D71919] text-[14px] font-light">
                    +<span>1</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
      

        {/* Engagement Rate */}
        {/* {engagementRate.map((engagement) => (
          <div
            key={engagement.id}
            className="engagementRate w-full mx-auto md:w-[68%] rounded-[10px] lg:w-[30%] bg-white px-[24px] py-[24px]"
          >
            <div className="up flex justify-between mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Engagement Rate</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>{engagement.Rate}%</p>
                </div>
                <div className="flex bg-[#E4FEDD] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowGreenUp} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#4AAA2F] text-[14px] font-light">
                    +<span>{engagement.percentage}</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Section1;
