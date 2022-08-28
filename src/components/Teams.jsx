import React,{useState} from 'react';
import  "./Port.scss";

const Teams = () => {
    const [display,revert]=useState(false);
    const [w,change]=useState("350px")

    const openpage=()=>{
        alert("ji")
        document.getElementsByClassName("auto")[0].click();
    }
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "black" ,width:"100%",marginTop:"2.2%",overflow:"hidden"}} className="bottom container-fluid">
                <div className="moving w-100 text-center">
                    <h1 style={{ color: 'white',fontSize:"200%" }}>My Projects</h1>
                    <span style={{ color: 'maroon' }}>____What I Make_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap"}} className="container-fluid" >
          
                <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"1%",marginBottom:"7%"}} className="carding" >
                <a href="https://mernharshapp.herokuapp.com/"  target="_blank" className="auto" style={{fontWeight:"bold",fontVariantCaps:"petite-caps",textDecoration:"none"}} className="boost">
                    <div className="card_hover text-white">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>TODO and KEEP APP</h3>
                        <p style={{color:"red"}}>First MERN PROJECT</p>
                        <p style={{fontWeight:"bold"}}>Fronetnd:React,bootstrap,javascript </p>
                        <p style={{fontWeight:"bold"}}>Backend:Node js,MongoDB</p>
                        ➡️<p className="text-danger">Click here</p>
                        
                    </div>
                    </a>
                    </div>
                  
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"1%",marginBottom:"7%"}} className="carding">
                    <a href="https://harshtodolistwebapp.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps",textDecoration:"none"}} className="boost">
                    <div className="card_hover text-white">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>TODO APP</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Fronetnd:Html,Css,bootstrap,javascript </p>
                        <p style={{fontWeight:"bold"}}>Backend:Node js,MongoDB</p>
                        ➡️<p className="text-danger">Click here</p>
                        
                    </div>
                    </a>
                    </div>
                   
                    
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"3%",marginBottom:"7%"}} className="carding">
                    <a href="https://mead-chat-application.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps",textDecoration:"none"}} className="boost">
                    <div className="card_hover text-white">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                    <h3>Chat Application</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Html,Css,bootstrap,javascript, </p>
                       
                        ➡️<p className="text-danger">Click Here</p>
                    </div>
                    </a>
                    </div>
                
                   
                    <div style={{width:w,textAlign:"center",padding:"15px",height:"270px",paddingTop:"3%" }} className="carding">
                    <a href="https://mead-node1-weather-application.herokuapp.com/"  target="_blank" style={{fontWeight:"bold",fontVariantCaps:"petite-caps",textDecoration:"none"}} className="boost">
                    <div className="card_hover text-white" >
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Weather Application</h3>
                        <p style={{color:"red"}}>This project contains:</p>
                        <p style={{fontWeight:"bold"}}>Html,Css,bootstrap,javascript,Api </p>
                       
                        ➡️<p className="text-danger">Click Here</p>
                    </div>
                    </a>
                    </div>
                 
                   
                </div>
               
                

               
            </div>
        </>
    )
}

export default Teams;