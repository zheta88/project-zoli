// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"
import Home from "../componentes/Home/Home"




// const rootElement = document.getElementById("root");
// ReactDOM.render(<Home/>, rootElement);


 document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
     <Home/>,
     document.body.appendChild(document.createElement('root')),
     )
  })
 