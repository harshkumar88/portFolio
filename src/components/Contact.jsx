import React, { useState} from 'react';
import  "./Port.scss";

import img1 from './harsh.jpeg'
import emailjs from "emailjs-com";
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    
    const[info,setyou]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    const put=(event)=>{
          let n=event.target.name;
          const value=event.target.value;
          setyou({...info,[n]:value})
    }

    function sendemail(e){
       
        e.preventDefault();
        emailjs.sendForm('service_5ggn2u3', 'template_et70wif',form.current,"opo4WYGOAyYbrSr3X")
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
        alert("Thanks for contact me.")

        setyou({
            name:"",
            email:"",
            subject:"",
            message:""
        })
     }
    return (
        <div style={{backgroundColor:"white",minHeight:"100vh",overflow:"hidden"}}>
             <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap",marginTop:"3%"}} className="bottom mb-5 container-fluid">
                <div className="move container text-center">
                    <h1 style={{fontSize:"200%"}}>Contact me</h1>
                    <span style={{ color: 'maroon' }} style={{marginLeft:"10px"}}>____get in touch_____</span>
                    <p className="text-center"><a href="https://github.com/harshkumar88/" target="_blank"><i class='fa fa-github text-danger mr-2 hov' style={{fontSize:'25px'}}></i></a><a href="https://www.instagram.com/harsh88361/" target="_blank"><i class='fa fa-instagram text-danger mr-1 hov' style={{fontSize:'25px'}}></i></a> <a href="https://www.facebook.com/profile.php?id=100047059654619" target="_blank"><i class='fa fa-facebook mr-1 hov' style={{color:'darkblue',fontSize:"25px"}}></i> </a> <a href="https://www.linkedin.com/in/harsh-kumar-67714921b" target="_blank"><i class='fa fa-linkedin text-primary mr-2 hov' style={{fontSize:'25px'}}></i></a></p>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} className="mb-5 container-fluid">
                    <div style={{width:"450px",padding:"15px",height:"150px",paddingTop:"0.4%",fontSize:"15px",textAlign:"justify"}}>
                    <div>
                    
                        <h4>Get in Touch</h4>
                        <p>Let's talk about any of your questions or experiences. Send us your message, and we'll respond right away. </p>
                    </div>
                   <div style={{display:'inline',paddingTop:"8px"}}><img src={img1} style={{width:"70px",borderRadius:"50%"}}/></div>
                   <div style={{display:"inline" ,paddingTop:"8px",marginTop:'3px'}}>
                    <span style={{marginLeft:"5%",fontWeight:"bolder"}}>Harsh Kumar</span>
                    
                    </div>
                    

                    </div>
                    
                    
                    <div style={{width:"600px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",fontFamily:"inherit"}} className="bot" >
                    <div style={{paddingTop:"20px"}}>
                    
                   <h3>Message me</h3>
                   <form ref={form} onSubmit={sendemail}>
                   <input type="text" required  className="input-group-text bg-light" placeholder="Name" name="name" value={info.name} style={{width:"40%",display:"inline-block"}} onChange={put}/> 
                   <input type="email"  required placeholder="Email" style={{width:"40%",display:"inline-block"}} name="email" value={info.email} className="input-group-text bg-light" onChange={put}/>
                   <br/>
                   <br/>
                  
                   
                   <input type="text"  required placeholder="Subject" className="input-group-text bg-light"  style={{width:"81%"}}  value={info.subject} name="subject" onChange={put}/>
                   <br/>
                   
                   
                   <input type="text" required placeholder="Message" className="input-group-text bg-light"  style={{width:"81%",height:"50px"}}  value={info.message} name="message" onChange={put}/>
                   <br/>
                   
                   <button className="btn btn-outline-danger "   type="submit">Send Message</button>
                   </form>
                    </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Contact;