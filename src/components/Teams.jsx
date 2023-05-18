import React, { useState } from 'react';
import "./Port.scss";

const Teams = () => {
    const [display, revert] = useState(false);
    const [w, change] = useState("350px")
    return (
        <div style={{ backgroundColor: "black", minHeight: "100vh", overflow: "hidden" }}>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", backgroundColor: "black", width: "100%", marginTop: "2.2%", overflow: "hidden" }} className="bottom container-fluid">
                <div className="moving w-100 text-center">
                    <h1 style={{ color: 'white', fontSize: "200%" }}>My Projects</h1>
                    <span style={{ color: 'maroon' }}>____What I Make_____</span>
                </div>


                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%", marginBottom: "7%", flexWrap: "wrap" }} className="container-fluid" >

                    <div style={{ width: '350px', textAlign: "center", padding: "15px", maxWidth: "330px", paddingTop: "1%", marginBottom: "7%" }} className="carding">
                        <a href="https://chat-app-hf88.onrender.com/" target="_blank" style={{ fontWeight: "bold", fontVariantCaps: "petite-caps", textDecoration: "none" }} className="boost">
                            <div className="card_hover text-white">
                                <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></span>
                                <h3>Chat Application</h3>
                                <p style={{ color: "red", wordBreak: "break-all" }}>MernStack+Socket.io</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Frontend : React </p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Backend : Nodejs,MongoDB</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>WebSockets : Socket.io</p>
                                ➡️<p className="text-danger">Click Here</p>
                            </div>
                        </a>
                    </div>
                    <div style={{ width: "350px", textAlign: "center", padding: "15px", maxWidth: "330px", paddingTop: "1%", marginBottom: "7%" }} className="carding" >
                        <a href="https://recipebook-m0jfutzhe-harshkumar88.vercel.app/" target="_blank" className="auto boost" style={{ fontWeight: "bold", fontVariantCaps: "petite-caps", textDecoration: "none" }}>
                            <div className="card_hover text-white">
                                <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></span>
                                <h3>Recipe Book</h3>
                                <p style={{ color: "red" }}>MernStack</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Frontend : React </p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Backend : Nodejs,MongoDB</p>
                                ➡️<p className="text-danger">Click Here</p>
                            </div>
                        </a>
                    </div>

                    <div style={{ width: "350px", textAlign: "center", padding: "15px", maxWidth: "330px", paddingTop: "1%", marginBottom: "7%" }} className="carding" >
                        <a href="https://medium-clone-two-tau.vercel.app/" target="_blank" className="auto boost" style={{ fontWeight: "bold", fontVariantCaps: "petite-caps", textDecoration: "none" }}>
                            <div className="card_hover text-white">
                                <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></span>
                                <h3>Medium Clone</h3>
                                <p style={{ color: "red" }}>MernStack</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Frontend : React </p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Backend : Nodejs,MongoDB</p>
                                ➡️<p className="text-danger">Click Here</p>
                            </div>
                        </a>
                    </div>

                    <div style={{ width: "350px", textAlign: "center", padding: "15px", maxWidth: "330px", paddingTop: "1%", marginBottom: "7%" }} className="carding" >
                        <a href="https://mernstack-ivory.vercel.app/" target="_blank" className="auto boost" style={{ fontWeight: "bold", fontVariantCaps: "petite-caps", textDecoration: "none" }}>
                            <div className="card_hover text-white">
                                <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></span>
                                <h3>TODO and KEEP APP</h3>
                                <p style={{ color: "red" }}>MernStack</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Frontend : React </p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Backend : Nodejs,MongoDB</p>
                                ➡️<p className="text-danger">Click here</p>
                            </div>
                        </a>
                    </div>


                    <div style={{ width: w, textAlign: "center", padding: "15px", maxWidth: "330px", paddingTop: "3%", height: "270px" }} className="carding">
                        <a href="https://busy-gold-brown-bear-cap.cyclic.app/" target="_blank" style={{ fontWeight: "bold", fontVariantCaps: "petite-caps", textDecoration: "none" }} className="boost">
                            <div className="card_hover text-white" >
                                <span><img src="https://th.bing.com/th/id/OIP.GVhZiY6mRWJmELdhHs0ttwHaFP?pid=ImgDet&rs=1" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></span>
                                <h3>Weather Application</h3>
                                <p style={{ color: "red", wordBreak: "break-all" }}>This project contains:</p>
                                <p style={{ fontWeight: "bold", wordBreak: "break-all" }}>Html,Css,bootstrap,javascript </p>

                                ➡️<p className="text-danger">Click Here</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams;