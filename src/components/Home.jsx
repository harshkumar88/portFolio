import React ,{useState}from 'react';

import {NavLink} from "react-router-dom"





const Home = () => {
    const [toggle,rev]=useState(false);
    window.addEventListener('scroll', event => {
        if(window.scrollY=='0'){
           
            rev(false)
        }
        else{
            rev(true);
        
        }
       
        
    })
    const back=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
        <div className="w-100" style={{ backgroundImage:"url('https://photostockeditor.com/asset/1080/35/359a/PSE371.jpg')",backfaceVisibility:"hidden" ,backgroundAttachment: "fixed", backgroundSize:"100% 100%",height: "100vh" }} className="bottom">
                            
      
            <div className="container container-fluid" style={{display:'flex',flexWrap:"wrap",flexGrow:"1"}}>
                <div className="m-5 text-white" style={{paddingTop:"10%",height:"200px"}}>
                    <span>Hello,my name is </span><br />
                    <span style={{ fontFamily: "sans-serif", fontSize: "40px" }}>Harsh Kumar</span>
                    <h4>And I'm a Web Developer </h4>
                    <button className="btn btn-danger"><NavLink exact to="/Contacts" style={{color:"white",textDecoration:"none"}}>Hire me</NavLink></button>
                </div>
                
                
            </div>
            <div className="container-fluid row scroll">
            <div className="  ml-auto ">
            {toggle?<button className="btn btn-danger" onClick={back}><img src="https://cdn1.iconfinder.com/data/icons/different-arrows-with-background/512/arrow_arrows_up_line_scroll-512.png" className="img-fluid" style={{width:"30px"}}/></button>:""}
            </div>
            </div>
            </div>
        </>
    )
}
export default Home;