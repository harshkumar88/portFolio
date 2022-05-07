import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom"
import img from './back.jpg'


let data="WEBDEVELOPER";
    let newdata="WEBDESIGNER";

const Home = () => {
    const [toggle, rev] = useState(false);
    const[text,convert]=useState("");
    window.addEventListener('scroll', event => {
        if (window.scrollY == '0') {

            rev(false)
        }
        else {
            rev(true);

        }


    })
    

    useEffect(()=>{
        let i=0;
        let s="";
        let c=data.length;
        let pick=true;
            const a=setInterval(()=>{
               if(pick){
                 if(i==data.length && s.length==0){
                     i=0;
                     c=newdata.length;
                     pick=!pick;
                 }
                 else if(i==data.length){
                    s=s.slice(0,c-1)
                    c--;
                    
                    convert(s+"|");
                    console.log(s)
                    
                }
                else{
                s=s+data[i];
                
                convert(s+"|");
               
                i++;
                }
            }
            else{
                if(i==newdata.length && s.length==0){
                    i=0;
                    c=data.length;
                     pick=!pick;
                }
                else if(i==newdata.length){
                   s=s.slice(0,c-1)
                   c--;
                   
                   convert(s+"|");
                   console.log(s)
                   
               }
               else{
               s=s+newdata[i];
               
               convert(s+"|");
              
               i++;
               }
            }
             
            },300)
           
        
        
           
    },[])
    const back = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
       
            <div className="w-100 " style={{ backgroundImage:  `url(${img})`, backfaceVisibility: "hidden", backgroundAttachment: "fixed", backgroundSize: "100% 100%", height: "100vh", backgroundRepeat: "no-repeat" ,minWidth:"400px"}} className="bottom">


                <div className=" container-fluid " style={{ display: 'flex', flexWrap: "wrap" }}>
                    <div className="m-5 text-white" style={{ paddingTop: "10%", height: "200px" }}>
                        <span>Hello,my name is </span><br />
                        <span style={{ fontFamily: "sans-serif", fontSize: "40px" }}>Harsh Kumar</span>
                        <h4>And I'm a <span style={{color:"maroon",fontVariant:"small-caps",fontFamily:"sans-serif",fontWeight:"bold"}}>{text} </span> </h4>
                        <button className="btn btn-danger"><NavLink exact to="/portFolio/Contacts" style={{ color: "white", textDecoration: "none" }}>Hire me</NavLink></button>
                    </div>


                </div>
                <div className="container-fluid row scroll">
                    <div className="  ml-auto ">
                        {toggle ? <button className="btn btn-danger" onClick={back}><img src="https://cdn1.iconfinder.com/data/icons/different-arrows-with-background/512/arrow_arrows_up_line_scroll-512.png" className="img-fluid" style={{ width: "30px" }} /></button> : ""}
                    </div>
                </div>

            </div>
        
        </>
    )
}
export default Home;