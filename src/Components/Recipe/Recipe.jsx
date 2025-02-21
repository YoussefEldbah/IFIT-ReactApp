import React, { useState } from 'react';
import axios from "axios";
import styles from './Recipe.module.css';
import toast from 'react-hot-toast';
import Slider from 'react-slick';
import cat1 from '../../Assets/images/cat1.jpg'
import cat2 from '../../Assets/images/cat2.jpg'
import cat3 from '../../Assets/images/cat3.jpg'
import cat4 from '../../Assets/images/cat4.jpg'
import cat5 from '../../Assets/images/cat5.jpg'
import cat6 from '../../Assets/images/6.jpg'
import cat7 from '../../Assets/images/cat6.jpg'


import Loader from '../Loader/Loader';
import { Helmet } from 'react-helmet';


const Recipe = () => {
  const [ing, setIng] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [healthLabel, setLabelHealth] = useState("vegan");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await getRecipe();
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  async function getRecipe() {
    setLoading(true); // Show loader when fetching data

    try {
      const { data } = await axios.get(`https://api.edamam.com/search?q=${ing}&app_id=8cba54a0&app_key=b37f3f8fee1d9c7294f41e672d218107&&health=${healthLabel}`);
      setRecipe(data.hits);

      // Check if the data array is empty
      if (data.hits.length === 0) {
        // Show a toast or alert indicating that no recipes were found
        toast.error('No recipes found for the given criteria', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: 'backmain text-white p-3'
        });
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      toast.error('No recipes found for the given criteria.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'backmain text-white p-3'
      });
    }
    setLoading(false); // Hide loader after fetching data

  }

  return (
    <>
      <Helmet>
        <title>Get Recipe</title>
      </Helmet>
      <div className={`${styles.layer} mt-2 rounded rounded-2 pt-3`}>

      </div>
      <div className="container mt-5">
        <div className="row pt-5 gx-0 ">
          <div className="col-md-9 ">
            <Slider className={`${styles.imgaes}`} {...settings}>
              <img src={cat5} className={`${styles.img} img`} height={360} alt="" />

              <img src={cat1} className={`${styles.img} img`} height={360} alt="" />
              <img src={cat3} className={`${styles.img} img`} height={360} alt="" />
              <img src={cat2} className={`${styles.img} img`} height={360} alt="" />

            </Slider>
          </div>
          <div className="col-md-3">
            <img src={cat6} className={`${styles.img} img`} height={180} alt="" />
            <img src={cat4} className={`${styles.img} img`} height={180} alt="" />
          </div>
        </div>
      </div>


      {/* Get Recipe section */}
      <div className="container m-auto mb-5">
        <h1 className=' mt-5 text-center'>Get Recipe</h1>
        <h6 className={`${styles.typeing} text-center  `}></h6>
        <div className="form-group mx-auto  mt-3 justify-content-center  align-items-center">
          <div className="row">
            <div className="col-md-10">
              <form onSubmit={onSubmit} className=''>
                <input placeholder='Enter Ingredients' className='form-control mx-auto' onChange={(e) => setIng(e.target.value)} type="text" name="text" id="" value={ing} />
              </form>
            </div>
            <div className="col-md-2">
              <div >
                <select className={`${styles.defaultcolor} form-select w-50 `} onChange={(e) => setLabelHealth(e.target.value)}>
                  <option value="vegan">Vegan</option>
                  <option value="vegetrain">Vegetrain</option>
                  <option value="paleo">Paleo</option>
                  <option value="dairy-free">Dairy-Free</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="wheat-free">Wheat-Free</option>
                  <option value="low-sugar">Low-Sugar</option>
                  <option value="egg-free">Egg-Free</option>
                  <option value="peanut-free">Peanut-Free</option>
                  <option value="soy-free">Soy-Free</option>
                  <option value="tree-nut-free">Tree-Nut-Free</option>
                  <option value="fish-free">Fish-Free</option>
                  <option value="shellfish-free">Shellfish-Free</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <button value='search' onClick={getRecipe} type='submit' className={` ${styles.btncolor} px-3 py-2 mt-2 text-white border-0  rounded rounded-3`}> <i class="fa-solid fa-magnifying-glass me-3"></i>Search Now</button>
            </div>
          </div>
        </div>

        {/* Recipes section */}
        <div className="container">
          {loading ? (
            <Loader />
          ) : recipe && recipe.length > 0 ? (
            <>
              <h2 className='text-start fw-bolder mt-2'>All Recipes</h2>
              <div className="row">
                {recipe.map((ele, index) => (
                  <div className="col-md-3 g-3" key={index}>
                    <div className="card">
                      <img src={ele.recipe.image} className="card-img-top w-100" alt="..." />
                      <div className={`${styles.cardbody}`}>
                        <h5 className="card-title"><h3 className={`${styles.maincolor} fw-bolder `}>{ele.recipe.label}</h3></h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"><p className={`${styles.maincolor}`}>Dish Type:</p> {ele.recipe.dishType}</li>
                          <li className="list-group-item">
                            <p className={`${styles.maincolor}`}>Calories:</p>
                            <span>{ele.recipe.calories.toString().substring(0, 6)}</span>
                          </li>
                          <li className="list-group-item"><p className={`${styles.maincolor}`}>IngredientLines:</p>
                            <span>
                              {ele.recipe.ingredientLines.map((ingredient, index) => (
                                <span key={index}>{ingredient}</span>
                              ))}
                            </span>
                          </li>
                          <li className="list-group-item "><p className={`${styles.maincolor}`}>Meal Type:</p> <span>{ele.recipe.mealType}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>

      </div>
    </>
  );
};

export default Recipe;
