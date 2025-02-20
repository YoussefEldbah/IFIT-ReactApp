import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Nutrition.module.css';
import image1 from '../../Assets/images/nut/image1.jpg';
import image2 from '../../Assets/images/nut/image2.jpg';
import image3 from '../../Assets/images/nut/image3.jpg';
import image5 from '../../Assets/images/nut/image5.jpg';
import image6 from '../../Assets/images/nut/image6.jpg';
import image7 from '../../Assets/images/nut/image7.jpg';
import imageRecip1 from '../../Assets/images/nut/imageRecip1.png';
import imageRecip3 from '../../Assets/images/nut/imageRecip3.png';
import { Bars } from 'react-loader-spinner';

const Nutrition = () => {
  const [recipe, setRecipe] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [foodDetails, setFoodDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  const fetchRecipe = async () => {
    const appId = 'f97d4116';
    const apiKey = '73611ca6dfa42998b931d1d3f987c413';
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingr: recipe.split('\n') })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setIsLoading(false);
      setNutritionData(data);

      // Calculate food details
      const foodDetails = data?.ingredients?.map(ingredient => {
        if (ingredient?.parsed && ingredient?.parsed[0] && ingredient?.parsed[0].nutrients && ingredient?.parsed[0]?.nutrients?.ENERC_KCAL) {
          return {
            food: ingredient?.parsed[0]?.food,
            weight: ingredient?.parsed[0]?.weight,
            calories: ingredient?.parsed[0]?.nutrients?.ENERC_KCAL?.quantity.toFixed(1)
          };
        } else {
          return {
            food: "N/A",
            weight: "N/A",
            calories: "N/A"
          };
        }
      });

      setFoodDetails(foodDetails);

    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Please Write Ingredients list');
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const handleReset = () => {
    setRecipe('');
    setNutritionData(null);
    setIsLoading(false);
    setErrorMessage('');
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row pt-5 gx-0 ">
          <div className="col-md-9">
            <Slider className={`${styles.imgaes}`} {...settings}>
              <img src={image1} className={`${styles.img} img`} height={360} alt="" />
              <img src={image2} className={`${styles.img} img`} height={360} alt="" />
              <img src={image3} className={`${styles.img} img`} height={360} alt="" />
              <img src={image5} className={`${styles.img} img`} height={360} alt="" />
              <img src={image6} className={`${styles.img} img`} height={360} alt="" />
            </Slider>
          </div>
          <div className="col-md-3">
            <img src={image7} className={`${styles.img} img w-100`} height={180} alt="" />
            <img src={image6} className={`${styles.img} img w-100`} height={180} alt="" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className={`${styles.headerRecip} text-center mb-4`}>Recipe Nutrition Facts</h1>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.mb - 3}mb-3`}>
            <textarea
              className={` ${styles.inputStyle}`}
              id="recipe"
              name="recipe"
              rows="3"
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
            ></textarea>
            <img src={imageRecip1} className={`${styles.imageRecip1}`} alt="" srcSet="" />
          </div>
          <div className={`${styles.buttons}`}>
            <button type="submit" className={`${styles.btn}  me-5`}>Analyze</button>
            <button type="button" className={`${styles.btn}  me-2`} onClick={handleReset}>New Recipe</button>
            <div className="container mt-4 d-flex justify-content-center align-items-center">
              {isLoading ? (
                <Bars height="80" width="80" color=" #2B6CB0 " ariaLabel="bars-loading" />
              ) : null}
            </div>
          </div>
        </form>
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="row mt-3" id="output">
          {nutritionData && (
            <div>
              <table className="table " style={styles}>
                <thead>
                  <tr>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Food</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Weight</th>

                  </tr>
                </thead>
                <tbody>
                  {nutritionData?.ingredients?.map((ingredient, index) => (
                    <tr key={index}>
                      <td style={styles}>{ingredient.parsed[0]?.quantity}</td>
                      <td style={styles}>{ingredient.parsed[0]?.measure}</td>
                      <td style={styles}>{ingredient.parsed[0]?.food}</td>
                      <td style={styles}>{ingredient.parsed[0]?.nutrients?.ENERC_KCAL?.quantity?.toFixed(1)}</td>
                      <td style={styles}>{ingredient.parsed[0]?.weight}</td>

                    </tr>
                  ))}

                </tbody>
              </table>
              <p>Total Calories: {nutritionData?.calories}</p>

            </div>
          )}
          {nutritionData && (
            <>
              <h2 className={`${styles.headerRecip} pt-3`}>Nutrition Facts Results</h2>
              <div className="container text-center d-flex mb-4 justify-content-center pt-5">
                <div className={`${styles.nutritionInfo}`}>
                  <dl>
                    <dt className={styles.caloriesLabel}>Calories</dt>
                    <dd className={styles.caloriesLabel}>{nutritionData?.calories}</dd>
                    {Object.keys(nutritionData?.totalDaily).map(key => {
                      const obj = nutritionData?.totalDaily[key];
                      return (
                        <div key={key}>
                        <dt className={obj.label === 'Fat' ? styles.fatLabel : 
                                     obj.label === 'Carbs' ? styles.carbsLabel :
                                     obj.label === 'Protein' ? styles.proteinLabel :
                                     obj.label === 'Calories' ? styles.caloriesLabel : ''
                                     }>
                          {obj.label}
                        </dt>
                        <dd className={obj.label === 'Fat' ? styles.fatLabel : 
                                     obj.label === 'Carbs' ? styles.carbsLabel :
                                     obj.label === 'Protein' ? styles.proteinLabel :
                                     obj.label === 'Calories' ? styles.caloriesLabel : ''}>
                          {obj.quantity.toFixed(3)}{obj.unit}
                        </dd>
                      </div>
                      
                      );
                    })}
                  </dl>
                </div>
                <div className={`${styles.cardImageRecp}`}>
                  <img src={imageRecip3} alt="" className='' srcSet="" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nutrition;
