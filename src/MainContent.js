import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import ImgDisplay from './ImgDisplay'
import Exercise1 from './Exercise1'

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

     
  <ImgDisplay display={{ImgUrl:"https://c4.wallpaperflare.com/wallpaper/791/10/336/video-games-hollow-knight-video-game-art-fantasy-art-hd-wallpaper-preview.jpg", 
      text:"Hollow" }} />
      
  {/*<ImgDisplay 
      ImgUrl="https://images.hdqwalls.com/download/hollow-knight-i6-1280x720.jpg" 
      text="Hollow "/>
  <ImgDisplay 
      ImgUrl="https://cdn.statically.io/img/c4.wallpaperflare.com/wallpaper/845/789/150/hollow-knight-team-cherry-wallpaper-preview.jpg" 
      text="Hollow "/>
  <ImgDisplay 
      ImgUrl="http://images.nintendolife.com/950fabe32a4ce/hollow-knight.900x.jpg"
      text="Hollow "/>
        
        {/*<img src="h ttp://images.nintendolife.com/950fabe32a4ce/hollow-knight.900x.jpg"></img>*/}

        <Exercise1 answer="wwwwwww"/>
        <Exercise1 question="aaaaaa" answer="wwwwwww"/>
        <Exercise1 question="aaaaaa" answer="wwwwwww"/>
        <Exercise1 question="aaaaaa" answer="wwwwwww"/>

    </div>
  );
}

export default MainContent;