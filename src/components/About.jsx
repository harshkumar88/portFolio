import React, { useEffect, useState } from 'react';
import "./Port.scss"
import img1 from './harsh.jpeg'
import resume from './resume.pdf'
import {Switch,Route} from "react-router-dom"

const About = (props) => {
    
 
    
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"3%"}} className="bottom container-fluid">
            <div className="move">
                <h1>About me</h1>
                <span style={{color:"red"}}>____Who i Am_____</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:'4%',marginBottom:"5%",flexWrap:"wrap"}} className="container">
                    <div style={{width:"300px",height:"300px"}}><img src={img1} style={{width:"100%",height:"auto"}}  /></div>
                    <div style={{textAlign:"justify",marginTop:"3%",width:'40%' ,wordWrap:"break-word"}}><p style={{fontWeight:"bold"}}>As a web developer, my name is Harsh.</p><span >I am currently a second-year student at Chitkara University pursuing a bachelor's in engineering. I am learning many languages, including HTML, CSS, Javascript, Bootstrap, JQuery, React, MongoDb, and Node.js. </span><br/>
                    <br/>
  <a href={resume} download="Resume.pdf" style={{color:"maroon"}}><button className="btn btn-outline-danger">Resume</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;