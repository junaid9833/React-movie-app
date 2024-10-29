import React, { createContext, useState } from 'react'
// import { API_KEY } from './Url';
import Movies from './Project1/Movies';
import Navbarr from './Project1/Navbar';

// import LatestMovies from './Project1/LatestMovies';
// import PopularMovies from './Project1/PopularMovies';
// import ComedyMovies from './Project1/ComedyMovies';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { comedyMovies, latestMovies, popularMovies } from './Url';
import MovieDetails from './MovieDetails';
import Banner from './Banner';
// import LatestMovies from './Project1/LatestMovies';
// import Url from './Url';
const moviecontext=createContext();

const App = () => {
  const [movies1, setmovies1] = useState([]);
  const [id, setid] = useState([]);
  const [hide, sethide] = useState(true);
  return (
    <div>
      <moviecontext.Provider value={{movies1,setmovies1,id,setid,hide,sethide}}>
  <BrowserRouter>  
  {hide  ? (  
    <>
  <Navbarr/>
   <Banner/>
   </>
  ) : null}
 
    <Routes>
   <Route path= "/latestMovies"  element={<Movies apiurl={latestMovies} title="Latest Movies" tbgcolor="darkblue"  cbgcolor="lightblue" bbgcolor="darkblue" bcolor="darkblue" tcolor="darkblue" txcolor="darkblue" />}/> 

   <Route path= "/popularMovies" element={<Movies apiurl={popularMovies} title="Popular Movies" tbgcolor="darkred" cbgcolor="red" bbgcolor="darkred" bcolor="darkred" tcolor="darkred" txcolor="darkred" />}/>

   <Route path= "/comedyMovies"  element={<Movies apiurl={comedyMovies} title="Comedy Movies" tbgcolor="darkgreen" cbgcolor="yellowgreen" bbgcolor="darkgreen" bcolor="darkgreen" tcolor="darkgreen" txcolor="darkgreen" />}/>

     <Route path='/details' element={<MovieDetails title1="Movie Details"/>}/>
   </Routes>
  </BrowserRouter>  
  </moviecontext.Provider>

    </div>
  )
}

export default App
export {moviecontext};