import React from "react";
import heartRed from '../../assets/heartRed.svg';
import calender from '../../assets/calender.svg';
import location from '../../assets/location.svg';
import {Image} from 'cloudinary-react';
import data  from '../../../data/db.json';  // Import the data

const Section3 = () => {
  return (
    <>
      <section>
     
            <div>
              <button className="">Event Type</button>
              <div>
              <Image className='' loading='lazy' cloudName="dqtyrjpeh" 
          publicId= "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731005210/Image_1_derhit.png">
          </Image>
              </div>
            </div>
            <div>
              <div>
                <p>Renewed Conference</p>
                <img src={heartRed} alt="heart icon" />
              </div>
              <div>
                <div>
                  <img src={calender} alt="calendar icon" />
                  <p>11-05-2024</p>
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
