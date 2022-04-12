import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import './Port.css'


const Header =()=>{

    const [col,set]=useState("black")
    const [text,seting]=useState("white")
    const [t,sett]=useState("red")
    window.addEventListener('scroll', event => {
        if(window.scrollY=='0'){
            set("black")
            seting("white")
            sett("red")
        }
        else{
        set("maroon")
        seting("white")
        sett("white")
        }
       
        
    })

    return (
         <>
         <div style={{position:"fixed",width:"100%",top:"0px"}} className="short">
        <nav className=" collapse pos-f-t navbar navbar-expand navbar-light " style={{backgroundColor:`${col}`}}>
        <ul class="navbar-nav ">
        <li class="nav-item active ">
        <NavLink exact   to="/" className="nav-link" ><h1 style={{color:`${text}`}} >Portfo<span style={{color:`${t}`}}>lio</span></h1></NavLink>
      </li>
        </ul>
        <ul class="navbar-nav ml-auto " >
        
      <li class="nav-item active text" >
      <NavLink exact activeClassName="change" to="/" className="nav-link" style={{color:`${text}`}}>Home</NavLink>
      </li>
      <li class="nav-item active">
      <NavLink exact activeClassName="change" to="/About" className="nav-link"style={{color:`${text}`}}>About</NavLink>
      </li>
      <li class="nav-item active">
      <NavLink exact activeClassName="change" to="/Services" className="nav-link" style={{color:`${text}`}}>Services</NavLink>
      </li>
      <li class="nav-item active">
      <NavLink exact activeClassName="change" to="/Skills" className="nav-link" style={{color:`${text}`}}>Skills</NavLink>
      </li>
      <li class="nav-item active">
      <NavLink exact activeClassName="change" to="/Contacts" className="nav-link" style={{color:`${text}`}}>Contact</NavLink>
      </li>
      
      </ul>
            </nav>
            </div>
        </>
    )
}

export default Header;