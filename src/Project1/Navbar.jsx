import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image2 from "./Images/images4.jpg";
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


const Navbarr = () => {
  return (
    
    <div>
       
       <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
         <Navbar.Brand style={{marginBottom:"0px",fontWeight:"900",fontSize:"70px",fontStyle:"italic",color:"yellowgreen",marginLeft:"20px"}}>Movie App</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav style={{fontSize:"21px", marginLeft:"auto"}}>
      
          
           <Nav.Link href="#link" >
            <Link style={{textDecoration:"none",color:'blue',fontSize:"27px",fontWeight:"650"}} to={"/latestMovies"}>Latest Movies</Link></Nav.Link>

          <Nav.Link href="#link"><Link style={{textDecoration:"none",color:"red",marginLeft:"7px",fontSize:"27px",fontWeight:"650"}} to={"/PopularMovies"}>Popular Movies</Link></Nav.Link>
          
           <Nav.Link href="#link"><Link style={{textDecoration:"none",color:"green", marginLeft:"7px",fontSize:"27px",fontWeight:"650"}} to={"/ComedyMovies"}>Comedy Movies</Link></Nav.Link>

        
          </Nav>  
          </Navbar.Collapse>
          </Navbar>
         
          </div>
  )
}

export default Navbarr