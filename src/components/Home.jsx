import React from 'react';



const Home = () => {
    return (
        <>
        <div className="w-100" style={{ backgroundImage:"url('https://photostockeditor.com/asset/1080/35/359a/PSE371.jpg')",backfaceVisibility:"hidden" ,backgroundAttachment: "fixed", backgroundSize:"100% 100%",height: "100vh" }} className="bottom">
                            
      
            <div className="container container-fluid" style={{display:'flex',flexWrap:"wrap"}}>
                <div className="m-5 text-white" style={{paddingTop:"10%",height:"200px"}}>
                    <span>Hello,my name is </span><br />
                    <span style={{ fontFamily: "sans-serif", fontSize: "40px" }}>Harsh Kumar</span>
                    <h4>And I'm a Web Developer </h4>
                    <button className="btn btn-outline-danger">Hire me</button>
                </div>
                
            </div>
        
            </div>
        </>
    )
}
export default Home;