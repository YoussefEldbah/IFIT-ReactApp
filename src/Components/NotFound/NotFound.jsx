import React, { useContext } from 'react';
import styles from './NotFound.module.css';
import { Helmet } from 'react-helmet';

const NotFound = () => {

  return (<>
    <Helmet>
      <title>NotFound Page</title>
    </Helmet>
    {/* <section className="container w-75 my-5 text-center">
    <img src={notFoundImg} className='w-75' alt=""  />
      </section> */}

    {/* ==================================== Section1 STY CARD ============================================  */}
    <div className="container my-5 py-5">

     <div className="row">
      <div className="col-md-3">
      <div className='my-3'>
        <div className={`${styles.card} my-5 pt-5`}>
          <p className={`${styles.cardtitle} `}>Product Name</p>
          <p className={`${styles.smalldesc}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
            eum nihil itaque!
          </p>
          <div className={`${styles.gocorner}`}>
            <div className={`${styles.goarrow}`}>→</div>
          </div>
        </div>
      </div>
      </div>
      
     </div>
      {/* ==================================== Section2 STY CARD ============================================  */}

      <section>
        <div className={styles.card2}>
          <div className={styles.carddetails}>
            <p className={styles.texttitle}>Card title</p>
            <p className={styles.textbody}>Here are the details of the card</p>
          </div>
          <button className={styles.cardbutton}>More info</button>
        </div>
      </section>

    </div>

      {/* ==================================== Section3 STY CARD ============================================  */}











  </>)
};

export default NotFound;
