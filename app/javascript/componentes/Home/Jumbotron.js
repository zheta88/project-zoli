import React, {Component} from "react"
import styled from "styled-components"

const Section = styled.section`
    background-color: #3A2F0B;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`
const Header= styled.h1`
 color: #fff;  
 font-weight:700;
 font-size:40px;
 line-height:52px;
`
const Subhead = styled.p`
font-size:18px;
font-weight:500;
`




const Jumbotron = ()=>{
   

    return (    

        <Section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>ZOLI</Header>
                            <Subhead>En el video de al lado, Zully de Zoli, te da la bienvenida.</Subhead>
                            <div id="draggable" class="ui-widget-content">
                                <img width="160" height="215" src="https://www.pinclipart.com/picdir/big/143-1435064_the-rapid-changes-in-technology-and-increased-demands.png"></img> 
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <iframe width="560" height="315" src="https://player.vimeo.com/video/372718153" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
} 
export default Jumbotron