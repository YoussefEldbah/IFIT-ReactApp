import React from 'react';
import styles from './Footer.module.css';
import logo from '../../Assets/images/mesho.svg';
import apple from '../../Assets/images/apple.png';
import google from '../../Assets/images/google.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (<>

    <footer className='text-white pt-3  backmain'>
      <div className=" footer1  container mx-auto  p-3 text-center">
        <div className=" row">
          <div className="col-md-8/ px-5 d-flex justify-content-between align-items-center">
            <div className='text-footer text-start'>
              <h6>
                Unlock your Fitness Potential: Your Workout  Hub
              </h6>
              <h5 className='text-dark'>
                Download the App Now
              </h5>
              <p>
                Transform your life, one workout at a time. With our fitness app, embark on a journey of strength, vitality, and lasting well-being.
              </p>
            </div>
            <div className="col-md-4">
              <div className="downloadimg">
                <img className={`${styles.google}`} src={google} alt="" />
                <img src={apple} className={`${styles.apple} ms-1`} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={`${styles.footerbg2}`}>
        <div className="text-center text-lg-start text-white ">
          <div className="container p-3">
            <section className>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3  ">
                  <div className="logo text-start">
                    <img src={logo} className='w-50 ms-auto text-start' alt="" />
                    <p>
                      Clarity gives you the blocks and components you need to create a truly professional website.
                    </p>
                  </div>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-5">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
                  <p>
                    <Link to={'home'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>Home</Link>
                  </p>
                  <p>
                    <Link to={'topfeature'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>Top Feature</Link>
                  </p>
                  <p>
                    <p>
                      <Link to={'home'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>Our Services</Link>
                    </p>
                    <Link to={'articles'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>Articles</Link>
                  </p>

                  <p>
                    <Link to={'aboutus'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>About Us</Link>
                  </p>
                  <p>
                    <Link to={'contactus'} onClick={scrollToTop} className={`${styles.link} text-white text-decoration-none`}>Contact Us</Link>
                  </p>
                </div>
                <hr className="w-100  d-md-none" />
                <hr className="w-100  d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3" /> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3" /> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                  {/* <div className="div position-relative">
                    <input className='border-0 bg-dark w-100 text-white rounded rounded-3 px-1 py-3' placeholder='Enter Your Email' />
                    <button className={`${styles.stybtn} border-0 rounded rounded-3 fw-bolder backmain text-white position-absolute`}>Submit</button>
                  </div> */}
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5">
                  <h6 className="x text-uppercase ms-3 mb-4 font-weight-bold">Follow us</h6>
                  <div className="iconFollow d-flex ">
                    <div className={`${styles.ico}  border-0  rounded-circle d-flex justify-content-center align-items-center m-auto text-center  `}>
                      <i className="fab fs-4 fa-facebook-f" />
                    </div>
                    <div className={`${styles.ico}  border-0  rounded-circle d-flex justify-content-center align-items-center m-auto text-center  `}>
                      <i className="fab fs-4 fa-twitter" />
                    </div>
                    <div className={`${styles.ico}  border-0  rounded-circle d-flex justify-content-center align-items-center m-auto text-center  `}>
                      <i className="fab fs-4 fa-instagram" />
                    </div>
                    <div className={`${styles.ico}  border-0  rounded-circle d-flex justify-content-center align-items-center m-auto text-center  `}>
                      <i className="fab fs-4 fa-linkedin-in" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center text-dark  fs-5 bg-white  p-2" >
            <p>
              © Copyright 2022, All Rights Reserved by
              <span className={`${styles.maintext}`}> IFIT</span>

            </p>
          </div>
        </div>
      </div>






    </footer>






  </>)
};

export default Footer;
