import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Header() {
    let h_var="Home"

    const Styles = {
        backgroundColor: "#FFAF5F", /* Green */
        border: "none",
        color: "white",
        padding: "32px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "32px"
      }

  return (
    <React.Fragment>
        <div className="topnav">
      
      
      <b class="active">{h_var}</b>
     <b><a href="https://freefrontend.com/css-checkboxes/" style= {{color:"white" ,textDecoration: "none"}}>Link</a></b>
      <b >Contact</b>
      <b >About</b>

        </div>
        <div >
        

        <h1>Part of header but different child class--will insert button</h1>
        
        <button class="buttonn"> CSS Button </button>
        <button style= {{color:"red" ,backgroundColor:"lightblue"}}>CSS Button</button>
        <button style= {Styles}>CSS Button</button>
        <button style= {Styles}>CSS Button</button>
       


    </div>
    </React.Fragment>

    
    );

  
}

export default Header;