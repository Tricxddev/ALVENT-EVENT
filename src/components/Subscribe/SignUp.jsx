import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "cloudinary-react";
import envelopeFooter from '../../assets/envelopeFooter.svg';
import arrowwhiteright from '../../assets/arrowwhiteright.svg';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export const SignUp = () => (
  <section className="w-full px-4 lg:px-0 font-Lato">
    <div className="max-w-[1280px]  bg-[#FFFFFF] flex flex-wrap gap-[160px] rounded-[30px] px-[40px] overflow-hidden shadow-md">
      {/* Text and Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start ">
        <p className="text-[18px] font-light text-[#333333]">Don’t miss out on future updates!</p>
        <p className="text-[#3A7BD5] font-bold text-[24px] mb-[40px]">Subscribe to our newsletter today!</p>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { resetForm }) => {
            toast.success("Subscribed successfully!");
            resetForm();
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className="w-full">
              <fieldset className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="w-full relative">
  {/* Envelope Icon Positioned Absolutely */}
  <img
    src={envelopeFooter}
    alt="Envelope Icon"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 opacity-50"
  />
  {/* Input Field with Padding Adjusted to Avoid Overlap */}
  <Field
    className="w-full pl-12 pr-4 py-2 border border-[#757575] rounded-[12px] focus:outline-none"
    placeholder="Enter email address"
    name="email"
    type="email"
  />
</div>

                {errors.email && touched.email && (
                  <div className="text-red-500 text-[12px] mt-1">{errors.email}</div>
                )}
                {/* Submit Button */}
                <button
  type="submit"
  className="px-6 py-2 bg-[#FF6B6B] text-white rounded-[10px] hover:bg-[#FF3B3B] transition flex items-center justify-center gap-2"
>
  Subscribe
  <img src={arrowwhiteright} alt="Arrow Right" className="w-4 h-4" />
</button>

              </fieldset>
            </Form>
          )}
        </Formik>
      </div>

      {/* Image Section */}
      <div className="">
        <Image
          className=""
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731255028/Flying-Envelope--Streamline-Ux.png_yfqmpw.png"
          loading="lazy"
          alt="Newsletter illustration"
        />
      </div>
    </div>
    <ToastContainer />
  </section>
);
