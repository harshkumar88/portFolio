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

            <div className="w-100  h-100" style={{ backgroundImage: `url(${img})`, backfaceVisibility: "hidden", backgroundAttachment: "fixed", backgroundSize: "100% 100%", maxHeight: "100vh",minHeight:"100vh", backgroundRepeat: "no-repeat", minWidth: "400px" }} className="bottom"><div className=" container-fluid " style={{ display: 'flex', flexWrap: "wrap" }}>
                <div className="m-5 text-white mx-auto padd" style={{ paddingTop: "14%", height: "200px", textShadow: "1px 5px black" }}>
                    {/* <span>Hello,my name is </span><br /> */}
                    <span style={{ fontFamily: "sans-serif", fontSize: "40px" }} className="harsh">Greetings, I'm Harsh Kumar.</span>
                    <h3>I'm a <span style={{ color: "maroon", fontVariant: "small-caps", fontFamily: "sans-serif", fontWeight: "bold" }} className="fontchange">{text}<span style={{ color: "white" }}>|</span></span> </h3>
                    <button className="btn" style={{ backgroundColor: "maroon" }}><NavLink exact to="/portFolio/Contacts" style={{ color: "white", textDecoration: "none" }} >Hire me</NavLink></button>
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