import React from "react"
import ContactCard from "./ContactCard"


function MainContent() {
    let date = new Date()
    let time = date.getHours()

    let styles={
        color:"#FF8C00",
        backgroundColor:"#FFF100"
    }
    return(
        <React.Fragment>
        <div>
            < input type= "checkbox" /><il style={styles}>laPceholder</il>
            <h1> </h1>
            < input type= "checkbox" /><il style={styles}>laPceholder</il>
            <h1> </h1>
            < input type= "checkbox" /><il style={styles}>laPceholder</il>
            <h3>Here will be the main content located</h3>
            <h1 style={styles}>  Now is {time} o 'clock</h1>
            <ul><li>1</li><li>2</li><li>3</li></ul>
        </div>
        <div>
            <ContactCard/>
        </div>
        </React.Fragment>

    )
}




export default MainContent