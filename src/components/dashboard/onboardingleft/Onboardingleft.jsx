import React, { useState,useEffect } from "react";
import logoOnboard from "../../../assets/logoOnboard.svg"
import dashboardWhite from "../../../assets/dashboardWhite.svg"
import dashboardGrayIcon from "../../../assets/dashboardGrayIcon.svg"
import eventIcon from "../../../assets/eventIcon.svg"
import eventWhiteIcon from "../../../assets/eventWhiteIcon.svg"
import reportIcon from "../../../assets/reportIcon.svg"
import reportIconWhite from "../../../assets/reportIconWhite.svg"
import paymentIcon from "../../../assets/paymentIcon.svg"
import settingIcon from "../../../assets/settingIcon.svg"
import settingIconWhite from "../../../assets/settingIconWhite.svg"
import supportIcon from "../../../assets/supportIcon.svg"
import supportWhiteIcon from "../../../assets/supportWhiteIcon.svg"
import createEventIcon from "../../../assets/createEventIcon.svg"


import { Link } from 'react-router-dom';



const Onboardingleft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userID, setUserID] = useState(''); // User email state
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserID(storedEmail);
      fetchUserID(storedEmail);
    }
  }, []);
  const fetchUserID = async (userEmail) => {
    try {
      const response = await fetch(`https://alphaeventappdevmode.onrender.com/userNamFetch/${userEmail}`);
      console.log("NEW:",response)
      if (response.ok) {
        const data = await response.json();
        let useID=data.data.userID
        console.log('Fetched ID:', userID);
        setUserID(useID); 
      } else {
        console.error('Failed to fetch total revenue:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching total revenue:', error);
    }
  };

  const token= localStorage.getItem("authToken")

  const handleMouseLeave = () => {
    if (window.innerWidth >= 300) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 100);
    }
  };


  const [isLeftComponentVisible, setIsLeftComponentVisible] = useState(false);

  const toggleLeftComponent = () => {
    setIsLeftComponentVisible((prevState) => !prevState);
  };


  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const linkStyle = (link) =>
    activeLink === link
      ? "bg-[#3A7BD533] text-white"
      : "text-[#757575] bg-transparent";

  const iconStyle = (link, grayIcon, whiteIcon) =>
    activeLink === link ? whiteIcon : grayIcon;

  return (
    <div className="flex">  <div

      onMouseLeave={handleMouseLeave}
      className={`${isMenuOpen ? "block" : "hidden"
        } absolute transition-all opacity-100 sm:duration-500 sm:ease-in-out top-20 md:top-0  md:flex md:relative pt-[24px] pr-[10px] pb-[151px] pl-[28px] bg-customdarkblue z-10 w-[280px] h-40md:h-[1024px] hover:opacity-100 md:opacity-100`}
    >
      {/* dashboard with icons section */}
      <div className="flex flex-col md:gap-y-[40px] font-Lato  text-white">
        <ol className=" w-[258px]">
          <Link to="/"> <img
            className="pt-[12px] w-[200px] px-[24px] h-[48px]"
            src={logoOnboard}
            alt="alvent-logo"
          /></Link>
        </ol>

        <ol className="gap-y-[59px] md:gap-y-[304px] font-bold text-[24px] font-Lato flex flex-col">
          <ol className="flex font-bold text-customGreySech text-[24px] flex-col gap-y-[10px]">
            <Link to={`/OnboardingMain/?token=${token}`}><li
              className={`flex items-center w-[228px] h-[60px] gap-[20px] rounded-[12px] pl-[24px] cursor-pointer hover:text-white hover:bg-[#3A7BD533] ${linkStyle(
                "Dashboard"
              )}`}
              onClick={() => handleClick("Dashboard")}
            >
              <img
                src={iconStyle("Dashboard", dashboardGrayIcon, dashboardWhite)}
                alt="Dashboard Icon"
                className="icon"
              />

              <h3>Dashboard</h3>

            </li>
            </Link>


            <Link to={`/OnboardEvent/?token=${token}`}><li
              className={`flex items-center rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px] cursor-pointer hover:text-white hover:bg-[#3A7BD533] ${linkStyle(
                "Event"
              )}`}
              onClick={() => handleClick("Event")}
            >
              <img
                src={iconStyle("Event", eventIcon, eventWhiteIcon)}
                alt="Event Icon"
                className="icon"
              />

              <h3>Event</h3>
            </li>
            </Link>


            <li
              className={`items-center flex rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px] cursor-pointer hover:text-white hover:bg-[#3A7BD533] ${linkStyle(
                "Report"
              )}`}
              onClick={() => handleClick("Report")}
            >
              <img
                src={iconStyle("Report", reportIcon, reportIconWhite)}
                alt="Report Icon"
                className="icon"
              />
              <h3>Report</h3>
            </li>


            <li className="flex hover:text-white items-center hover:bg-customSkyblue rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
              <img src={paymentIcon} alt="" />
              <h3>Payment</h3>
            </li>

            <li
              className={`items-center flex rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px] cursor-pointer hover:text-white hover:bg-[#3A7BD533] ${linkStyle(
                "Settings"
              )}`}
              onClick={() => handleClick("Settings")}
            >
              <img
                src={iconStyle("Settings", settingIcon, settingIconWhite)}
                alt="Settings Icon"
                className="icon"
              />

              <h3>Settings</h3>
            </li>

            <li
              className={`items-center flex rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px] cursor-pointer hover:text-white hover:bg-[#3A7BD533] ${linkStyle(
                "Support"
              )}`}
              onClick={() => handleClick("Support")}
            >
              <img
                src={iconStyle("Support", supportIcon, supportWhiteIcon)}
                alt="Support Icon"
                className="icon"
              />

              <h3>Support</h3>
            </li>
          </ol>

          <ol className={`flex w-[238px] h-[60px] hover:text-white rounded-[12px]  pl-[15px] items-center gap-[10px]
              ${linkStyle(
            "createEvent"
          )}`}
            onClick={() => handleClick("createEvent")}   >

            
            <Link to={`/createEvent/?token=${token}`}> <button className="items-center  h-[24px] flex gap-4  cursor-pointer hover:text-white"    >

        
              Create Event
              <img
                src={iconStyle("createEvent", createEventIcon, createEventIcon)}
                alt="Create Event Icon"
                className="icon w-[16px] h-[16px]"
              /></button>
            </Link>


          </ol>
        </ol>
      </div>

    </div>


      {/* Button to Toggle the Visibility on small screens */}





      <button
        onClick={toggleMenu}
        className="flex md:hidden absolute top-[79.5px] z-40 left-1 px-1 py-1 bg-customDarkgrey text-white rounded-md"
      >
        {!isMenuOpen ? (
          <span className="text-xl">☰</span> // Hamburger icon
        ) : (
          <span className="text-xl">X</span> // Close icon
        )}
      </button>
    </div>

  );
};

export default Onboardingleft;
