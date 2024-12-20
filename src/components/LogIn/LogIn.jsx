import React, { useState,useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import googleSU from '../../assets/googleSU.svg';
import passwordEye from '../../assets/passwordEye.svg';
import passwordEyeOpen from '../../assets/passwordEyeOpen.svg';
import logoSU from '../../assets/logoSU.svg';
import { Image } from 'cloudinary-react';
//import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  passWd: Yup.string().min(8, 'Must contain 8 characters').required('Required'),
});


  
export const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

const images = [
      "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731619932/Images_4_qubhel.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_2_wqgwnp.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_gkw7pr.png",
      "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1732892772/Images_1_lfigsw.png",
    ];
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Auto-slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3 seconds interval
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);












  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Image Section */}
      {/* <div className="hidden lg:flex w-1/2">
        <Image
          className="w-full h-auto"
          cloudName="dqtyrjpeh"
          publicId="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1731619932/Images_4_qubhel.png"
          loading="lazy"
          alt="Login Background"
        />
      </div> */}

      {/* Login Form Section */}
      <div className="flex flex-col items-center w-full lg:w-1/2 max-w-md mx-auto p-8 bg-white  rounded-lg">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/"><img src={logoSU} alt="Logo" className="w-[82px] mb-4" /></Link>
          <h1 className="text-[35px] font-bold mb-2">Welcome Back!</h1>
        </div>

        {/* Continue with Google */}
        <div className="flex justify-center items-center gap-[10px] mb-4 rounded-[36px] w-full max-w-[250px] border-2 border-[#3A7BD5] mx-auto">
          <a href='https://alphaeventappdevmode.onrender.com/auth/google'><button className="text-[#3A7BD5] py-2 px-4 flex items-center justify-center">
            Continue with Google
          </button>
          </a>
          <img src={googleSU} alt="Google Sign In" className="w-[16px] sm:w-auto ml-2" />
        </div>

        {/* Separator */}
        <div className="text-center mb-[18px] mt-[18px]">
          <p className="text-[14px font-light text-[#333333]">or</p>
        </div>

        {/* Login Form */}
        <div className="w-full">
          <Formik
            initialValues={{
              email: '',
              passWd: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={async(values, { resetForm }) => {
              
              try {
    
                const response = await fetch('https://alphaeventappdevmode.onrender.com/loginUser', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                });

                if (response.ok) {
                  localStorage.setItem('userEmail', values.email);
                  toast.success('Log in Successful!');
                  navigate('/OnboardingMain');
                  resetForm(); 
                  } else {
                  const { msg } = await response.json();
                  toast.error(msg || 'Log in Failed');
                }
              } catch (error) { 
                console.error("Login Error:", error);
                toast.error('ERR OCCURED') }

            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-[16px] text-[#C5C5C5]"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-[10px]">{errors.email}</div>
                  ) : null}
                </div>

                {/* Password Field */}
                <div className="relative">
                  <Field
                    name="passWd"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full border border-[#BEBEBE] px-[20px] py-[6px] rounded-[12px] text-[16px] text-[#C5C5C5]"
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Show/Hide Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-2 w-[20px] cursor-pointer"
                  />
                  {errors.passWd && touched.passWd ? (
                    <div className="text-red-500 text-[10px]">{errors.passWd}</div>
                  ) : null}
                </div>

                {/* Submit Button */}
          
  <button
    type="submit"
    className="w-full mt-5 bg-[#D8E5F7] text-[#7CA7E3] hover:text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Proceed
  </button>

             

                {/* Terms and Signup Link */}
                <div className="text-center text-gray-500 text-[12px] mb-4">
                  By proceeding, you agree to Alvent’s{' '}
                  <a href="#" className="text-blue-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="text-center mt-4 text-[12px]">
                  <p className="text-[#757575]">
                    Don’t have an account?{' '}
                    <a className="text-blue-500"><Link to="/signUp">Sign up</Link>

                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>




      
<div className="relative hidden lg:flex lg:flex-nowrap w-1/2 h-auto mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover flex-shrink-0" // flex-shrink-0 prevents image from shrinking
          />
        ))}
      </div>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-700' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)} // Allow dot navigation
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
};
