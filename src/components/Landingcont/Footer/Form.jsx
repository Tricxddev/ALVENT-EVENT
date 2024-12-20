import React from 'react';
import { Formik, Form,  Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
});

export const Form = () => (
  <div className='w-full  '>
   
    <div className='pt-6'>
        <p>Don’t miss out on future update!</p>
        <p>Subscribe to our newsletter today!</p>
    </div>
    <Formik
      initialValues={{
       
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        toast.success("Subscribe successfully'");
        resetForm();
        console.log(JSON.stringify(values, null, 2));

        // alert('Subscribe successfully');
      }}
    >
      {({ errors, touched }) => (
        <Form className='w-full'>
          <fieldset className='flex flex-col lg:flex-row gap-8'>
       <div className='w-full'>
       <Field className="px-3 border border-1 mt-1" placeholder="Enter email address" name="email" type="email" style={{ borderBottomColor: '#000000' }}/>
       {errors.email && touched.email ? <div className='text-red-500 text-[12px] mt-1'>{errors.email}</div> : null}
       </div>
      <button type="submit" className='px-3  border border-1 w-[80px]' style={{ borderBottomColor: '#000000' }}>Subcribe</button>
          </fieldset>
        </Form>
       
      )}
    </Formik>
    <ToastContainer />
  </div>
);