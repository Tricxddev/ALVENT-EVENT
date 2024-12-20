import React from "react";
import heartRed from '../../assets/heartRed.svg';
import calender from '../../assets/calender.svg';
import location from '../../assets/location.svg';
import data  from '../../../../data/db.json';  // Import the data

const Section3 = () => {
  return (
    <>
      <section>
        {data.feacturedEvent.map((event) => (
          <div key={event.id}>
            <div>
              <button className="">{event.eventType}</button>
              <div>
                <img
                  src={event.bg}
                  loading="lazy"
                  alt={"event background"}
                />
              </div>
            </div>
            <div>
              <div>
                <p>{event.conference}</p>
                <img src={heartRed} alt="heart icon" />
              </div>
              <div>
                <div>
                  <img src={calender} alt="calendar icon" />
                  <p>{event.date}</p>
                </div>
                <div>
                  <img src={location} alt="location icon" />
                  <p>{event.location}</p>
                </div>
              </div>
              <div>
                <p>Organized by <span>{event.by}</span></p>
              </div>
              <div>
                <p>$ <span>{event.initialAmount}</span></p>
                <p>-</p>
                <p>$ <span>{event.lastAmount}</span></p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Section3;
