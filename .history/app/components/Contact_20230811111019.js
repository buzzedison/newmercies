"use client";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';



const validationSchema = Yup.object({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});
export default function Contact() {
 

  const [submitting, setSubmitting] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    
  
  
    const handleSubmit = async (values) => {
      console.log('Form values:', values);
      setSubmitting(true);
      try {
        let response = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...values }), // Include all form values
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        await response.json();
        setMessageSent(true);
      } catch (error) {
        console.error(error.message);
      }
    
      setSubmitting(false);
    }
  
  

  

  return (
    <div className="" id="contact">
    <div className="container py-12 mx-auto my-20 px-4 md:px-12">
      <h2 className="text-4xl font-bold leading-tight text-center mb-10">Contact Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-5 pl-12 mb-10 md:mb-0">
        <Formik
        initialValues={{ fullName: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
          
          <Form>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
              <Field 
              placeholder="Your Name"
                type="text"
                id="fullName"
                name="fullName"
             
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
              
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
                required
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-bold">Message</label>
              <Field 
                id="message"
                name="message"
              as="textarea"
                rows="6"
                className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded resize-none"
                required
              />
              <ErrorMessage name="message" component="div" className="text-red-500 mt-1 text-sm" />
            </div>
            <button type="submit" className="px-5 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors duration-300">
              Send Message
            </button>
          </Form>
          </Formik>
          {submitting && <p>Submitting...</p>}

        </div>
        <div className="w-full h-full md:w-1/2 pl-10">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3315.4950395118435!2d-0.12374824208910397!3d5.679191414431082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1690804889478!5m2!1sen!2sus"

            className="w-full h-64 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
       
            ></iframe>
            </div>
            </div>
            </div>
            </div>
            );
  }
   
            
