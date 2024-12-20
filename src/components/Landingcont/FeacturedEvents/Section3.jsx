import React, { useEffect, useState } from "react";
import heartRed from "../../../assets/heartRed.svg";
import calender from "../../../assets/calender.svg";
import location from "../../../assets/location.svg";
import arrowblue from "../../../assets/arrowblue.svg";
import { Link } from "react-router-dom";

const Section3 = () => {
  const [events, setEvents] = useState([]); // State to store fetched events
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://alphaeventappdevmode.onrender.com/fetureventAllGet");
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setEvents(data.evntty); // Update state with fetched events
        } else {
          throw new Error("Failed to fetch events");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <section className="mt-[24px] px-[30px] md:px-[80px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through events dynamically */}
          {events.map((event) => (
            <Link key={event.eventID} to={`/Eventsdetailshome/${event.eventID}`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <button className="absolute top-[26px] left-[26px] bg-[#3A7BD5] px-[10px] py-[6px] sm:py-[10px] rounded-[10px] text-[#FFFFFF] text-[12px] sm:text-[14px] z-10">
                    {event.eventType || "General"}
                  </button>
                  <div className="w-full flex flex-col">
                    <img
                      src={event.eventImgURL || "default-image.jpg"}
                      loading="lazy"
                      alt="event background"
                      className="w-full h-[180px] sm:h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="px-[12px] sm:px-[20px]">
                  <div className="flex justify-between mt-[10px] sm:mt-[17px]">
                    <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
                      {event.eventTitle || "Event Title"}
                    </p>
                    <img src={heartRed} alt="heart icon" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[10px] mt-[8px] sm:mt-[16px]">
                    <div className="flex gap-[5px]">
                      <img src={calender} alt="calendar icon" />
                      <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                        {event.eventDate.eventStart}
                      </p>
                    </div>
                    <div className="flex gap-[5px]">
                      <img src={location} alt="location icon" />
                      <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                        {event.eventLocation.eventCity|| "Location"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
                  <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
                    Organized by{" "}
                    <span className="text-[#333333]">
                      {event.organizerName || "Unknown Organizer"}
                    </span>
                  </p>
                  <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
                    <div className="flex gap-[5px] text-[#FF6B6B]">
                      <p>
                        $ <span>{event.ticketPrice || "0"}</span>
                      </p>
                      {/* <p>-</p>
                      <p>
                        $ <span>{event.lastAmount || "0"}</span>
                      </p> */}
                    </div>
                    <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
                      Get Ticket
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
          <p className="text-[#3A7BD5] text-[12px] sm:text-[14px]">
            <Link to="/ExploreEvents">SEE MORE EVENTS</Link>
          </p>
          <img src={arrowblue} alt="" className="w-[16px] sm:w-auto" />
        </div>
      </section>
    </>
  );
};

export default Section3;
