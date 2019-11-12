import React, {Component} from "react"
import Jumbotron from "./Jumbotron"

class Home extends Component{
    constructor(){
        super()
        this.state={
            modules: [
               {id: 1, title:"", description:"", active:false}
            ]
        }

    }
    render()  {
        return(
            <Jumbotron/>               
        )
    }

}

export default Home