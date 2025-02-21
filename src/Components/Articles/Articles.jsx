import React, { useEffect, useState } from 'react';
import styles from './Articles.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from '../Loader/Loader';

const Articles = () => {
  const [exercises, setExercises] = useState([]); // ✅ حالة التمارين
  const [isLoading, setIsLoading] = useState(true);

  async function getExercises(muscle = 'biceps') {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: { 'X-Api-Key': '7WUkLTaQikBjtfdQGHr94Q==lXZ89bwm4wtx3L4w' }, // ✅ إدخال API Key الصحيح
      });
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setIsLoading(false);
    }
  }

 

  useEffect(() => {
    window.scrollTo(0, 0);
    getExercises(); // ✅ جلب التمارين عند تحميل الصفحة
  }, []);

  return (
    <>
      <Helmet>
        <title>Fitness Exercises
        </title>
      </Helmet>
      <section className='exercises'>
        <div className="container pt-5 mt-5">
          <div className="title text-center">
            <h2 className={`${styles.title} mb-3`}>Fitness Exercises
            </h2>
            <p className="fs-5">
              Discover the best exercises for your specific muscle group, and start building your fitness plan.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center">
              <Loader />
            </div>
          ) : (
            <>
            
              <div className="row my-5">
                <h4>Fitness Exercises</h4>
                {exercises.map((exercise, id) => (
                  <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className={`${styles.card2} h-100 rounded-3`}>
                      <div className={styles.carddetails}>
                        <h5 className="card-title m-2">{exercise.name}</h5>
                        <p className="card-text">
                          <strong>Type:</strong> {exercise.type} <br />
                          <strong>Equipment:</strong> {exercise.equipment} <br />
                          <strong>Muscle:</strong> {exercise.muscle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Articles;
