import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import '../index.css';

function WhatWeOffer(){
    return(
        <>
           <h1 className="aboutSection">What We Offer</h1>
            <CardDeck className='cardDeck'>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                    <Card.Body>
                    <Card.Title>Crypto Tracking</Card.Title>
                    <Card.Text>
                        Free tracking of all of your favorite Cryptocurrency! Get real time tracking and charts on almost any Cryptocurrency you can think of.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated on 1/20/21</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                    <Card.Body>
                    <Card.Title>Price Notifications</Card.Title>
                    <Card.Text>
                        Want to know when Bitcoin or another Cryptocurrency hits a certain amount? Setup a notification you will recieve an email as soon as the price reaches your target!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated on 1/20/21</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/28/09/27/one-hundred-1165990_960_720.jpg" />
                    <Card.Body>
                    <Card.Title>Price? 100% Free!</Card.Title>
                    <Card.Text>
                        Everything available on this website is completely free to use! All you have to do is create a free account and then you are able to access all of our features!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated on 1/20/21</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )};

export default WhatWeOffer;