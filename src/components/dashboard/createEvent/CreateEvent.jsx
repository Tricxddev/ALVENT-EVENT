import React, { useState, useRef } from "react";
import cloudIcon from "../../../assets/cloudIcon.svg";
// import Section1 from './Section1
import Onboardingleft from "../onboardingleft/Onboardingleft";
import ProfileSearchBar from "../OnBoarding/ProfileSearchBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";
import Details from './Details';
import Ticketing from './Ticketing';

const CreateEvent = () => {
  const fileInputRef = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState("details"); // Track active tab

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setUploadedImage(previewURL);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("eventTitle", event.target.eventTitle?.value || "");
    formData.append("eventDesc", event.target.description?.value || "");
    formData.append("eventCat", event.target.eventCategory?.value || "");
    formData.append("eventType", event.target.eventFormat?.value || "");
    if (selectedDate) formData.append("eventDate",{
      eventStart: selectedDate?.startDate?.toISOString() || "", // Use proper date range
      eventEnd: selectedDate?.endDate?.toISOString() || "",
    });
    formData.append("isPrivate", isToggled);
    formData.append("eventCapacity", event.target.eventCapacity?.value || "");
    formData.append("maximumattedees",event.target.maximumattedees?.value || "");
    formData.append("customTags", event.target.customTags?.value || "");
    formData.append("accessibilityOption",event.target.accessibilityOption?.value || "");
    formData.append(
      "eventVenue", event.target.eventVenue?.value || "",
    );
    formData.append(
      "eventState", event.target.eventState?.value || "",
    );
    formData.append(
      "eventCity", event.target.eventCity?.value || "",
    );
    formData.append(
      "eventCountry", event.target.eventCountry?.value || "",
    );
    formData.append(
      "tickeType", event.target.tickeType?.value || "",
    );
    formData.append(
      "ticketPrice", event.target.ticketPrice?.value || "",
    );

    if (uploadedImage) {
      const imageFile = fileInputRef.current.files[0];
      formData.eventImgURL = imageFile; // Add to formData
    }

    // if (uploadedImage) {
    //   const imageFile = fileInputRef.current.files[0];
    //   formData.append("image", imageFile);
    // }

    try {
      const response = await axios.post(
        `https://alphaeventappdevmode.onrender.com/createVnt/${userID}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Event created successfully!");
    } catch (error) {
      alert("Failed to create event. Please try again.");
    }
  };

  return (
    <section className="flex w-[100%] overflow-hidden">
      <div className="max-w-[50%]">
        <Onboardingleft />
      </div>

      <div className="pl-8 pr-6 overflow-auto">
        <ProfileSearchBar />
        <div className="font-Lato pt-[10px] bg-white h-auto">
          <div className="pb-[8px] items-center justify-between flex h-[38px] max-w-[1032px]">
            <h2 className="font-bold text-[32px] leading-[38.4px]">Create an event</h2>
            <h2 className="font-light font-leading-[16px]">All changes saved</h2>
          </div>
          <div className="max-w-[1032px] h-[5px] rounded-[8px] border border-customLighterGray">
            <ol className="rounded-[8px] w-[285px] h-[5px] bg-black"></ol>
          </div>

          <div className="max-w-[1032px] flex h-[56px] mt-[8px] p-[8px] rounded-[12px] border-[1px] justify-between border-[#757575] text-black">
            <div
              id="details"
              onClick={() => setActiveTab("details")}
              className={`w-[508px] h-[40px] place-items-center rounded-[8px]  cursor-pointer ${
                activeTab === "details" ? "bg-customSkyblue text-white"  : ""
              }`}
            >
              <h6 className="pt-[4px] text-center font-bold w-[51px] h-[16px]">Details</h6>
            </div>
            <div
              id="ticketing"
              onClick={() => setActiveTab("ticketing")}
              className={`w-[508px] h-[40px] place-items-center rounded-[8px]  cursor-pointer ${
                activeTab === "ticketing" ? "bg-customSkyblue text-white" : ""
              }`}
            >
              <h6 className="pt-[4px] font-bold w-[51px] h-[16px]">Ticketing</h6>
            </div>
          </div>
        </div>

        {/* hover:bg-customSkyblue hover:text-white */}

        {/* Render the active tab's content */}
        {activeTab === "details" && <Details />}
        {activeTab === "ticketing" && <Ticketing />}
      </div>
    </section>
  );
};

export default CreateEvent;




























































// import React, { useState, useRef } from "react";
// import cloudIcon from "../../../assets/cloudIcon.svg"
// // import Section1 from './Section1
// import Onboardingleft from "../onboardingleft/Onboardingleft";
// import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar"
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";







// const CreateEvent = () => {
//   // Ref to programmatically trigger the file input
//   const fileInputRef = useRef(null);

//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [isToggled, setIsToggled] = useState(true);


 
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);


//   // Handle file upload
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       console.log("Selected file:", file.name); // Handle the uploaded file here
//       // Create a preview URL for the uploaded image
//       const previewURL = URL.createObjectURL(file);
//       setUploadedImage(previewURL);
//     }
//   };

//   // Programmatically click the hidden input
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   }

// // Handle form submission
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   console.log("Submitting form...");

//   const formData = new FormData();

//   formData.append("eventTitle", event.target.eventTitle?.value || "");
//   formData.append("description", event.target.description?.value || "");
//   formData.append("eventCategory", event.target.eventCategory?.value || "");
//   formData.append("eventFormat", event.target.eventFormat?.value || "");
//   if (startDate) {
//     formData.append("startDate", startDate.toISOString());
//   }

//   // Check if the endDate is set and append it to formData
//   if (endDate) {
//     formData.append("endDate", endDate.toISOString());
//   }
//   formData.append("isPrivate", isToggled);
//   formData.append("eventCapacity", event.target.eventCapacity?.value || "");
//   formData.append("maximumattedees", event.target.maximumattedees?.value || "");
//   formData.append("customTags", event.target.customTags?.value || "");
//   formData.append("accessibilityOption", event.target.accessibilityOption?.value || "");

//   if (uploadedImage) {
//     const imageFile = fileInputRef.current.files[0];
//     formData.append("image", imageFile);
//   }

//   try {
//     const response = await axios.post("http://localhost:5001/api/events", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log(response.data);
//     alert("Form submitted successfully!");
//   } catch (error) {
//     console.error("Error submitting form:", error.response || error.message);
//     alert("Failed to submit form. Please try again.");
//   }
// };




//   return (
//     <section className='flex w-[100%]  '>
//       <div className='max-w-[50%]'><Onboardingleft /></div>

//       <div className='pl-8 pr-6  overflow-auto'>
//         < ProfileSearchBar /> 
// <div className="max-w-[1140px] pt-[48px] pr-[40px] pl-[64px] h-auto">

// {/* first section */}
// <div className="max-w-[1032px] h-[127px]">
// <div className='  pb-[8px]  items-center justify-between flex h-[38px] max-w-[1032px]'>
//             <h2 className='font-bold text-[32px] leading-[38.4px] '>Create an event</h2>
//             <h2 className='font-light font-leading-[16px]'>All changes saved</h2>
//           </div>

//           <div className='max-w-[1032px]  h-[5px] rounded-[8px] border border-customLighterGray'>
//             <ol className='rounded-[8px] w-[285px] h-[5px] bg-black'></ol>
//           </div>

//           <div className='max-w-[1032px]   flex  h-[56px] mt-[8px]  p-[8px] rounded-[12px] border-[1px] justify-between  border-customLighterGray'>
//             <div className='w-[508px]  h-[40px] place-items-center rounded-[8px]  hover:bg-customSkyblue '   ><h6 className='pt-[4px] text-center  font-bold w-[51px] h-[16px] '>Details</h6></div>
//             <div className='w-[508px] h-[40px]  place-items-center rounded-[8px]  hover:bg-customSkyblue '   ><h6 className='pt-[4px]  font-bold w-[51px] h-[16px] '>Ticketing</h6></div>
//           </div>
// </div>

// {/* second section */}

// <div className='max-w-[1032px] mt-[32px] rounded-[12px] border-customLighterGray pt-[52px] pb-[40px] px-[40px] h-[335px] roubded-[12px] border-[0.8px]'>
//             <div><h4 className='font-bold  text-[18px] mb-[16px] '>
//               Event Banner
//             </h4></div>

//             {/* select image section */}
//             <div className=' items-center  text-center max-w-[952px] h-[200px] rounded-[12px] border-[0.8px] '>
//               <div className='w-[284px] mx-auto py-[46.5px]  flex flex-col gap-y-[24px] h-[107px]' onClick={handleUploadClick}
//               >
//                 {uploadedImage ? (
//                   // Uploaded image preview
//                   <img
//                     src={uploadedImage}
//                     alt="Uploaded Preview"
//                     className="w-full object-fill h-32  rounded-[12px]"
//                   />
//                 ) : (<div>
//                   <ol className='mx-auto flex  flex-col'><img className='mx-auto ' src={cloudIcon} alt="cloudIcon" /></ol>
//                   <ol className=''>
//                     <li>Click to upload or drag and drop</li>
//                     <li>PNG, JPG or GIF (MAX. 800x400px)</li>
//                   </ol></div>)}
//               </div>

//               {/* Hidden file input */}
//               <input
//                 type="file"
//                 accept="image/png, image/jpeg, image/gif"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 className="hidden"
//               />

//             </div>

//           </div>




//           {/* Third section */}
//           <div className="max-w-[1032px] mt-[24px] min-h-[750px]  border-[0.8px] rounded-[12px] px-[40px] py-[40px]">
//           <h2 className="font-semibold text-lg mb-4">Basic Information</h2>
//           <form className="space-y-4 " onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="eventTitle" className="block font-medium mb-2">Event Title</label>
//                 <input
//                 name="eventTitle"
//                   type="text"
//                   id="eventTitle"
//                   placeholder="Enter event title"
//                   className="w-full border h-[52px] border-customLighterGray rounded-[12px] px-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Description */}
//               <div>
//                 <label htmlFor="description" className="block font-medium mb-2">Description</label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   placeholder="Enter event description"
//                   className="w-full  border-customLighterGray border rounded-[12px] px-[20px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   rows="3"
//                 ></textarea>
//               </div>

//               {/* Dropdowns for Event Category and Format */}
//               <div className="grid grid-cols-2 gap-[84px]">
//                 <div>
//                   {/* <label htmlFor="eventCategory" className="block font-medium mb-2">Event Category</label> */}
//                   <select
//                     id="eventCategory" name="eventCategory"
//                     className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Event Category</option>
//                     <option value="conference">Conference</option>
//           <option value="workshop">Workshop</option>
//           <option value="seminar">Seminar</option>
//                   </select>
//                 </div>
//                 <div>
//                   {/* <label htmlFor="eventFormat" className="block font-medium mb-2">Event Format</label> */}
//                   <select
//                     id="eventFormat" name ="eventFormat"
//                     className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >

//                     <option value="">Event Format</option>
//                     <option value="online">Online</option>
//                     <option value="in-person">In-Person</option>
//                   </select>
//                 </div>
//               </div>
            
//         {/* Event date section */}
// <div className="flex  justify-between">
//             <h2 className="font-medium text-gray-800 text-[16px] mb-2">Starts</h2>
//             <h2 className="font-medium text-gray-800 text-[16px] mb-2">Ends</h2>
//             </div>



//        <div className="flex  h-[145px] justify-between">
//         <div className="w-[288px] h-[64px]">
//           {/* first date */}
//           <div className="bg-gray-100 border  border-gray-300 rounded-md p-4 flex items-center">
//             <div className="">
//               <label
//                 htmlFor="startDate" name="startDate"
//                 className="block text-gray-500 text-sm mb-1"
//               >
//                Label (mm/dd/yyyy)
//               </label>
//               <DatePicker
//                 selected={startDate}
//                 onChange={(date) => setStartDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 placeholderText="mm/dd/yyyy"
//                 className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
//               />
//             </div>
          

//           </div>
//         </div>


// {/* second date */}
//         <div className="w-[288px] h-[64px]">
          
//           <div className="bg-gray-100 border w-[288px] border-gray-300 rounded-md p-4 flex items-center">
//             <div className="">
//               <label
//                 htmlFor="endDate" name="endDate"
//                 className="block text-gray-500 text-sm mb-1"
//               >
//                Label (mm/dd/yyyy)
//               </label>
//               <DatePicker
//                 selected={endDate}
//                 onChange={(date) => setEndDate(date)}
//                 dateFormat="MM/dd/yyyy"
//                 placeholderText="mm/dd/yyyy"
//                 className="w-full bg-gray-100 text-gray-700 text-sm border-none focus:outline-none"
//               />
//             </div>
          
//           </div>
//         </div>
//         </div>



//          {/* Advanced options  */}

//         <div className="max-w-[1032px]  mt-[32px]  rounded-[12px] border-[0.8px] p-[40px]  gap-[20px]">

//           <div className="font-bold leading-[27px] text-[18px]"><h5 >Advanced Options</h5></div>
//           <div className=" justify-between flex w-full mt-10">
//             <ol>Make event private</ol>

//             <ol>
//               <div
//                 className={`relative w-[48px] h-[28px] flex items-center bg-customSkyblue rounded-[100px] cursor-pointer 
//           ${isToggled ? "bg-customSkyblue" : "bg-customlightgray"}`}
//                 onClick={handleToggle}
//               >
//                 <div
//                   className={`absolute left-0 w-[24px] h-[24px] bg-white rounded-[100px] shadow-md transform transition-transform duration-300 
//             ${isToggled ? "translate-x-4" : ""}`}
//                 ></div></div>
//             </ol>
//           </div>

//           {/* Event capacity*/}
//           <div>
//             <label htmlFor="eventcapacity"   className="block  font-medium mb-2">Event capacity</label>
//             <div className="flex flex-col gap-y-[16px] "> <input
//               type="text" 
//               id="maximumattedees" name="maximumattedees"
//               placeholder="Maximum attedees"
//               className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px] "
//               rows="3"
//             />
//               <input
//                 type="text"
//                 id="customTags" 
//                 placeholder="Custom Tags (comma-seperated)" name="customTags"
//                 className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
//                 rows="3"
//               />
//               <input
//                 type="text"
//                 id="accessibilityOption"
//                 placeholder="Accessibilty option" name="accessibilityOption"
//                 className="w-full   focus:ring-2 border-customLighterGray h-[52px] border rounded-[12px] px-[20px]  focus:outline-none  focus:ring-blue-500  placeholder:text-[16px]"
//                 rows="3"
//               />
//             </div>

//           </div>

//         </div>

//         <button
//                 type="submit"
//                 className="w-full h-[56px] py-3 mt-4 bg-customSkyblue text-white font-semibold rounded-[8px]"
//               >
//                 Proceed</button>
        
//         {/* <div className="max-w-full mt-[32px] mb-[60px] mx-[10px] text-center rounded-[8px] px-[32px] py-[16px] text-white text-[20px] items-center  bg-customSkyblue"><button className="">Proceed</button></div> */}
     
//       </form>


// </div>
//   </div>
// </div>
// </section>
//   )
// }

// export default CreateEvent