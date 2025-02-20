import React from 'react';
import styles from './CalcCalories.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import calc from '../../Assets/images/calc.jpg'
import { Helmet } from 'react-helmet';
const CalcCalories = () => {
  const initialValues = {
    age: '',
    gender: '',
    height: '',
    weight: '',
    activity: ''
  };

  const validationSchema = Yup.object().shape({
    age: Yup.number().required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    height: Yup.number().required('Height is required'),
    weight: Yup.number().required('Weight is required'),
    activity: Yup.string().required('Activity level is required')
  });

  const calculateCalories = (values) => {
    const { age, gender, height, weight, activity } = values;
    const baseMetabolicRate = gender === 'male' ? 5 : -161;
    const heightFactor = 6.25;
    const weightFactor = 9.99;
    const ageFactor = 4.92;
    const bmr = (weightFactor * weight) + (heightFactor * height) - (ageFactor * age) + baseMetabolicRate;
    const activityFactors = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9
    };
    const dailyCalories = Math.round(bmr * activityFactors[activity]);
    const maintainWeightCalories = dailyCalories;
    const mildWeightLossCalories = dailyCalories - 250;
    const weightLossCalories = dailyCalories - 500;
    const extremeWeightLossCalories = dailyCalories - 1000;
    const mildWeightGainCalories = dailyCalories + 250;
    const weightGainCalories = dailyCalories + 500;
    const fastWeightGainCalories = dailyCalories + 1000;

    return {
      MaintainWeight: maintainWeightCalories ,
      MildWeightLoss : mildWeightLossCalories,
      WeightLoss: weightLossCalories,
      ExtremeWeightLoss: extremeWeightLossCalories,
      MildWeightGain: mildWeightGainCalories,
      WeightGain: weightGainCalories,
      WastWeightGain: fastWeightGainCalories
    };
  };

  const handleSubmit = (values, { setSubmitting, setFieldValue }) => {
    const result = calculateCalories(values);
    setFieldValue('result', result);
    setSubmitting(false);
  };
  
  return (
   <>
   <Helmet>
            <title>Calculate Calories</title>
        </Helmet>
    <div className="container my-5">
      <div className="title pt-5 mt-4 mb-3">
        <h4 className={`${styles.titleCheck} mb-3`}> <span className='dash'>-</span> Check your <span className={`${styles.titleCalories}`}> Calories</span> </h4>
        <h3 className={`${styles.titleGet}`}>Get <span className={`${styles.titleP} fw-bolder`}> Personalized Advice</span> </h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <Formik
            initialValues={{ ...initialValues, result: {} }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="gender mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3">
                  <label htmlFor="gender">Gender:</label>
                  <Field as="select" name="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                </div>
                <ErrorMessage className='alert alert-danger w-50' name="gender" component="div" />

                <div className='age mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3'>
                  <label className='border-0' htmlFor="age">Age:</label>
                  <Field type="number" name="age" />
                </div>
                <ErrorMessage className='alert alert-danger w-50' name="age" component="div" />


                <div className='weight mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3'>
                  <label htmlFor="weight">Weight (kg):</label>
                  <Field type="number" name="weight" />
                </div>
                <ErrorMessage className='alert alert-danger w-50' name="weight" component="div" />

                <div className='height mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3'>
                  <label htmlFor="height">Height (cm):</label>
                  <Field type="number" name="height" />
                </div>
                <ErrorMessage className='alert alert-danger w-50' name="height" component="div" />

                <div className='activity mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3'>
                  <label htmlFor="activity">Activity Level:</label>
                  <Field as="select" name="activity">
                    <option value="">Select Activity Level</option>
                    <option value="sedentary">Sedentary (little to no exercise)</option>
                    <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
                    <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
                    <option value="veryActive">Very Active (hard exercise/sports 6-7 days a week)</option>
                    <option value="extraActive">Extra Active (very hard exercise/sports & physical job or 2x training)</option>
                  </Field>
                </div>
                <ErrorMessage className='alert alert-danger w-50' name="activity" component="div" />


                <button className={`${styles.btnCalc} backmain px-3  py-2 mt-3 text-white border-0  w-25 rounded rounded-5 '`} type="submit" disabled={isSubmitting}>Calculate</button>

                <div className='bginputcalc my-3 rounded-4 rounded p-3'>
                  <div className="card bg-light border-0">
                    <div className="card-body ">
                      <h2 className="card-title text-center">Calorie Results</h2>
                      <div>
                        {Object.entries(values.result).map(([goal, calories]) => (
                          <div key={goal} className="row mb-2  fw-bold">
                            <div className="col-md-6  rounded-3">{goal}</div>
                            <div className="col-md-6 bginputcalc rounded-3">{calories}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>



              </Form>
            )}
          </Formik>
        </div>

        <div className="col-md-5">
          <img src={calc} className=' w-75' alt="" />
        </div>
      </div>
    </div></>
  );
};

export default CalcCalories;
