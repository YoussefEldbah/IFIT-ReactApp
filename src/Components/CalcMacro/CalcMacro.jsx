import React from 'react';
import styles from './CalcMacro.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import calc from '../../Assets/images/calc4.jpg';
import { Helmet } from 'react-helmet';

const CalcMacro = () => {
  const initialValues = {
    age: '',
    gender: '',
    height: '',
    weight: '',
    activity: '',
    goal: ''
  };

  const validationSchema = Yup.object().shape({
    age: Yup.number().required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    height: Yup.number().required('Height is required'),
    weight: Yup.number().required('Weight is required'),
    activity: Yup.string().required('Activity level is required'),
    goal: Yup.string().required('Goal level is required')
  });

  const calculateCaloriesAndMacros = (values) => {
    const { age, gender, height, weight, activity, goal } = values;
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
      extraActive: 1.9,
    };

    const dailyCalories = Math.round(bmr * activityFactors[activity]);
    let finalCalories = 0;

    function calculateCalories(dailyCalories, goal) {
      if (goal === 'gain') {
        finalCalories = dailyCalories + 500;
      } else if (goal === 'loss') {
        finalCalories = dailyCalories - 500;
      } else if (goal === 'maintain') {
        finalCalories = dailyCalories;
      }

      return finalCalories;
    }

    const calculatedFinalCalories = calculateCalories(dailyCalories, goal);

    const proteinPercentage = 0.25; // 25% of total calories from protein
    const fatPercentage = 0.20; // 20% of total calories from fat
    const carbPercentage = 1 - (proteinPercentage + fatPercentage); // Remaining calories from carbs

    const proteinCalories = Math.round(calculatedFinalCalories * proteinPercentage);
    const fatCalories = Math.round(calculatedFinalCalories * fatPercentage);
    const carbCalories = Math.round(calculatedFinalCalories * carbPercentage);

    const proteinGrams = Math.round(proteinCalories / 4);
    const fatGrams = Math.round(fatCalories / 9);
    const carbGrams = Math.round(carbCalories / 4);

    return {
      finalCalories: calculatedFinalCalories,
      protein: proteinGrams,
      fat: fatGrams,
      carbs: carbGrams
    };
  };

  const handleSubmit = (values, { setSubmitting, setFieldValue }) => {
    const result = calculateCaloriesAndMacros(values);
    setFieldValue('result', result);
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Calculate Macro</title>
      </Helmet>
      <div className="container my-5">
        
        <div className="title pt-5 mt-4 mb-3">
          <h4 className={`${styles.titleCheck} mb-3`}>
            <span className='dash me-2'>-</span>
            Check your <span className={`${styles.titleCalories}`}>Protein, Carbs and Fat</span>
          </h4>
          <h3 className={`${styles.titleGet}`}>
            Get <span className={`${styles.titleP} fw-bolder`}>Personalized Advice</span>
          </h3>
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
                  <div className='activity mb-2 w-50 bginputcalc text-white p-2 text-center rounded rounded-3'>
                    <Field as="select" name="goal">
                      <option value="">Select Goal Level</option>
                      <option value="maintain">Maintain</option>
                      <option value="gain">Gain (0.5 kg per week)</option>
                      <option value="loss">Loss (0.5 kg per week)</option>
                    </Field>
                  </div>
                  <ErrorMessage className='alert alert-danger w-50' name="goal" component="div" />

                  <button className={`${styles.btnCalc} backmain px-3 py-2 mt-3 text-white border-0 w-25 rounded rounded-5`} type="submit" disabled={isSubmitting}>Calculate</button>

                  <div className='bginputcalc my-3 rounded-4 p-3'>
                    <div className="card bg-light border-0">
                      <div className="card-body">
                        <h2 className="card-title text-center">Calorie and Macronutrient Results</h2>
                        <div className="row mb-3">
                          <div className="col-md-6 fw-bold">Daily Calories</div>
                          <div className="col-md-6 bginputcalc rounded-3">{values.result.finalCalories}</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6 fw-bold">Protein (g)</div>
                          <div className="col-md-6 bginputcalc rounded-3">{values.result.protein}</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6 fw-bold">Fat (g)</div>
                          <div className="col-md-6 bginputcalc rounded-3">{values.result.fat}</div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6 fw-bold">Carbohydrates (g)</div>
                          <div className="col-md-6 bginputcalc rounded-3">{values.result.carbs}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-5">
            <img className={`${styles.imgcalc} w-100`} src={calc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalcMacro;
