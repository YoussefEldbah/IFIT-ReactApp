import React, { useEffect, useState } from 'react';
import styles from './DetailsArticle.module.css';
import art from '../../Assets/images/article.jpeg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

const DetailsArticle = () => {
  const [articleDate, setArticleDate] = useState(null); 
  let params = useParams();
  console.log(params);

  function getArticlesDetails(id) {
    return axios.get(`https://ifitnessapi-df0ba32d8c94.herokuapp.com/api/getarticale/${id}`);
  }

  let x = useQuery("details", () => {
    return getArticlesDetails(params.id).then(response => {
      setArticleDate(response?.data?.data);
      return response;
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  console.log(articleDate);

  return (
    <>
      <section>
        <div className="container  my-5 pt-5">
          <div className="title">
            <h1 className={`${styles.articleName}`}>{articleDate?.name} </h1>
        </div>
        <div className="img d-flex  justify-content-center ">
          <img className={`${styles.articleImage} w-50`} src={articleDate?.image} alt="" />
        </div>
      </div>
      <div className="decrp text-start">
        <p className={`${styles.articleDescription} pt-0 ps-5 pe-5 pb-5`} dangerouslySetInnerHTML={{ __html: articleDate?.description }}></p>
    </div >
</section>
    </>
  );
};

export default DetailsArticle;
