import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../index.css';
import WhatWeOffer from '../components/WhatWeOffer'
import ChartsJS from '../components/Charts';
import Footer from '../components/Footer';
import CryptoTable from '../components/CryptoTable';
  
function HomeScreen(){
    return(
        <>
            <Jumbotron className="jumbo">
            {/* <Nav className="justify-content-end nav" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
                </Nav.Item>
            </Nav> */}
                <div className="homeScreenWords">
                    <h1 style={{ textAlign: "center" }}>BN Crypto Tracker</h1>
                    <p style={{ textAlign: "center" }}>This is a web app that allows you to keep track of all your favorite Crypto coins! Sign up today!</p>
                    <p><Button variant="primary">Learn more</Button></p>
                </div>
            </Jumbotron>
            <WhatWeOffer />
            <CryptoTable />
            <Footer />
        </>
    )
}

export default HomeScreen;