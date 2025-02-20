import axios from "axios";
import { createContext } from "react";

export let ArticleContext= createContext()
// function getArticle() {
//     return axios.get(`http://127.0.0.1:8000/api/getarticales`)
//     .then((res) => res).catch((err) => err)
// }
// function getArticleSpacific(id) {
//     return axios.get(`http://127.0.0.1:8000/api/getarticale/${id}`)
//     .then((res) => res).catch((err) => err)
// }

export default function ArticleContextProvider(props){
   
    return  <ArticleContext.Provider value={{}}>
    {props.children}
    </ArticleContext.Provider>
    
}