import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom"
import img from './final.jpg'


let data = "Web developer.";
let newdata = "Web designer.";

const Home = () => {
    const [toggle, rev] = useState(false);
    const [text, convert] = useState("");
    window.addEventListener('scroll', event => {
        if (window.scrollY == '0') {

            rev(false)
        }
        else {
            rev(true);

        }


    })


    useEffect(() => {
        let i = 0;
        let s = "";
        let c = data.length;
        let pick = true;
        const a = setInterval(() => {
            if (pick) {
                if (i == data.length && s.length == 0) {
                    i = 0;
                    c = newdata.length;
                    pick = !pick;
                }
                else if (i == data.length) {
                    s = s.slice(0, c - 1)
                    c--;

                    convert(s);
                    console.log(s)

                }
                else {
                    s = s + data[i];

                    convert(s);

                    i++;
                }
            }
            else {
                if (i == newdata.length && s.length == 0) {
                    i = 0;
                    c = data.length;
                    pick = !pick;
                }
                else if (i == newdata.length) {
                    s = s.slice(0, c - 1)
                    c--;

                    convert(s);
                    console.log(s)

                }
                else {
                    s = s + newdata[i];

                    convert(s);

                    i++;
                }
            }

        }, 100)




    }, [])
    const back = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
        {/* style={{ backgroundImage: `url(${img})`, backfaceVisibility: "hidden", backgroundAttachment: "fixed", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", minWidth: "400px" }} */}

            <div className="w-100  h-100 bottom"  style={{ backgroundImage: `url(${img})`, backfaceVisibility: "hidden", backgroundAttachment: "fixed", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",minHeight:"100vh"}}>
            <div className=" container-fluid " style={{ display: 'flex', flexWrap: "wrap" }}>
                <div className=" text-white mx-auto padd  w-100 wid" style={{textShadow: "1px 5px black",position:"relative",top:"30vh" }}>
                    {/* <span>Hello,my name is </span><br /> */}
                    <div className="mx-auto w-75">
                    <span style={{ fontFamily: "sans-serif", fontSize: "300%" }} className="harsh">Greetings, I'm Dipanshu Bansal.</span>
                    <h3><span style={{ color: "maroon", fontVariant: "small-caps", fontFamily: "sans-serif", fontWeight: "bold" ,fontSize:"150%"}} className="fontchange">{text}<span style={{ color: "white" }}>|</span></span> </h3>
                  
                    <button className="btn" style={{ backgroundColor: "maroon" }}><NavLink exact to="/portFolio/Contacts" style={{ color: "white", textDecoration: "none" }} >Hire me</NavLink></button>
                    </div>
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