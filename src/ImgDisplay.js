import React from 'react';

function ImgDisplay(props){
return(

    <div>

        <img src={props.display.ImgUrl} />
        <p>{props.display.text}</p>


 </div>


)

}
export default ImgDisplay