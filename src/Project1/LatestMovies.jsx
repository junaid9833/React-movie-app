import React, { useEffect, useState} from 'react'
import { API_KEY} from '../Url';

import axios from "axios";
import { Button, Card} from "react-bootstrap"


const LatestMovies = () => {
  const [latest, setlatest] = useState([]);
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((getlatest)=> setlatest(getlatest.data.results));
     
  }, [])
  
  console.log(latest);
  return (

                  
                   <div  className='row'  style={{backgroundColor:"darkblue",padding:"33px",marginLeft:"auto",marginRight:"auto"}}>
                   <h1 style={{fontSize:"40px",fontStyle:"oblique",marginBottom:"60px",textAlign:"center",marginTop:"20px", color:"white"}}>Latest Movies</h1> 
                     {latest.map((item,index) => {
                return (
                      <Card style={{ width: '20rem',backgroundColor:"lightblue" }} key={index} >
                     
                  <div style={{border:"2px solid darkblue",width:"270px",textAlign:"center",margin:"10px"
    }}>
                    
           
         
                      {/* <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`:""}  /> */}
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original` + item.backdrop_path} /> 
                      
                      <Card.Body>
                        <Card.Title style={{fontSize:"35px",color:"darkblue"}}>{item.id}</Card.Title>
                        <Card.Text style={{fontSize:"35px",color:"darkblue"}}>
                         {item.original_language}
                        </Card.Text>
                        <Button variant="primary" style={{backgroundColor:"darkblue",color:"white",border:"none"}}>Latest Movies</Button>
                      </Card.Body>
                   
                      </div>
                     
                    </Card>
                
                   
                      )  ; 
                    }) }
                    </div>  
                   
              
     
   
  )
}

export default LatestMovies