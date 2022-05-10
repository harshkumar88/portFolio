import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import './Port.scss'


const Header =()=>{

    const [col,set]=useState("black")
    const [text,seting]=useState("white")
    const [t,sett]=useState("maroon")
   const [b,rang]=useState(true)
    const [toggle,rev]=useState(false);
    window.addEventListener('scroll', event => {
        if(window.scrollY=='0'){
            set("black")
            seting("white")
            sett("maroon")
            rev(false)
            rang(true);
        }
        else{
            rev(true);
        set("maroon")
        seting("white")
        sett("white")
        rang(false);

        }
       
        
    })

    return (
         <>
         <div style={{position:"fixed",width:"100%",top:"0px",borderBottom:"2px solid maroon"}} className="short">
        <nav className=" collapse pos-f-t navbar navbar-expand navbar-light " style={{backgroundColor:`${col}`}}>
        <ul className="navbar-nav " >
        <li className="nav-item active " style={{textShadow:"1px -1px white"}}>
        <NavLink exact   to="/portFolio" className="nav-link" ><h1 style={{color:`${text}`}} className="port "><span style={{fontStretch:"extra-expanded",fontFamily:"sans-serif"}}>P</span>ortfo<span style={{color:`${t}`}}>lio</span></h1></NavLink>
      </li>
        </ul>
        <ul class="navbar-nav ml-auto " >
        
      <li class="nav-item active text" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName={b==true?"change":"change2"} to="/portFolio" className="nav-link" style={{color:`${text}`}}>Home</NavLink>
      </li>
      <li class="nav-item active takemargin" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName="change" to="/portFolio/About" className="nav-link"style={{color:`${text}`}}>About</NavLink>
      </li>
      <li class="nav-item active" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName="change" to="/portFolio/Services" className="nav-link" style={{color:`${text}`}}>Services</NavLink>
      </li>
      <li class="nav-item active" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName="change" to="/portFolio/Skills" className="nav-link" style={{color:`${text}`}}>Skills</NavLink>
      </li>
      <li class="nav-item active" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName="change" to="/portFolio/Projects" className="nav-link" style={{color:`${text}`}}>Projects</NavLink>
      </li>
      <li class="nav-item active" style={{textShadow:"1px -1px white"}}>
      <NavLink exact activeClassName="change" to="/portFolio/Contacts" className="nav-link" style={{color:`${text}`}}>Contact</NavLink>
      </li>
      
      </ul>
            </nav>
           
           

            </div>
        </>
    )
}

export default Header;