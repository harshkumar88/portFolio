import React, { useState } from 'react';

import {Switch,Route} from "react-router-dom"

const About = (props) => {
    const [mt,see]=useState("7%")
 
 
    
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap"}} className="bottom">
            <div style={{margin:"auto",marginTop:`${mt}`}}>
                <h1>About me</h1>
                <span style={{color:"red"}}>____Who i Am_____</span>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:'4%',marginBottom:"5%",flexWrap:"wrap"}}>
                    <div style={{width:"350px",height:"350px"}}><img src="https://th.bing.com/th/id/OIP.kQb9khtxOxwErol-KhGysgHaHs?pid=ImgDet&rs=1" style={{width:"350px",height:"350px"}}  /></div>
                    <div style={{textAlign:"justify",marginTop:"3%",width:'40%'}}><p style={{fontWeight:"bold"}}>I'm Harsh and I'm a web Developer</p><span >Lorem Ipsum is sied in the 1960s wtop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span><br/>
                    <br/>
                    <button className="btn btn-outline-danger">Download Cv</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;