// import React, { useEffect, useState } from 'react';
// import styles from './Mesho.module.css';
// import { Helmet } from 'react-helmet';
// import Loader from '../Loader/Loader';

// const Mesho = () => {
//   const [food, setFood] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   async function getFood() {
//     try {
//       setIsLoading(true); // Start loading
//       const response = await fetch('https://ifitnessapi-df0ba32d8c94.herokuapp.com/api/food');
//       const data = await response.json();
//       const foodData = data.data;
//       setFood(foodData);
//       console.log(foodData);
//     } catch (error) {
//       console.error('Error fetching articles:', error);
//     } finally {
//       setIsLoading(false); // End loading
//     }
//   }

//   useEffect(() => {
//     getFood();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Recipes Recommended</title>
//       </Helmet>
//       <div className="container my-5 pt-5">
//         <div className="title text-center maincolor">
//           <h2 className=' mb-5'>
//          <span  className={`${styles.dash} `}>-</span> Recipes Recommended
//           </h2>

//           </div>
//         <div className="row">
//           {isLoading ? (
//             <Loader />
//           ) : (
//             food.map((foodItem, id) => (
//               <div key={id} className="col-md-3">
//                <div className=" mt-3">
//               <div className="card mb-3 rounded rounded-4">
//               <img src={foodItem?.img} className="card-img-top w-100  " alt="..." />

//                   <div className={`${styles.cardbody} card-body  `}>
//                     <h5 className={`${styles} card-title`}>  <h4 className={`${styles.maincolor} `}> Name Recipe:</h4> {foodItem?.name} </h5>
//                     <p className={`${styles} card-text`}><span className={`${styles.maincolor} `} > Ingredients :</span>{foodItem?.ingredients}</p>
//                     <p className={`${styles} card-title`}><span className={`${styles.maincolor} `} > Method :</span> {foodItem?.method}</p>
//                     <p className={`${styles} card-title`}><span className={`${styles.maincolor} `} > Calories :</span>  {foodItem?.macros}</p>
//                   </div>
//                   {/* className={`${styles.maincolor} card-title`} */}
//                 </div>
//                </div>

//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Mesho;
