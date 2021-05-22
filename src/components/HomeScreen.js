import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../index.css';
import WhatWeOffer from './WhatWeOffer'
import NavBar from './NavBar'
import Footer from './Footer';
import CryptoTable from './CryptoTable';
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
  
function HomeScreen(){
    return(
        <>
            <NavBar />
            <Jumbotron className="jumbo">
                <div className="homeScreenWords">
                    <h1 style={{ textAlign: "center" }}>BN Crypto Tracker</h1>
                    <p style={{ textAlign: "center" }}>This is a web app that allows you to keep track of all your favorite Crypto coins! Sign up today!</p>

                </div>
            </Jumbotron>
            <WhatWeOffer />
            <CryptoTable />
            <Footer />
        </>
    )
}

export default HomeScreen;