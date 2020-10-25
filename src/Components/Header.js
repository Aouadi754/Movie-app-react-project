import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import '../App.css';


function header() {
    return (
        <div style={{backgroundColor:"#85C54B",height:"130px",marginTop:"0px",display:'flex',justifyContent:'space-around',alignItems:'center',borderBottomStyle:'solid'}}>
    <div style={{position:"relative",left:"100px",display:'flex',alignContent:'center',alignItems:'center'}}> 
    <img style={{height:"90px",width:'100px'}}  src="/movie_icon-removebg-preview.png" alt='' />
     <h1 >Top-<span style={{color:"white"}}>Movies</span>.com</h1>
     </div> 
     <Navbar >
    <Nav  style={{fontWeight:'bold',fontSize:'19px'}}>
      <Nav.Link style={{color:'white'}}><div className="toHover">Home</div> </Nav.Link>
      <Nav.Link style={{color:'white'}} href="#features"><div className='toHover'>  News</div> </Nav.Link>
      <Nav.Link style={{color:'white'}} href="#pricing"><div className='toHover'>Top rated movies</div> </Nav.Link>
      <Nav.Link style={{color:'white'}} href="#pricing"><div className='toHover'>Popular movies </div></Nav.Link>
    </Nav>
    </Navbar>
        </div>
    )
}

export default header
