import React from 'react';
import styles from './TopFeature.module.css';
import image1 from '../../Assets/images/topfeature/image1.png';
import image2 from '../../Assets/images/topfeature/image2.png';
import image3 from '../../Assets/images/topfeature/image3.png';
import image4 from '../../Assets/images/topfeature/image4.png';
import image5 from '../../Assets/images/topfeature/image5.png';
import image6 from '../../Assets/images/topfeature/image6.png';
import image7 from '../../Assets/images/topfeature/image7.png';
import image8 from '../../Assets/images/topfeature/image8.png';
import image9 from '../../Assets/images/topfeature/image9.png';
import image10 from '../../Assets/images/topfeature/image10.png';
import image11 from '../../Assets/images/topfeature/image11.png';
import image12 from '../../Assets/images/topfeature/image12.png';
import { Helmet } from 'react-helmet';

const TopFeature = () => {
  return (
    <>
      <Helmet>
        <title>Top Feature - Fitness App</title>
        <meta name="description" content="Explore our fitness app's top features, including personalized workout plans and community support." />
      </Helmet>

      <section className={`${styles.fonts} ${styles.one}`}>
        <div className="container">
          <div className={styles.text}>
            <h2 className={styles.headerDemo}>
              <span className={styles.dash}>-</span> App Demo
            </h2>
            <h3 className={styles.headerDemo}>
              <span className={styles.dash}>View Our </span>App Demo
            </h3>
          </div>
        </div>
      </section>

      <section className={`${styles.fonts} ${styles.two}`}>
        <div className="container d-flex justify-content-center">
          <div className={styles.cardImg}>
            <div className={`${styles.imag} ${styles.imag1}`}>
              <img className={styles.imgf} src={image1} alt="App demo screenshot 1" />
            </div>
            <div className={`${styles.imag} ${styles.imag2}`}>
              <img src={image2} alt="App demo screeFnshot 2" />
            </div>
            <div className={styles.videoIcon}>
              <a className="popup-video text-decoration-none btn-icon" href="#video" aria-label="Play demo video">
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.fonts} ${styles.three}`}>
        <div className="container">
          <div className={styles.text}>
            <h2 className={styles.headerDemo}>- 750+ Workout Activities</h2>
            <h3 className={styles.headerDemo}>
              <span className={styles.dash}>Our Featured</span> Workouts
            </h3>
            <p className={styles.headerDemo}>
              <span className={styles.dash}>Personalized workout plans</span>
            </p>
          </div>
          <div className="row">
            {[
              { img: image3, alt: "Workout image 1" },
              {
                card: (
                  <div className={styles.card}>
                    <p>
                      With our fitness app, you'll have everything you need to take your workouts to the next level, achieve your fitness goals, and unlock your full potential. Let's embark on this journey together and transform your body, one workout at a time.
                    </p>
                    <p>
                      Our full-body workouts are designed to engage every major muscle group, ensuring maximum efficiency and results in every session. From dynamic compound movements to targeted isolation exercises, each workout is carefully crafted to optimize your overall strength and endurance.
                    </p>
                    <span className={styles.pipLine}></span>
                  </div>
                ),
              },
              { img: image4, alt: "Workout image 2" },
              { img: image5, alt: "Workout image 3" },
              {
                card: (
                  <div className={styles.card}>
                    <p>
                      Prioritizing injury prevention and performance enhancement, our warm-up routines are designed to prepare your body for the demands of exercise while promoting flexibility, mobility, and circulation. With dynamic stretches, mobility drills, and activation exercises, you'll prime your muscles for optimal performance and reduce the risk of injury during your workout.
                    </p>
                    <p>
                      Each workout comes with detailed descriptions and instructions, ensuring proper form and technique for every exercise. Whether you're a beginner or seasoned gym-goer, our comprehensive guides provide valuable insights into the muscles targeted, movement patterns involved, and tips for progression.
                    </p>
                    <span className={styles.pipLine}></span>
                  </div>
                ),
              },
              { img: image2, alt: "Workout image 4" },
              { img: image6, alt: "Workout image 5" },
              {
                card: (
                  <div className={styles.card}>
                    <p>
                      For those looking to focus on specific areas, our upper and lower body workouts provide tailored routines to sculpt and strengthen your arms, chest, back, legs, and core. Whether you're striving for chiseled arms or toned thighs, our expertly curated exercises will help you reach your goals with precision and effectiveness.
                    </p>
                    <span className={styles.pipLine}></span>
                  </div>
                ),
              },
              { img: image7, alt: "Community image 1" },
              { img: image8, alt: "Community image 2" },
              {
                card: (
                  <div className={styles.card}>
                    <p>
                      Join our vibrant community to stay motivated and track your progress. Our app offers tailored routines to sculpt and strengthen specific muscle groups, ensuring you achieve your fitness goals with precision.
                    </p>
                    <span className={styles.pipLine}></span>
                  </div>
                ),
              },
              { img: image9, alt: "Community image 3" },
              { img: image10, alt: "Community image 4" },
              { img: image11, alt: "Community image 5" },
              {
                card: (
                  <div className={styles.card}>
                    <p>
                      Our app supports your journey with features to monitor progress, optimize sleep, and engage with a supportive community. Tailored workouts help you sculpt and strengthen your body effectively.
                    </p>
                    <span className={styles.pipLine}></span>
                  </div>
                ),
              },
              { img: image12, alt: "Community image 6" },
            ].map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                {item.img ? (
                  <div className={styles.cardImg}>
                    <img src={item.img} alt={item.alt} />
                  </div>
                ) : (
                  item.card
                )}
              </div>
            ))}
          </div>
          <div className={styles.text}>
            <h3 className={styles.headerDemo}>
              <span className={styles.dash}>Community, Progress, and Sleep</span>
            </h3>
            <h3 className={styles.headerDemo}>
              <span className={styles.headerDemo}>Our Featured</span>{' '}
              <span className={styles.dash}>Community, Progress, and Sleep</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopFeature;