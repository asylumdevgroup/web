import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: 50
};

const Home = () => (
  <Container style={{ padding: 50 }}>
    <div class="p-5 mb-4 bg-dark rounded">
    <h1 style={{fontFamily: 'Monoton'}}><span style={{color: '#ff0066'}}>Asylum</span> <span style={{color: '#33ccff'}}>Dev</span> <span style={{color: '#ffff99'}}>Group</span></h1>
    <p style={{color:'white'}} class="lead">Asylum Dev Group is a development team founded by MCAdventureCity that develops Modpacks and Mods for the sandbox game <em>Minecraft</em>.</p>
    </div>
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
          <Card.Title>ADG Gregic Dimensions</Card.Title>
          <Card.Text>
            A GregTech CE Unofficial Modpack focused on intertwined progression between magic, dimensional exploration, and technology.
            <br />
            This is our primary in-development project.
            <br />
            Alpha Release Coming Fall 2023
            <br />
            Full Release Coming Mid-2024
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Compressed Skies</Card.Title>
          <Card.Text>
            A Steampunk-themed Skyblock Modpack focused around several unknown steam-themed mods, with Forge Energy based mods pushed to late-game.
            <br />
            Coming Q4 2023
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG The Great Adventure II</Card.Title>
          <Card.Text>
            An ADG Expert Modpack Designed around a linear, story-based progression through many dimensions and Magic mods.
            <br />
            Coming 2024
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={cardStyle} bg='light'>
        <Card.Body>
          <Card.Title>ADG Technical Skies</Card.Title>
          <Card.Text>
            An Expert Skyblock Modpack focused around automation and long processing chains with GregTech CE Unofficial.
            <br />
            Coming TBD
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