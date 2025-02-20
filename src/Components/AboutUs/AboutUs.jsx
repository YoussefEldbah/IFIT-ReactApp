import React from 'react';
import styles from './AboutUs.module.css';
import image1 from '../../Assets/images/topfeature/image1.png'
import image2 from '../../Assets/images/topfeature/image2.png'
import { Helmet } from 'react-helmet';
const AboutUs = () => {
  return (<>
   <Helmet>
            <title>About Us</title>
        </Helmet>
    <section className={`${styles.fonts} ${styles.one}`}>
      <div className="container mt-5">
        <div className="text">
          <h2 className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>-</span> About Us</h2>
          <h4 className=' fs-5'>IFIT was created to help you improve your lifestyle and achieve your fitness goals through small habits. We believe in your potential and we support you all the way.</h4>
          <p>Our app is here to help you reach your health and fitness goals with personalized and habit-based plans. It adapts to your health, schedule, and preferences.</p>
          <h3 className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>View Our </span>App Demo</h3>

        </div>
      </div>
    </section>

    <section className={` ${styles.fonts} ${styles.two}`}>
      <div className="container d-flex justify-content-center">

        <div className={`${styles.cardImg}`}>
          <div className={`${styles.imag} ${styles.imag1}`}>
            <img src={image1} alt="" srcset="" />
          </div>
          <div className={`${styles.imag} ${styles.imag2}`}>
            <img src={image2} alt="" srcset="" />
          </div>
          <div className={`${styles.videoIcon}`}>
            <a className="popup-video btn-icon" href="#">
            </a>
          </div>

        </div>


      </div>


    </section>
  </>)
};

export default AboutUs;
