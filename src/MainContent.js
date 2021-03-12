import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MainContent() {

let date = new Date()
let hour = date.getHours()
let timedisplayed

if( hour >7 && hour<9){
    timedisplayed="Morning"
}
else if (hour>=9 && hour <20 ){
    timedisplayed="Afternoon"
}
else{timedisplayed="Evening"}



  return (
    <div >
        
        
        <h1>Good {timedisplayed}</h1>   

        <label class="container">One
        <input type="checkbox" />
        <span class="checkmark"></span>
        </label>

        <label class="container">TWO
        <input type="checkbox" />
        <span class="checkmark"></span>
        </label>

        <label class="container">Three
        <input type="checkbox" />
        <span class="checkmark"></span>
        </label>

        <input type="checkbox" />

    </div>
  );
}

export default MainContent;