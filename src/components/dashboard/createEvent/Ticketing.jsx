import React, { useState, useRef } from "react";
import axios from "axios";
import cloudIcon from "../../../assets/cloudIcon.svg";
import arrowOption from "../../../assets/arrowOption.svg";
import delectIcon from "../../../assets/delectIcon.svg";
import questionIcon from "../../../assets/questionIcon.svg";
import discountIcon from "../../../assets/discountIcon.svg";
import pencilBlue from "../../../assets/pencilBlue.svg";

const Ticketing = () => {
  const fileInputRef = useRef(null);
  const ticketTypes1Ref = useRef(null);
  const ticketTypes2Ref = useRef(null);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isToggled, setIsToggled] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showMessageBox1, setShowMessageBox1] = useState(false);
  const [showMessageBox2, setShowMessageBox2] = useState(false);

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setUploadedImage(previewURL);
    }
  };

  // Trigger file input programmatically
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Clear inputs in ticketTypes1 container
  const clearTicketTypes1Inputs = () => {
    const inputs = ticketTypes1Ref.current.querySelectorAll("input");
    const select = ticketTypes1Ref.current.querySelector("select");

    // Clear all input fields
    inputs.forEach((input) => (input.value = ""));

    // Reset the select field to its default option
    if (select) {
      select.value = "selectEventType";
    }
  };

  // Clear inputs in ticketTypes2 container
  const clearTicketTypes2Inputs = () => {
    const inputs = ticketTypes2Ref.current.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };

  // Show and hide message box 1
  const handleAddTicketType = () => {
    setShowMessageBox1(true);
    setTimeout(() => {
      setShowMessageBox1(false);
    }, 3000);
  };

  // Show and hide message box 2
  const handleCreateEvent = () => {
    setShowMessageBox2(true);
    setTimeout(() => {
      setShowMessageBox2(false);
    }, 3000);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("eventTitle", event.target.eventTitle?.value || "");
    formData.append("description", event.target.description?.value || "");
    formData.append("eventCategory", event.target.eventCategory?.value || "");
    formData.append("eventFormat", event.target.eventFormat?.value || "");
    if (selectedDate) formData.append("eventDate", selectedDate.toISOString());
    formData.append("isPrivate", isToggled);
    formData.append("eventCapacity", event.target.eventCapacity?.value || "");
    formData.append(
      "maximumattendees",
      event.target.maximumattendees?.value || ""
    );
    formData.append("customTags", event.target.customTags?.value || "");
    formData.append(
      "accessibilityOption",
      event.target.accessibilityOption?.value || ""
    );

    if (uploadedImage) {
      const imageFile = fileInputRef.current.files[0];
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/events",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <>
      <section className="flex w-full overflow-hidden mt-[28px]">
        {/* Ticket type container */}
        <div id="ticketType" className="ticketTypes w-full">
          <form onSubmit={handleSubmit}>
            {/* Ticket Types 1 */}
            <div
              ref={ticketTypes1Ref}
              className="ticketTypes1 border border-[#757575] rounded-[12px] w-full lg:w-[738px] px-[16px] py-[16px] mr-[45px]"
            >
              {/* <div className="ticketType">
                <p className="text-[18px] font-bold">Ticket type</p>
                <div className="flex flex-col lg:flex-row gap-[10px] mt-[36px] w-full">
                  <div className="inputOption flex border border-[#3A7BD5] px-[10px] rounded-tl-[8px] rounded-tr-[8px] w-full lg:w-[352px]">
                    <select
                      name="eventType"
                      id="eventType"
                      className="text-[12px] font-normal w-full lg:w-[352px] focus:outline-none"
                    >
                      <option value="selectEventType">
                        Select Ticket Type
                      </option>
                      <option value="earlyBird">Early Bird</option>
                      <option value="vip">VIP</option>
                      <option value="others">Regular</option>
                    </select>
                  </div>
                  <div>
                    <img
                      src={delectIcon}
                      alt="Delete Icon"
                      className="deleteIcon1 cursor-pointer"
                      onClick={clearTicketTypes1Inputs}
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="flex flex-col lg:flex-row gap-[40px] mt-[120px]">
                <fieldset>
                  <label
                    htmlFor="price"
                    className="px-[8px] text-[16px] font-bold text-[#525252]"
                  >
                    Price
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="0"
                    className="border border-[#BEBEBE] rounded-[12px] w-full lg:w-[217px] h-[52px] px-[20px] py-[18px]"
                  />
                </fieldset>
                <fieldset>
                  <label
                    htmlFor="quantity"
                    className="px-[8px] text-[16px] font-bold text-[#525252]"
                  >
                    Quantity
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="0"
                    className="border border-[#BEBEBE] rounded-[12px] w-full lg:w-[217px] h-[52px] px-[20px] py-[18px]"
                  />
                </fieldset>
              </div> */}


            {/* Message Box 1 */}
            {/* {showMessageBox1 && (
              <div className="messageBox1 bg-green-500 text-white p-4 rounded mt-4">
                Ticket Type Added Successfully
              </div>
            )} */}

            {/* <button
              type="button"
              onClick={handleAddTicketType}
              className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[201px] px-[16px] py-[16px] text-center rounded-[8px]"
            >
              Add ticket type
            </button> */}
         
            </div>



            {/* Message Box 2 */}
            {showMessageBox2 && (
              <div className="messageBox2 bg-green-500 text-white p-4 rounded mt-4">
                You have Successfully Publish an Event
              </div>
            )}

            <button
              type="button"
              onClick={handleCreateEvent}
              className="bg-[#3A7BD5] text-[#FFFFFF] mt-[32px] w-full lg:w-[700px] px-[16px] py-[16px] text-center rounded-[8px]"
            >
              Publish Event
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Ticketing;
