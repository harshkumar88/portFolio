import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import './Port.scss'


const Header =()=>{

    const [col,set]=useState("black")
    const [text,seting]=useState("white")
    const [t,sett]=useState("red")
    const [toggle,rev]=useState(false);
    window.addEventListener('scroll', event => {
        if(window.scrollY=='0'){
            set("black")
            seting("white")
            sett("red")
            rev(false)
        }
        else{
            rev(true);
        set("maroon")
        seting("white")
        sett("white")
        }
       
        
    })

    return (
         <>
         <div style={{position:"fixed",width:"100%",top:"0px"}} className="short">
        <nav className=" collapse pos-f-t navbar navbar-expand navbar-light " style={{backgroundColor:`${col}`}}>
        <ul className="navbar-nav ">
        <li className="nav-item active ">
        <NavLink exact   to="/" className="nav-link" ><h1 style={{color:`${text}`}} className="port "><span style={{fontStretch:"extra-expanded",fontFamily:"sans-serif"}}>P</span>ortfo<span style={{color:`${t}`}}>lio</span></h1></NavLink>
      </li>
        </ul>
        <ul class="navbar-nav ml-auto " >
        
      <li class="nav-item active text" >
      <NavLink exact activeClassName="change" to="/portFolio" className="nav-link" style={{color:`${text}`}}>Home</NavLink>
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
      <NavLink exact activeClassName="change" to="/Projects" className="nav-link" style={{color:`${text}`}}>Projects</NavLink>
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