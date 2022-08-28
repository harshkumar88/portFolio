import React from 'react';
import  "./Port.scss";

const Services = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "black",marginTop:"2.2%",minHeight:"95.6vh"}} className="bottom container-fluid">
                <div className="moving w-100  text-center">
                    <h1 style={{ color: 'white' ,fontSize:"250%"}}>My Services</h1>
                    <span style={{ color: 'maroon' }}>____What I provide_____</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",marginTop:"5%",marginBottom:"1.3%",flexWrap:"wrap"}} className="container " >
                    <div style={{width:"300px",textAlign:"center",padding:"15px",height:"auto",paddingTop:"5%",marginBottom:"8%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Web Design</h3>
                        <p>I have the ability to build websites using the newest React and MongoDB technologies. </p>
                    </div>
                    </div>
                    
                    
                    <div style={{width:"300px",textAlign:"center",padding:"15px",height:"auto",paddingTop:"5%",marginBottom:"8%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                        <h3>Advertising</h3>
                        <p>Building an advertising website to promote brands </p>
                    </div>
                    </div>

                    <div style={{width:"300px",textAlign:"center",padding:"15px",height:"auto",paddingTop:"5%",marginBottom:"8%"}} className="carding">
                    <div className="card_hover">
                    <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{width:"30px",height:"30px",borderRadius:"50%"}}/></span>
                    <h3>Android Programmer</h3>
                        <p>I can use Java to create Android applications.s</p>
                    </div>
                    </div>
                   
                   
                </div>

               
            </div>
        </>
    )
}

export default Services;