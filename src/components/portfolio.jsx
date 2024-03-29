import React, { useEffect } from 'react';
import Header from './Header';
import {Switch,Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills'
import "./Port.scss"
import Contacts from './Contact';
import Project from "./Teams"

//<h1 style={{ color: 'white' }}>Portfo<span style={{ color: 'red' }}>lio</span></h1>
//<div className="w-100" style={{ backgroundColor: "black", backgroundAttachment: "fixed", height: "98vh" }}>
              // <Header/>
                
           // </div>

const App = () => {
    
    return (
        <>
         
        <Header/>
            <Switch>
                <Route exact path="/" render={()=>{
                    return <>  <Home/>
                               <About/>
                               <Services/>
                               <Skills/>
                               <Project/>
                               <Contacts/></>
                               }}/>
                               <Route exact path="/portfolio" render={()=>{
                                return <>  <Home/>
                                           <About/>
                                           <Services/>
                                           <Skills/>
                                           <Project/>
                                           <Contacts/></>
                                           }}/>
                <Route exact path="/portFolio/About"  render={()=>{
                     return <About name="down" />
                }}/>
                <Route exact path="/portFolio/Services"  component={Services}/>
                <Route exact path="/portFolio/Skills"  component={Skills}/>
                <Route exact path="/portFolio/Projects"  component={Project}/>
                <Route exact path="/portFolio/Contacts"  component={Contacts}/>
            </Switch>
           
            

        </>
    )
}

export default App;