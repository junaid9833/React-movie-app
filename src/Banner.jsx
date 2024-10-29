import React, { useEffect, useState } from 'react'
import { comedyMovies } from './Url';
import axios from 'axios';
import { imageUrl } from './Url';
const Banner = () => {
    const [banner, setbanner] = useState([]);
    let randommovie = [];
    useEffect(() => {
        axios.get(comedyMovies).then((bannermovie)=> {setbanner(bannermovie.data.results)
        });
      
    }, [comedyMovies]);
    const randomindex = Math.floor(Math.random() * banner.length)
    console.log(banner);
    randommovie= banner[randomindex]
    console.log(randommovie);
    
  return (
    <div>
      {randommovie && (
        <>
      
   <div style={{backgroundImage: `url(${imageUrl+randommovie?.backdrop_path|| imageUrl+randommovie?.poster_path})`,width:"100%",backgroundSize:"cover",height:"100vh"}}>
                  <div>
                    <h1 style={{textAlign:"center",color:"white",marginTop:"70px",position:"relative"}}>{randommovie?.original_name}</h1>
                    <h4 style={{textAlign:"center",color:"white"}}>{randommovie?.overview}</h4>
                    </div>
                    </div>
                   
                   </>
      )}
  
    </div>
  )
}

export default Banner