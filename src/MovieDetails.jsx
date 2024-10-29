import React, {useContext, useEffect} from 'react'
import { moviecontext } from './App';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { MDBIcon } from "mdb-react-ui-kit";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import image5 from "./Project1/Images/360_F_271506927_WWFfd92jDIIDx6DgMflakU14o5jRPgBm.jpg";
import Navbarr from './Project1/Navbar';



const MovieDetails = () => {
  

const {movies1,setmovies1,id,setid,hide,sethide} = useContext(moviecontext);
useEffect(() => {
  
sethide(false);
  return () => {
    sethide(true);
   
  }
}, [sethide]);


// const moviearray=[id];

const filtermovie=movies1.filter((i)=>i.id === id);

console.log(filtermovie);
return(
  <div  style={{backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat",marginTop:"0px",backgroundSize:"cover",height:"80vh",padding:"0px",margin:"0px"}}>
     
     {filtermovie.map((item,index) => {
                return (
                  <div key={index}>
                    
                
                 
    <h1 style={{color:"yellow",marginLeft:"30px", marginBottom:"40px",marginTop:"70px"}}>{item.original_title||item.original_name}</h1>
  
    <button style={{backgroundColor:"red", color:"white",border:"none",borderRadius:"20px",
    marginRight:"10px",marginLeft:"30px",padding:"4px 20px"}}> <MDBIcon fas icon="play-circle"/>     Play Now </button>
  
    <button  style={{backgroundColor:"white", color:"red",border:"none",borderRadius:"20px",
    marginRight:"10px",marginLeft:"30px",padding:"5px 15px"}}>More Information</button>

    <div style={{display:"flex",height:"0px",marginTop:"50px"}}>
    <h4 style={{marginRight:"5px",marginLeft:"20px",color:"yellow"}}>{item.release_date || item.first_air_date}</h4>
    <h3 style={{marginRight:"18px",marginLeft:"20px",color:"yellow"}}> {item.original_language}</h3>
    <Rating style={{boxSizing:"730px"}} name="half-rating-read" defaultValue={item.vote_average} max={10} precision={0.5} readOnly />
    <h3 style={{marginRight:"18px",color:"gold"}}>  {item.vote_average}</h3>
    <h2 style={{marginRight:"18px",color:"white",fontWeight:"bold"}}>|</h2>
    <h3 style={{marginRight:"18px",color:"yellow"}}>{item.id}</h3>
    <h3 style={{marginRight:"18px",color:"yellow"}}>{item.popularity}</h3>
    <h3 style={{color:"yellow"}}>{item.vote_count}</h3>
   </div>
    
      
    <p style={{marginTop:"110px",color:"yellow",fontWeight:"bold",width:"50%",marginLeft:"20px"}}>{item.overview}</p>
  
    <img style={{width:"40%",height:"auto",marginRight:"45px",float:"right",padding:"0px",margin:"0px",position:"absolute",top:"200px",right:"10px"}} src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `https://image.tmdb.org/t/p/original${item.poster_path}`} />   

    </div>
  )  ; 
}) }
  </div>
)

// console.log(id);
// console.log(movies1);
  //  return (
  //  <div>
  //     <h1>{title1}</h1> 
  //     {filtermovie.map((item,index) => { 
  //              return (
    
                 
                     
 
                    
  //                     {/* <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`:""}  /> */}
  //                     {/* <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original` + item.backdrop_path} />  */}

  /* //                    <img style={{height:"1000px",width:"1000px",}} src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `https://image.tmdb.org/t/p/original${item.poster_path}` } /> 
                      
                      
  //                      <h1 style={{fontSize:"35px",color:tcolor}}>{item.id}</h1>
  //                      <p style={{fontSize:"30px",color:txcolor}}>
  //                        {item.original_language}</p>
                      */
                        
                       
                       
                     
                   
                      
                     
                   
  //               )  ; 
  //             }) }

      // </div>
 
//   )
 }


export default MovieDetails