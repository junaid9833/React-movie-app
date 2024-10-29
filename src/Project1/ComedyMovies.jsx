import React, { useEffect, useState} from 'react'
import { API_KEY} from '../Url';
import axios from "axios";
import { Button, Card} from "react-bootstrap"

const ComedyMovies = () => {
  const [comedy, setcomedy] = useState([]);
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((getcomedy)=> setcomedy(getcomedy.data.results));
     
  }, [])
  
  console.log(comedy);
  return (
    <div  className='row' style={{backgroundColor:"green",padding:"33px",marginLeft:"auto",marginRight:"auto"}}>
    <h1 style={{fontSize:"40px",fontStyle:"oblique",marginBottom:"60px",textAlign:"center",marginTop:"20px", color:"white"}}>Comedy Movies</h1> 
      {comedy.map((item,index) => {
 return (
       <Card style={{ width: '20rem' ,backgroundColor:"yellowgreen"}} key={index} >
      
   <div style={{border:"2px solid Green",width:"270px",textAlign:"center",margin:"10px"
    }}>
     


       {/* <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`:""}  /> */}
       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original` + item.backdrop_path} /> 
       
       <Card.Body>
         <Card.Title  style={{fontSize:"35px",color:"darkgreen"}}>{item.id}</Card.Title>
         <Card.Text style={{fontSize:"35px",color:"darkgreen"}}>
          {item.original_language}
         </Card.Text>
         <Button variant="primary"  style={{backgroundColor:"darkgreen",color:"white",border:"none"}}>Comedy Movies</Button>
       </Card.Body>
    
       </div>
      
     </Card>
 
    
       )  ; 
     }) }
     </div>  
    



)
}

export default ComedyMovies