import React, { useState, useEffect } from "react";





const Amazing = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("/contents/db.json")
      .then((contents) => contents.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);


  return (
    <div className=' font-Lato px-5 md:px-[80px] w-full  items-center py-[60px]'>
      <div className='h-full md:h-[87px] mb-[40px] md:mb-[60px] w-full mx-auto items-center  text-center  '>
        <h4 className='text-[25px] w-full text- md:text-[28px] lg:text-[30px] leading-[25px] md:leading-[36px] mb-[10px]  md:mb-[25px]  md:h-[36px] lg:mb-3 font-bold'>Find Your Next <span className='text-customRed'>  Amazing  </span>Experience Right Here</h4>
        <p className='font-light w-full leading-[20px]  md:leading-normal text-customDarkgrey  md:text-[18px] h-[36px]     text-[18px]   '>Dive into Creativity and Fun—hands-on workshops, vibrant events, and more for everyone!</p>
      </div>


      <div className=" place-content-center grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  items-center  max-w-full  gap-[20px] ">

        {articles.map((article) => {


          return (
            <div
              key={article.id}
              className="bg-white items-center shadow text-center w-full   rounded-[20px]  h-[253px]  "
            >
              <div className="image-container  gap-x-[20px]">
                <img
                  src={`https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731074046/${article.imagePublicId}`}
                  alt={article.title}
                  className="w-full h-[170px]  "
                  loading="lazy"
                />
              </div>
              <div className="w-[90%] h-[83px] ">
              <p className= "  font-bold  text-center py-[17.5px]  px-[10px] h-[48px]">
                {article.description}
              </p></div>


            </div>
          );
        })}
      </div>




                  
           
    
    </div>
  )
}

export default Amazing