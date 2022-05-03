import React, { useEffect, useState } from 'react';
import  "./Port.scss";
import {NavLink} from "react-router-dom";

const arr=["HTML","CSS","javaScript","React","Node js","MongoDb"]
const lead=["90%","80%","70%","75%","65%","60%"]
const Skills = () => {

    useEffect(()=>{
        for(var i=0;i<6;i++){
            const l=lead[i];
            const a=document.getElementsByClassName("ch")[i];
            a.style.transition="all 1s ease-in-out"
            let b=10;
            const set=setInterval(()=>{
                console.log(a.style.width,l)
                if(a.style.width>=l){
                    clearInterval(set)
                }
               
                b+=2;
                a.style.width=b+"%";
            },50)
           
            a.style.color="red"
        }
        
       
    },[])
const [vis,rem]=useState(false);
const [word,change]=useState("Read More")
const see=()=>{
    rem(!vis);
    if(vis==false){
    change("Less")
    }
    else{
        change("Read More")
    }
}
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "white" ,width:"100%",marginTop:"2.2%"}} className="bottom">
                <div className="move">
                    <h1 >My SKills</h1>
                    <span style={{ color: 'red' }}>____What I Know_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} >
                    <div style={{width:"550px",padding:"15px",height:"100px",paddingTop:"1%",fontSize:"15px",textAlign:"justify"}} className="mb-5">
                    <div>
                    
                        <h4>My creative skills & experiences</h4>
                        <p>I learn HTML,CSS,javaScript,React,Node js,MongoDB,bootstrap,jquery </p>
                       {vis==true? <p>I create Many Projects My Best Project Is MERN APP</p>:""}
                    </div>
                    <button className="btn btn-outline-danger" style={{color:"black"}} onClick={see}>{word}</button>
                    </div>
                    
                    
                    <div style={{width:"550px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",fontFamily:"inherit"}} className="downto mt-3 mb-5">
                    {arr.map((ele,ind)=>{
                             return (
                                <div >
                    <span>{ele}</span><span style={{fontSize:"15px",fontWeight:"bold",marginBottom:"20px"}} className="float-right">{lead[ind]}</span>
                    <div style={{height:"5px",backgroundColor:"grey",marginBottom:"20px",marginTop:"5px"}} >
                    <div style={{height:"5px",backgroundColor:"maroon"}} className="ch"></div>
                    </div>
                    </div>
                             )
                    })}
                   
                   
                    
                   

                    </div>
                   
                    
                </div>

               
            </div>
        </>
    )
}

export default Skills;