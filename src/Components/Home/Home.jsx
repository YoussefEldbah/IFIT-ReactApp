import React from 'react';
import { Helmet } from "react-helmet";
import styles from './Home.module.css';
import apple from '../../Assets/images/apple.png';
import google from '../../Assets/images/google.png';
import icon1 from '../../Assets/images/icon home/1.jpeg';
import icon2 from '../../Assets/images/icon home/2.jpeg';
import icon3 from '../../Assets/images/icon home/3.jpeg';
import icon4 from '../../Assets/images/icon home/4.jpeg';
import icon5 from '../../Assets/images/icon home/5.jpeg';
import icon6 from '../../Assets/images/icon home/6.jpeg';
import icon7 from '../../Assets/images/icon home/7.jpeg';
import icon8 from '../../Assets/images/icon home/8.png';
import icon9 from '../../Assets/images/icon home/9.png';
import icon10 from '../../Assets/images/icon home/10.png';
import icon11 from '../../Assets/images/icon home/11.png';
import home1 from '../../Assets/images/home1.png';
import home2 from '../../Assets/images/home2.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section className={`${styles.home} mb-5`}>
        <div className="container my-5">
          <div className="row section1 align-items-center">
            <div className="col-lg-7 col-md-12 mt-5 pt-3">
              <div className="home-title mt-5">
                <p className='fs-4 mb-3'>
                  <span className='dash'>-</span> The Best Fitness & Workout App
                </p>
                <h4>Your All-in-One</h4>
                <h2 className={`${styles.maintext} fw-bold`}>Fitness App</h2>
              </div>
              <div className="download-img mt-4 text-start p-0 d-flex justify-content-start justify-content-md-center align-items-center">
                <img className={`${styles.google}`} src={google} alt="Google Play" />
                <img className={`${styles.apple}`} src={apple} alt="Apple Store" />
              </div>
              <div className="icon-home d-flex justify-content-start justify-content-md-center align-items-center mt-3 flex-wrap">
                <img src={icon1} className={`${styles.icohome} rounded-circle`} alt="icon1" />
                <img src={icon2} className={`${styles.icohome} rounded-circle`} alt="icon2" />
                <img src={icon3} className={`${styles.icohome} rounded-circle`} alt="icon3" />
                <img src={icon4} className={`${styles.icohome} rounded-circle`} alt="icon4" />
                <img src={icon5} className={`${styles.icohome} rounded-circle`} alt="icon5" />
                <img src={icon6} className={`${styles.icohome} rounded-circle`} alt="icon6" />
                <img src={icon7} className={`${styles.icohome} rounded-circle`} alt="icon7" />
                <i className={`${styles.sty} rounded-circle`}>+5</i>
                <i className={`${styles.st} ms-1 fa-solid fa-plus p-2 rounded-circle`}></i>
                <h6 className={`${styles.h} p-1 ms-3 mt-5`}>
                  5M + <br />
                  <span className={`${styles.p}`}>Worldwide Users</span>
                </h6>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 position-relative mt-5 mt-lg-0">
              <div className="img1 d-flex justify-content-center">
                <img className={`${styles.imghome}`} src={home2} alt="home2" />
                <div className={`${styles.img2} position-absolute`}>
                  <img className={`${styles.imghome}`} src={home1} alt="home1" />
                </div>
              </div>
            </div>
          </div>

          <div className="row section2 d-flex justify-content-between mt-5">
            <div className="col-lg-6 col-md-12">
              <h3>
                <span className='dash'>-</span> Download Our
              </h3>
              <div className="d-flex flex-wrap">
                <h2 className={`${styles.maintext}`}>Fitness App</h2>
                <h2 className='ms-1 mb-5'>Today!</h2>
              </div>
              <div className="d-flex mt-5 justify-content-between flex-wrap">
                <div className="sec1 mb-3 mb-md-0">
                  <h4>5 Million+</h4>
                  <p>Worldwide Active Users</p>
                </div>
                <div className={`${styles.line} d-none d-md-block`}></div>
                <div className="sec2 mb-3 mb-md-0">
                  <h4>600+</h4>
                  <p>Healthy Meal</p>
                </div>
                <div className={`${styles.line} d-none d-md-block`}></div>
                <div className="sec3">
                  <h4>750+</h4>
                  <p>Workout</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center mt-5 mt-lg-0">
              <h3>For iOS</h3>
              <p className='mb-5'>iOS 15.6 +</p>
              <button className={`${styles.backmain} px-2 py-1 border-0 mb-5 rounded-4 text-white`}>Download</button>
              <p className='text-center'>
                <i className="fa-solid fs-1 fa-qrcode"></i>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 text-center mt-5 mt-lg-0">
              <h3>For Android</h3>
              <p className='mb-5'>Android 8.6 +</p>
              <button className={`${styles.backmain} px-2 py-1 border-0 mb-5 rounded-4 text-white`}>Download</button>
              <p className='text-center'>
                <i className="fa-solid fs-1 fa-qrcode"></i>
              </p>
            </div>
          </div>

          <div className="row section3 mt-5">
            <div className="col-lg-8 col-md-12">
              <div className="home-title mt-5">
                <h4>
                  <span className='dash'>-</span> Benefits of Fitness App
                </h4>
                <h2 className={`${styles.maintext}`}>Exclusive Benefits</h2>
                <h4>of Fitness App</h4>
              </div>
            </div>
            <div className={`${styles.lineL} col-lg-4 col-md-12 mt-5 d-none d-lg-block`}>
              <h6 className='mt-2'>
                Track your progress, challenge yourself with dynamic workouts, and unlock your full potential.
              </h6>
            </div>
          </div>

          <div className="row section4 mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className={`${styles.card} pb-5 text-center h-100`}>
                <div className="card-body">
                  <div className={`${styles.ico} rounded-circle d-flex justify-content-center align-items-center m-auto mt-1`}>
                    <i className={` ${styles.iconsty} text-white fa-regular fs-2 fa-clock`}></i>
                  </div>
                  <h5 className={`${styles.maintext} mt-5`}>Time Efficiency</h5>
                  <p className={`${styles.cardtext}`}>
                    "Maximize your workout gains with our fitness app's advanced time-efficient routines, ensuring you achieve your goals effectively within your busy schedule."
                  </p>
                  <div className={`${styles.gocorner}`}>
                    <div className={`${styles.goarrow}`}>→</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className={`${styles.card} pb-4 text-center h-100`}>
                <div className="card-body">
                  <div className={`${styles.ico} rounded-circle d-flex justify-content-center align-items-center m-auto mt-1`}>
                    <i className={`${styles.iconsty} text-white fa-solid fs-2 fa-dumbbell`}></i>
                  </div>
                  <h5 className={`${styles.maintext} mt-5`}>Personalized Workouts</h5>
                  <p className={`${styles.cardtext}`}>
                    "Tailor your fitness journey with personalized workout plans designed to match your unique goals, abilities, and preferences, all seamlessly integrated into our intuitive fitness app experience."
                  </p>
                  <div className={`${styles.gocorner}`}>
                    <div className={`${styles.goarrow}`}>→</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className={`${styles.card} text-center h-100`}>
                <div className="card-body">
                  <div className={`${styles.ico} rounded-circle d-flex justify-content-center align-items-center m-auto mt-1`}>
                    <i className={`${styles.iconsty} text-white fa-solid fs-2 fa-heart`}></i>
                  </div>
                  <h5 className={`${styles.maintext} mt-5`}>Healthy Meals</h5>
                  <p className={`${styles.cardtext}`}>
                    "Elevate your wellness journey with our curated collection of delicious and nutritious meal options, carefully crafted to support your fitness goals and nourish your body from within, all conveniently accessible through our fitness app."
                  </p>
                  <div className={`${styles.gocorner}`}>
                    <div className={`${styles.goarrow}`}>→</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className={`${styles.card} text-center h-100`}>
                <div className="card-body">
                  <div className={`${styles.ico} rounded-circle d-flex justify-content-center align-items-center m-auto mt-1`}>
                    <i className={`${styles.iconsty} text-white fa-solid fs-2 fa-bolt-lightning`}></i>
                  </div>
                  <h5 className={`${styles.maintext} mt-5`}>Fast And Accurate</h5>
                  <p className={`${styles.cardtext}`}>
                    "Experience the ultimate combination of speed and precision with our fitness app, delivering fast, accurate tracking and analysis to empower you on your journey to peak performance and optimal health."
                  </p>
                  <div className={`${styles.gocorner}`}>
                    <div className={`${styles.goarrow}`}>→</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row section5 text-center my-5">
            <div className="col-lg-2 col-md-12 text-lg-start text-center mb-4 mb-lg-0">
              <div className="title">
                <h4>
                  <span className='dash'>-</span> Training
                </h4>
                <h4>
                  program
                  <img src={icon11} className={`${styles.rotateimage} ms-4`} alt="icon11" />
                </h4>
                <h4>we offer to you</h4>
              </div>
            </div>
            <div className="col-lg-10 col-md-12">
              <div className={`${styles.bglastsec} row sections p-3 rounded-3 d-flex justify-content-start align-items-center`}>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="sec1 text-start">
                    <div className="title d-flex">
                      <h6 className='mt-3'>Losing or gaining weight</h6>
                      <img className={`${styles.iconlastsec}`} src={icon8} alt="icon8" />
                    </div>
                    <p>
                      Whether your goal is to shed unwanted pounds or pack on lean muscle, our fitness app provides the tools and guidance you need to achieve your desired weight and transform your body.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="sec1 text-start">
                    <div className="title d-flex justify-content-between">
                      <h6 className='mt-3'>Fitness</h6>
                      <img className={`${styles.iconlastsec}`} src={icon9} alt="icon9" />
                    </div>
                    <p>
                      Regular strength training improves the health of your bones and muscles.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div className="sec1 text-start">
                    <div className="title d-flex justify-content-between">
                      <h6 className='mt-3'>Muscles</h6>
                      <img className={`${styles.iconlastsec}`} src={icon10} alt="icon10" />
                    </div>
                    <p>
                      Enjoy all muscle exercises at every level, make your abs dream come true.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
