import React from 'react';
import  "./Port.css";

const Teams = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "black" ,width:"100%"}} className="bottom">
                <div style={{ margin: "auto", marginTop: "7%" }}>
                    <h1 style={{ color: 'white' }}>My teams</h1>
                    <span style={{ color: 'maroon' }}>____What I provide_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"7%",flexWrap:"wrap",width:"100%"}} >
                    <div style={{width:"350px",textAlign:"center",padding:"15px",height:"270px",paddingTop:"5%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Web Design</h3>
                        <p>Lorem Ipsum is simply dummy text osjdksjdksjkdjssum has been the industry's </p>
                    </div>
                    </div>
                    
                    
                    <div style={{width:"350px",textAlign:"center",padding:"15px",height:"270px",paddingTop:"5%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Advertising</h3>
                        <p>Lorem Ipsum is simply dummy texsjaksjakjskjskt osum has been the industry's </p>
                    </div>
                    </div>
                   
                    <div style={{width:"350px",textAlign:"center",padding:"15px",height:"270px",paddingTop:"5%"}} className="carding">
                     
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Android Developer</h3>
                        <p>Lorem Ipsum is simply dummy text osdjksjkdjksjdksum has been the industry's </p>
                    </div>
                    </div>
                </div>

               
            </div>
        </>
    )
}

export default Teams;