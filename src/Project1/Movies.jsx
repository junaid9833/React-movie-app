import axios from 'axios';
import React, {  useContext, useEffect} from 'react';
import { Button, Card} from "react-bootstrap";
// import { API_KEY } from '../Url';
import image1 from "./Images/imagess.jpg";
import { Link } from 'react-router-dom';
import { moviecontext } from '../App';
import MovieDetails from '../MovieDetails';
import Navbarr from './Navbar';
import Banner from '../Banner';


const Movies = ({apiurl,title,cbgcolor,bbgcolor,bcolor,tcolor,txcolor}) => {

const {movies1,setmovies1,id,setid} = useContext(moviecontext);

const click=(film)=>{
 
setid(film);


console.log(film);
}
    useEffect(() => {
        axios.get(apiurl).then((movies)=> {setmovies1(movies.data.results)
        });
      
    }, [apiurl,setmovies1]);
    console.log(movies1);
  
  return (
   
          <div  className='row' style={{backgroundImage:`url(${image1})`, padding:"33px",marginLeft:"auto",marginRight:"auto"}}   >
             
            
            

                   <h1 style={{fontSize:"70px",fontStyle:"oblique",marginBottom:"60px",textAlign:"center",marginTop:"20px", color:"yellow"}}>{title}</h1> 

                     {movies1.map((item,index) => {
                return (
                      <Card style={{ width: '20rem',backgroundColor:cbgcolor,marginTop:"5px"}} key={index} >
                     
                  <div style={{border:`2px solid ${bcolor}`,width:"270px",textAlign:"center",margin:"10px"
    }}>
                    
                      {/* <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`:""}  /> */}
                      {/* <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original` + item.backdrop_path} />  */}

                      <Card.Img variant="top" src={item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : `https://image.tmdb.org/t/p/original${item.poster_path}` } /> 
                      
                      <Card.Body>
                        <Card.Title style={{fontSize:"35px",color:tcolor}}>{item.id}</Card.Title>
                        <Card.Text style={{fontSize:"30px",color:txcolor}}>
                         {item.original_language}
                        </Card.Text>
                        <Link to={"/details"}>
                       
                        <Button onClick={()=> click (item.id) } variant="primary"  style={{backgroundColor:bbgcolor,color:"white",border:"none"}}>Get Movie</Button>
                        </Link>
                       
                      </Card.Body>
                   
                      </div>
                     
                    </Card>
                    
                
                   
                      )  ; 
                    }) }
</div>
  )
}
export default Movies ;
