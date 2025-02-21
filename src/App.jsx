import React from 'react'
import Home from './Components/Home/Home'
import LayOut from './Components/LayOut/LayOut'
import Recipe from './Components/Recipe/Recipe'
import TopFeature from './Components/TopFeature/TopFeature'
import AboutUs from './Components/AboutUs/AboutUs'
import Nutrition from './Components/Nutrition/Nutrition'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CalcCalories from './Components/CalcCalories/CalcCalories'
import CalcMacro from './Components/CalcMacro/CalcMacro'
import Articles from './Components/Articles/Articles'
import DetailsArticle from './Components/DetailsArticle/DetailsArticle'
import NotFound from './Components/NotFound/NotFound'
import ContactUs from './Components/ContactUs/ContactUs'
import Mesho from './Components/Mesho/Mesho'
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "calccalories", element: <CalcCalories /> },
        { path: "calcmacro", element: <CalcMacro /> },
        { path: "articles", element: <Articles/> },
        { path: "recipe", element: <Recipe/> },
        { path: "topfeature", element: <TopFeature /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "nutrition", element: <Nutrition /> },
        { path: "detailsarticle/:id", element: <DetailsArticle /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "notfound", element: <NotFound /> }
        // { path: "food", element: <Mesho /> }
      ]
    }
  ])
  return (
   <>
       <RouterProvider router={routes}></RouterProvider>

   </>
  )
}
