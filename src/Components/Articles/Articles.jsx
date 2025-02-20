import React, { useContext, useEffect, useState } from 'react';
import styles from './Articles.module.css';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArticleContext } from '../../Context/Article';
import Loader from '../Loader/Loader';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesLast, setArticlesLast] = useState([]);

  async function getArticles() {
    try {
      setIsLoading(true); // Start loading
      const response = await fetch('https://ifitnessapi-df0ba32d8c94.herokuapp.com/api/getarticales');
      const data = await response.json();
      const articleDates = data.data;
      setArticles(articleDates);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false); // End loading
    }
  }

  async function getLastArticles() {
    try {
      setIsLoading(true);
      const response = await fetch('https://ifitnessapi-df0ba32d8c94.herokuapp.com/api/getLatestArticles');
      const data = await response.json();
      const articleDates = data.data;
      setArticlesLast(articleDates);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);

    getArticles();
    getLastArticles();

  }, []);


  return (
    <>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <section>
        <div className="container pt-5 mt-5">
          <div className="title text-center">
            <h2 className={`${styles.title} mb-3`}>
              Articles <span className='text-dark'>&</span> Blogs
            </h2>
            <p className='fs-5'>
              Discover the latest fitness trends, workout routines, and nutrition tips in our comprehensive articles and blogs, designed to help you achieve your fitness goals effectively and sustainably.
            </p>
          </div>

          {isLoading ? (
            <div className="text-center">
              <Loader />
            </div>
          ) : (
            <>
              <div className="row position-relative">
                <h4 className='my-5'>Popular Articles</h4>
                <div className={`${styles.layer}`}></div>
                {articles.slice(0, 1).map((article, id) => (
                  <div key={id} className="col-md-6">
                    <img src={article.image} className='w-75 rounded-3' alt="" />
                  </div>
                ))}
                {articles.slice(0, 1).map((article, id) => (
                  <div key={id} className="col-md-6">
                    <div className="card rounded-3">
                      <div className="card-body">
                        <h5 className="card-title mb-3">{article.name}</h5>
                        <p className="card-text">{article.note.split(" ").slice(0, 50).join(" ")}..</p>
                      </div>
                      <Link to={`/detailsarticle/${article.id}`} className={`${styles.backgroundbtn} text-white rounded me-auto mx-3 my-2 rounded-5 px-3 py-1 text-decoration-none`}>Read Article</Link>

                    </div>
                  </div>
                ))}
              </div>

              <div className="row position-relative gx-5 my-5">
                <div className={`${styles.layer2}`}></div>
                <div className={`${styles.layer3}`}></div>
                {articles.slice(1, 2).map((article, id) => (
                  <div key={id} className="col-md-6">
                    <div className="card rounded-3">
                      <div className="card-body">
                        <h5 className="card-title mb-3">{article.name}</h5>
                        <p className="card-text">{article.note.split(" ").slice(0, 50).join(" ")}..</p>
                      </div>
                      <Link to={`/detailsarticle/${article.id}`} className={`${styles.backgroundbtn} text-white rounded me-auto mx-3 my-2 rounded-5 px-3 py-1 text-decoration-none`}>Read Article</Link>

                    </div>
                  </div>
                ))}
                {articles.slice(1, 2).map((article, id) => (
                  <div key={id} className="col-md-6">
                    <img src={article.image} className='w-75 rounded-3' alt="" />
                  </div>
                ))}
              </div>


              <div className="row gy-2 my-5">
                <h4>Recent Articles</h4>
                {articlesLast.map((article, id) => (
                  <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className={`${styles.card2} h-100 rounded-3 `}>
                      <img src={article.image} className="card-img-top rounded-2" alt={article.name} />
                      <div className={styles.carddetails}>
                        <h5 className="card-title m-2">{article.name}</h5>
                        <p className="card-text">{article.note.split(" ").slice(0, 20).join(" ")}..</p>
                      </div>
                      <Link to={`/detailsarticle/${article.id}`} className={`${styles.cardbutton} text-white rounded me-auto mx-3 my-2 text-center rounded-5 px-3 py-1 text-decoration-none`}>
                        Read Article
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row gy-2 my-5">
                <h4>All Articles</h4>
                {articles.map((article, id) => (
                  <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className={`${styles.card2} h-100 rounded-3 `}>
                      <img src={article.image} className="card-img-top  rounded-2" alt={article.name} />
                      <div className={styles.carddetails}>
                        <h5 className="card-title m-2">{article.name}</h5>
                        <p className="card-text">{article.note.split(" ").slice(0, 20).join(" ")}..</p>
                      </div>
                      <Link to={`/detailsarticle/${article.id}`} className={`${styles.cardbutton} text-white rounded me-auto mx-3 my-2 text-center rounded-5 px-3 py-1 text-decoration-none`}>
                        Read Article
                      </Link>
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
