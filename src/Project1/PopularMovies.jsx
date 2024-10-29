import React, { useEffect, useState} from 'react'
import { API_KEY} from '../Url';
import axios from "axios";
import { Button, Card} from "react-bootstrap"

const PopularMovies = () => {
  const [popular, setpopular] = useState([]);
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`).then((getpopular)=> setpopular(getpopular.data.results));
     
  }, [])
  
  console.log(popular);
  return (
    <div  className='row' style={{backgroundColor:"darkred",padding:"33px",marginLeft:"auto",marginRight:"auto"}}>
    <h1 style={{fontSize:"40px",fontStyle:"oblique",marginBottom:"60px",textAlign:"center",marginTop:"20px", color:"white"}}>Popular Movies</h1> 
      {popular.map((item,index) => {
 return (
       <Card style={{ width: "20rem" ,backgroundColor:"red"}} key={index} >
      
   <div style={{border:"2px solid darkred",width:"270px",textAlign:"center",margin:"10px"
    }} >
     


    <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `https://image.tmdb.org/t/p/original${item.poster_path}` } /> 
       {/* <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original` + item.poster_path} />  */}

       
       <Card.Body>
         <Card.Title  style={{fontSize:"35px",color:"darkred"}}>{item.id}</Card.Title>
         <Card.Text style={{fontSize:"35px",color:"darkred"}}>
          {item.original_language}
         </Card.Text>
         <Button variant="primary"  style={{backgroundColor:"darkred",color:"white",border:"none"}}>Popular Movies</Button>
       </Card.Body>
    
       </div>
      
     </Card>
 
    
       )  ; 
     }) }
     </div>  
    



)
}

export default PopularMovies