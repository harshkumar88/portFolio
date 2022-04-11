import React from 'react';
import  "./Port.css";
import {NavLink} from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "white" ,width:"100%"}} className="bottom">
                <div style={{ margin: "auto", marginTop: "7%" }}>
                    <h1 >Contact me</h1>
                    <span style={{ color: 'red' }}>____get in touch_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} >
                    <div style={{width:"550px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",textAlign:"justify"}}>
                    <div>
                    
                        <h4>Get in Touch</h4>
                        <p>Lorem Ipsum is simply dummy text osjdksjdksjkdjssum has been the industry'sx
                        text osjdksjdksjkdjssum has been the industry'sxtext's </p>
                    </div>
                   <div style={{display:'inline',paddingTop:"8px"}}><img src="https://th.bing.com/th/id/OIP.zZa20m20pAHecVLMkIyXoAAAAA?pid=ImgDet&w=185&h=185&rs=1" style={{width:"40px"}}/></div>
                   <div style={{display:"inline" ,marginLeft:"7%",paddingTop:"8px",marginTop:'3px'}}><span style={{marginTop:"3px"}}>Name</span>
                    <br/><span style={{marginLeft:"13%"}}>Harsh Kumar</span>
                    
                    </div>
                    
                      <br/>
                    <div style={{display:'inline'}}><img src="https://th.bing.com/th/id/OIP.zZa20m20pAHecVLMkIyXoAAAAA?pid=ImgDet&w=185&h=185&rs=1" style={{width:"40px"}}/></div>
                   <div style={{display:"inline" ,marginLeft:"7%",paddingTop:"8px",marginTop:'3px'}}><span style={{marginTop:"3px"}}>Name</span>
                    <br/><span style={{marginLeft:"13%"}}>Harsh Kumar</span>
                    
                    </div>


                      <br/>
                    <div style={{display:'inline'}}><img src="https://th.bing.com/th/id/OIP.zZa20m20pAHecVLMkIyXoAAAAA?pid=ImgDet&w=185&h=185&rs=1" style={{width:"40px"}}/></div>
                   <div style={{display:"inline" ,marginLeft:"7%",paddingTop:"8px",marginTop:'3px'}}><span style={{marginTop:"3px"}}>Name</span>
                    <br/><span style={{marginLeft:"13%"}}>Harsh Kumar</span>
                    
                    </div>






                    </div>
                    
                    
                    <div style={{width:"550px",padding:"15px",height:"270px",paddingTop:"1%",fontSize:"15px",fontFamily:"inherit"}} >
                    <div style={{paddingTop:"20px"}}>
                    
                   <h3>Message me</h3>
                   <input type="text"  className="input-group-text bg-light" placeholder="Name" style={{width:"40%",display:"inline-block"}} /> <input type="text" placeholder="Email" style={{width:"40%",display:"inline-block"}} className="input-group-text bg-light"/>
                   <br/>
                   <br/>
                  
                   
                   <input type="text" placeholder="Subject" className="input-group-text bg-light"  style={{width:"81%"}}/>
                   <br/>
                   
                   
                   <input type="text" placeholder="Message" className="input-group-text bg-light"  style={{width:"81%",height:"50px"}}/>
                   <br/>
                   
                   <button className="btn btn-outline-danger" >Send Message</button>
                    
                    </div>

                    </div>
                   
                    
                </div>

               
            </div>
        </>
    )
}

export default Contact;