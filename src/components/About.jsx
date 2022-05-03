import React, { useEffect, useState } from 'react';
import "./Port.scss"
import img1 from './harsh.jpeg'
import {Switch,Route} from "react-router-dom"

const About = (props) => {
    
    
 
 
    
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"4%"}} className="bottom">
            <div className="move">
                <h1>About me</h1>
                <span style={{color:"red"}}>____Who i Am_____</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:'4%',marginBottom:"5%",flexWrap:"wrap"}}>
                    <div style={{width:"350px",height:"350px"}}><img src={img1} style={{width:"350px",height:"350px"}}  /></div>
                    <div style={{textAlign:"justify",marginTop:"3%",width:'40%' ,wordWrap:"break-word"}}><p style={{fontWeight:"bold"}}>I'm Harsh and I'm a web Developer</p><span >Currently I am a 2nd year Student in chitkara University I persuing my degree of Bachelor's of engineering ,I learn Many 
                    Languages Know like HTMl,
                    Css,Javacsript,Bootstrap,Jquery,React,MongoDb,Nodejs </span><br/>
                    <br/>
                    <button className="btn btn-outline-danger">Download Cv</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;