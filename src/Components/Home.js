import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: 50
};

const Home = () => (
  <Container style={{ padding: 50 }}>
    <Jumbotron>
    <h1 style={{fontFamily: 'Monoton'}}><span style={{color: '#ff0066'}}>Asylum</span> <span style={{color: '#33ccff'}}>Dev</span> <span style={{color: '#ffff99'}}>Group</span></h1>
    <p class="lead">Asylum Dev Group is a development team founded by MCAdventureCity that develops Modpacks and Mods for the sandbox game <em>Minecraft</em>.</p>
    </Jumbotron>
    <Row style={{padding: 50}}>
    <Col xs={12} md={6}>
      <h2>News</h2>
        <hr width="150px"/>
      </Col>
      <Col xs={12} md={6}>
        <h3>New Website Launch</h3>
        <span>Posted on September 22, 2020</span>
        <p>I have launched a revamped ADG Website, developed using React. I plan to expand upon it gradually as I have the time.</p>
      </Col>
    </Row>
    <Row style={{padding: 50}}>
    <Col xs={12} md={6}>
      <h2>Upcoming Projects</h2>
        <hr width="150px"/>
        <p>Disclaimer: All dates are tentative.</p>
      </Col>
      <Col xs={12} md={6}>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Untitled GregTech Pack</Card.Title>
          <Card.Text>
            A GregTech CE Unofficial Modpack focused on intertwined progression between magic, dimensional exploration, and technology.
            <br />
            This is our primary in-development project.
            <br />
            Coming October 2022
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Compressed Skies</Card.Title>
          <Card.Text>
            A Steampunk-themed Skyblock Modpack focused around several unknown steam-themed mods, with Forge Energy based mods pushed to late-game.
            <br />
            I will be resuming development of this pack as a side project around early June 2022.
            <br />
            Coming July 2022
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG The Great Adventure II</Card.Title>
          <Card.Text>
            An ADG Expert Modpack Designed around a linear, story-based progression through many dimensions and Magic mods.
            <br />
            Coming Q1 2023
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Ultimatum</Card.Title>
          <Card.Text>
            ADG's flagship Expert Modpack for 1.16.5.
            <br />
            Coming Q2 2023
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG SkyAsylum</Card.Title>
          <Card.Text>
            An Expert Skyblock Modpack focused around automation and long processing chains with GregTech CE Unofficial and Gregicality.
            <br />
            Coming Q3 2023
    </Card.Text>
        </Card.Body>
      </Card>
      
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Finality</Card.Title>
          <Card.Text>
            The Final ADG Modpack for 1.12.2, intended to be a send-off for this era of Modded <em>Minecraft</em>.
            <br />
            Coming TBD
    </Card.Text>
        </Card.Body>
      </Card>
      
      </Col>
    </Row>
  </Container>
)

export default Home;