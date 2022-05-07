import React,{useState} from 'react';
import  "./Port.scss";

const Teams = () => {
    const [display,revert]=useState(false);
    const [w,change]=useState("350px")
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "black" ,width:"100%",marginTop:"2.2%",minWidth:"400px"}} className="bottom">
                <div className="moving">
                    <h1 style={{ color: 'white' }}>My Projects</h1>
                    <span style={{ color: 'maroon' }}>____What I Make_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} >
                <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"1%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>TODO and KEEP APP</h3>
                        <p style={{color:"red"}}>First MERN PROJECT</p>
                        <p style={{fontWeight:"bold"}}>Fronetnd:React,bootstrap,javascript </p>
                        <p style={{fontWeight:"bold"}}>Backend:Node js,MongoDB</p>
                        ➡️<p><a href="https://mernharshapp.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps"}} className="boost">Click here</a></p>
                        
                    </div>
                    </div>
                  
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"1%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>TODO APP</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Fronetnd:Html,Css,bootstrap,javascript </p>
                        <p style={{fontWeight:"bold"}}>Backend:Node js,MongoDB</p>
                        ➡️<p><a href="https://harshtodolistwebapp.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps"}} className="boost">Click here</a></p>
                        
                    </div>
                    </div>
                   
                    
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"3%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                    <h3>Chat Application</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Html,Css,bootstrap,javascript, </p>
                       
                        ➡️<p><a href="https://mead-chat-application.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps"}} className="boost">Click Here</a></p>
                    </div>
                    </div>
                
                   {display==true?
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"3%" ,marginTop:"3%"}} className="carding">
                     
                    <div className="card_hover" >
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Weather Application</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Html,Css,bootstrap,javascript,Api </p>
                       
                        ➡️<p><a href="https://mead-node1-weather-application.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps"}} className="boost">Click Here</a></p>
                    </div>
                    </div>
                   :""}
                   
                </div>
                <div className="w-100 bg-danger text-center">
                   <button className="btn" onClick={()=>{
                   
                        
                   
                        revert(!display)
                    
                   
                }}>▶️</button>
                </div>
                

               
            </div>
        </>
    )
}

export default Teams;