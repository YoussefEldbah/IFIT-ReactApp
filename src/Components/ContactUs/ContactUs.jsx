import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactUs.module.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [errMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name must be at least 3 characters").required("Name is required"),
    email: Yup.string().email('Invalid email address').required("Email is required"),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Invalid phone number").required("Phone number is required"),
    message: Yup.string().min(2, "Message must be at least 10 characters").required("Message is required")
  });

  async function callRegister(reqBody) {
    setErrorMessage("");
    setIsLoading(true);
    try {
      const { data } = await axios.post(`https://ifitnessapi-df0ba32d8c94.herokuapp.com/api/postcontact`, reqBody);
      setIsLoading(false);
      setSuccessMessage(data.message);
      registerForm.resetForm(); // Reset form values
      console.log(data);
      toast.success("Message Sent Successfully, Thank you for contacting us!", {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'backmain text-white p-3'
      });
    } catch (err) {
      setIsLoading(false);
      console.error('Error sending message:', err);
      setErrorMessage("Failed to send message");
      toast.error("Failed to send message, Please Try Again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'backmain text-white p-3'
      });
    }
  }
  

  const registerForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: callRegister
  });

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="container my-5">

        <div className="title text-center pt-2">
          <h2 className='mt-5'> <span className={`${styles.dash} ` }>-</span> How can we help you?
          </h2>
          <p>We’re here to help and answer any question you might have.
          </p>
          <p>We look forward to hearing from you
          </p>
        </div>
        <div className={`${styles.formsty} rounded backmain text-white rounded-5  w-50 mx-auto d-flex align-items-center justify-content-center`}>
          <form onSubmit={registerForm.handleSubmit} className=" w-75">
            <div className="title-form text-center">
              <h4 className={`${styles.textcontact} fs-4  pt-3`}>
                Contact us
                
              </h4>
              <span>
                Have some feedback or a general question?
              </span>
              <br />
           
            </div>
            <div className="form-group my-3">
              <label className="" htmlFor="name">
                Name:
              </label>
              <input type="text" id="name" name="name" onBlur={registerForm.handleBlur} className="form-control mb-3" value={registerForm.values.name} onChange={registerForm.handleChange} />
              {registerForm.errors.name && registerForm.touched.name ? <div className='text-danger'>{registerForm.errors.name}</div> : null}
            </div>
            <div className="form-group my-3">
              <label className="mb-1" htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" name="email" onBlur={registerForm.handleBlur} className="form-control mb-3" value={registerForm.values.email} onChange={registerForm.handleChange} />
              {registerForm.errors.email && registerForm.touched.email ? <div className='text-danger'>{registerForm.errors.email}</div> : null}
            </div>
            <div className="form-group my-3">
              <label className="mb-1" htmlFor="phone">
                Phone:
              </label>
              <input type="tel" id="phone" name="phone" onBlur={registerForm.handleBlur} className="form-control mb-3" value={registerForm.values.phone} onChange={registerForm.handleChange} />
              {registerForm.errors.phone && registerForm.touched.phone ? <div className=' text-danger'>{registerForm.errors.phone}</div> : null}
            </div>
            <div className="form-group my-3">
              <label className="mb-1" htmlFor="message">
                Message:
              </label>
              <textarea type="text" id="message" name="message" onBlur={registerForm.handleBlur} className="form-control mb-3" value={registerForm.values.message} onChange={registerForm.handleChange} />
              {registerForm.errors.message && registerForm.touched.message ? <div className=' text-danger '>{registerForm.errors.message}</div> : null}
            </div>
            <button type="submit" className={` ${styles.btncolor} px-3 py-2 mt-2 text-white border-0  rounded rounded-3`} disabled={!(registerForm.isValid && registerForm.dirty)}>
              {isLoading ? <i className='fa fa-spinner fa-spin'></i> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
