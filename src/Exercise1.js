import React from 'react';

function Exercise1(props){
    let styles;
    let styles2;
    if (props.question){
        styles={display:props.question}
    }

    else  { 
        styles={display:"none" ,backgroundColor:"red"}
        styles2={backgroundColor:"grey", position: "relative"}
    }


    return(
        <div>
        <h3 style={styles}>Question:{props.question}</h3>
        <h3 style={styles2}>Answer:{props.answer}</h3>
        </div>
    )



}
export default Exercise1