import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import '../index.css';
import WhatWeOffer from '../components/WhatWeOffer'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  
function HomeScreen(){
    return(
        <>
            {/* <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
                </Nav.Item>
            </Nav> */}
            <Jumbotron className="jumbo">
                <div className="homeScreenWords">
        
                        <h1>BN Crypto Tracker</h1>
                        <p>
                            This is a web app that allows you to keep track of all your favorite Crypto coins! Sign up today!
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>

                </div>
            </Jumbotron>
            <WhatWeOffer />
            {/* <div className="charts">
                <Line data={data}  width={400} height={850} options={{ maintainAspectRatio: false }} />
            </div> */}
        </>
    )
}

export default HomeScreen;