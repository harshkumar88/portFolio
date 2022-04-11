import React from 'react';
import  "./Port.css";
import {NavLink} from "react-router-dom";

const Skills = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "white" ,width:"100%"}} className="bottom">
                <div style={{ margin: "auto", marginTop: "7%" }}>
                    <h1 >My SKills</h1>
                    <span style={{ color: 'red' }}>____What I Know_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} >
                    <div style={{width:"550px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",textAlign:"justify"}}>
                    <div>
                    
                        <h4>My creative skills & experiences</h4>
                        <p>Lorem Ipsum is simply dummy text osjdksjdksjkdjssum has been the industry'sx
                        text osjdksjdksjkdjssum has been the industry'sxtext osjdksjdksjkdjssum has been the industry'sxtext osjdksjdksjkdjssum has been the industry'sx
                        text osjdksjdksjkdjssum has been the industry'sx
                        text osjdksjdksjkdjssum has been the industry'sxt osjdksjdksjkdjssum has been the industry'sxt osjdksjdksjkdjssum has been the industry'sxt osjdksjdksjkdjssum has been the industry's </p>
                    </div>
                    <button className="btn btn-outline-danger" style={{color:"black"}}><NavLink exact to="/Skills" className="btn btn-outline-danger">Read More</NavLink></button>
                    </div>
                    
                    
                    <div style={{width:"550px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",fontFamily:"inherit"}} className="downto">
                    <div >
                    <span>HTML</span><span style={{marginLeft:"86%",fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}}>90%</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}} >
                    <div style={{height:"5px",backgroundColor:"maroon",width:"90%"}}></div>
                    </div>
                    <span>CSS</span><span style={{marginLeft:"89%",fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}}>70%</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}}>
                    <div style={{height:"5px",backgroundColor:"maroon",width:"70%"}}></div>
                    </div>
                    <span>JavaScript</span><span style={{marginLeft:"81%",fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}}>70%</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}}>
                    <div style={{height:"5px",backgroundColor:"maroon",width:"70%"}}></div>
                    </div>
                    <span>Node js </span><span style={{marginLeft:"83%",fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}}>50%</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}}>
                    <div style={{height:"5px",backgroundColor:"maroon",width:"50%"}}></div>
                    </div>
                    <span>MongoDB</span><span style={{marginLeft:"81%",fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}}>40%</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}}>
                    <div style={{height:"5px",backgroundColor:"maroon",width:"40%"}}></div>
                    </div>
                    
                    </div>

                    </div>
                   
                    
                </div>

               
            </div>
        </>
    )
}

export default Skills;