import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/images/mesho.svg'
import styles from './NavBar.module.css';

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (<>
    <nav className="navbar navbar-expand-lg fixed-top  bg-body-tertiary">
      <div className="container">
        <NavLink to={'home'} className="nav-link-logo bg-transparent p-0 fw-bolder m-0 font-logo" href="home">
          <img src={logo} width={130} height={60} alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa-solid fa-bars fs-5 text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'home'} className="nav-link  font-nav" activeClassName="active" onClick={scrollToTop} aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'topfeature'} className="nav-link font-nav" activeClassName="active" onClick={scrollToTop} aria-current="page">Top Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'articles'} className="nav-link font-nav" activeClassName="active" onClick={scrollToTop}>Articles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'aboutus'} className="nav-link font-nav" activeClassName="active" onClick={scrollToTop} aria-current="page">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'contactus'} className="nav-link font-nav" activeClassName="active" onClick={scrollToTop} aria-current="page">Contact Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to={'services'} className="nav-link font-nav me-5 dropdown-toggle" activeClassName="active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Services
              </NavLink>
              <div className="row">
                <div className="col-md-8">
                  <ul className="dropdown-menu">
                    <li><NavLink to={'calccalories'} className=" nav-link mx-2 mt-1" onClick={scrollToTop}> Calculate Calories </NavLink></li>
                    <li><NavLink to={'calcmacro'} className=" nav-link mx-2 mt-1" onClick={scrollToTop}>Calculate Macros</NavLink></li>
                    <li><NavLink to={'recipe'} className=" nav-link mx-2 mt-1" onClick={scrollToTop}>Get Recipe</NavLink></li>
                    <li><NavLink to={'nutrition'} className=" nav-link mx-2 mt-1" onClick={scrollToTop}>Nutrition Analysis</NavLink></li>
                    <li><NavLink to={'food'} className=" nav-link mx-2 mt-1" onClick={scrollToTop}>Some Recipes</NavLink></li>

                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <button className='ms-5 px-3 py-2 backmain border-0 text-white  rounded rounded-5'><a href="#"></a>Get App</button>
        </div>
      </div>
    </nav>


  </>)
};

export default NavBar;
