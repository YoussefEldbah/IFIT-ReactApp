import React from 'react';
import styles from './TopFeature.module.css';
import image1 from '../../Assets/images/topfeature/image1.png'
import image2 from '../../Assets/images/topfeature/image2.png'
import image3 from '../../Assets/images/topfeature/image3.png'
import image4 from '../../Assets/images/topfeature/image4.png'
import image5 from '../../Assets/images/topfeature/image5.png'
import image6 from '../../Assets/images/topfeature/image6.png'
import image7 from '../../Assets/images/topfeature/image7.png'
import image8 from '../../Assets/images/topfeature/image8.png'
import image9 from '../../Assets/images/topfeature/image9.png'

import image10 from '../../Assets/images/topfeature/image10.png'
import image11 from '../../Assets/images/topfeature/image11.png'
import image12 from '../../Assets/images/topfeature/image12.png'
import { Helmet } from 'react-helmet';
const TopFeature = () => {
  return (
    <>
      <Helmet>
        <title>Top Feature</title>
      </Helmet>
      <section className={`${styles.fonts} ${styles.one}`}>
        <div className="container">
          <div className="text">
            <h2 className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>-</span> app demo</h2>
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
                <i className="fas fa-play" />
              </a>
            </div>

          </div>


        </div>


      </section>

      <section className={`${styles.fonts} ${styles.three}`}>
        <div className="container">
          <div className={`${styles.text}`}>
            <h2 className={`${styles.headerDemo}`}>- 750+ Workout Activity</h2>

            <h3 className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>Our Featured</span>  Workout</h3>
            <p className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>Personalized workout plans</span></p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image3} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-sm-12 col-md-3 ">
              <div className={`${styles.card}`}>
                <div className="icon">
                  <i className="fa-solid fa-quote-left" />
                </div>
                <p>With our fitness app, you'll have everything you need to take your workouts to the next level, achieve your fitness goals, and unlockyour full potential. Let's embark on this journey together and transform yourbody, one workout at a time. </p><p>Our full-body workouts are designed to engage everymajormuscle group, ensuring maximum efficiency and results in every session.Fromdynamic compound movements to targeted isolation exercises, each workoutiscarefully crafted to optimize your overall strength and endurance. &nbsp;</p>
                <span className={`${styles.pipLine}`}></span>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image4} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image5} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.card}`}>
                <div className="icon">
                  <i className="fa-solid fa-quote-left" />
                </div>
                <p>Prioritizing injury prevention and performance enhancement ,our warm-up routines are designed to prepare your body for the demands of exercise while promoting flexibility, mobility, and circulation. With dynamic stretches, mobility drills, and activation exercises, you'll prime your musclesfor optimal performance and reduce the risk of injury during your workout.Each workout comes with detailed descriptions and instructions, ensuring pro perform and technique for every exercise. Whether you're a beginner or seasonedgym-goer, our comprehensive guides provide valuable insights into the muscle stargeted , movement patterns involved,and tps for progress seeking a comprehensive warm-up routine, we've got you covered with our diverse range of workout plans. </p>
                <span className={`${styles.pipLine}`}></span>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image2} alt="" />
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image6} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className={`${styles.card}`}>
                <div className="icon">
                  <i className="fa-solid fa-quote-left" />
                </div>
                <p>For those looking to focus on specific areas, our upper and lower body workouts provide tailored routines to sculpt and strengthen your arms, chest, back, legs, and core. Whether you're striving for chiseled arms or toned thighs, our expertly curated exercises will help you reach your goals with precision and effectiveness. Welcome to our fitness app, your ultimate companion on your journey to a stronger, healthier you. Whether you're aiming for a full-body transformation, targeting specific muscle groups, or seeking a comprehensive warm-up routine, we've got you covered with our diverse range of workout plans.</p>
                <span className={`${styles.pipLine}`}></span>
              </div>

            </div>
            <div className={`${styles.text}`}>

              <h3 className={`${styles.headerDemo}`}><span className={`${styles.dash}`}>Community, progress and sleep</span></h3>
              <h3 className={`${styles.headerDemo} `}><span className={`${styles.headerDemo}`}>Our Featured</span> <span className={`${styles.dash}`}> Community, progress and sleep</span></h3>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image7} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image8} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className={`${styles.card}`}>
                <div className="icon">
                  <i className="fa-solid fa-quote-left" />
                  <p>For those looking to focus on specific areas, our upper and lower body workouts provide tailored routines to sculpt and strengthen your arms, chest, back, legs, and core. Whether you're striving for chiseled arms or toned thighs, our expertly curated exercises will help you reach your goals with precision and effectiveness. Welcome to our fitness app, your ultimate companion on your journey to a stronger, healthier you. Whether you're aiming for a full-body transformation, targeting specific muscle groups, or seeking a comprehensive warm-up routine, we've got you covered with our diverse range of workout plans.</p>
                </div>
                <p></p>
                <span className={`${styles.pipLine}`}></span>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image9} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image10} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image11} alt="" />
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.card}`}>
                <div className="icon">
                  <i className="fa-solid fa-quote-left" />
                </div>
                <p> our upper and lower body workouts provide tailored routines to sculpt and strengthen your arms, chest, back, legs, and core. Whether you're striving for chiseled arms or toned thighs, our expertly curated exercises will help you reach your goals with precision and effectiveness. Welcome to our fitness app, your ultimate companion on your journey to a stronger, healthier you. Whether you're aiming for a full-body transformation, targeting specific muscle groups, or seeking a comprehensive warm-up routine, we've got you covered with our diverse range of workout plans.</p>
                <span className={`${styles.pipLine}`}></span>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className={`${styles.cardImg}`}>
                <img src={image12} alt="" />
              </div>

            </div>
          </div>

        </div>
      </section>


    </>
  )
};

export default TopFeature;
