import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';



const About = () => (
    <Container style={{padding:50}}>
    <Row>
      <Col xs={12} md={6}>
      <h1>About Us</h1>
        <hr width="150px"/>
      </Col>
      <Col xs={12} md={6}>
      <p>The First Iteration of what would eventually become Asylum Dev Group, the CityTeam, was founded in early 2015 by MCAdventureCity. After a rocky start and several long periods of inactivity, the name was eventually changed to Asylum Dev Group. Our "first" modpack, ADG Volatile 2, was released in June 2016. Our most recently released pack, ADG Omega 5, was released August 2021. We currently have three members, though are always looking to recruit more!</p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12}>
        <h2>Our People</h2>
      </Col>
    </Row>
    <Row>
        <Card bg='light' style={{ width: '18rem' }}>
        <Card.Img src='mcadventurecity.jpg'/> 
          <Card.Body>
            
              <Card.Title>MCAdventureCity (he/him)</Card.Title>
              <Card.Text>
                Founder
              </Card.Text>
              <Card.Text>
                Lead Developer
              </Card.Text>
              <Card.Text>
                Webmaster
              </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light' style={{ width: '18rem' }}>
        <Card.Img src='nayla.jpg'/>
          <Card.Body>
          
              <Card.Title>EndangeredNayla (they/them)</Card.Title>
              <Card.Text>
                Co-Lead Developer, Kitchen Sink Division
              </Card.Text>
              <Card.Text>
                Logo Artist
              </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light' style={{ width: '18rem' }}>
        <Card.Img src='placeholder.jpg'/>
          <Card.Body>
              <Card.Title>CJWilk (he/him)</Card.Title>
              <Card.Text>
                Inactive Developer
              </Card.Text>
              <Card.Text>
                Consultant, Expert Division
              </Card.Text>
          </Card.Body>
        </Card>
        <Card bg='light' style={{ width: '18rem' }}>
        <Card.Img src='placeholder.jpg'/>
          <Card.Body>
              <Card.Title>Vacant Positions</Card.Title>
              <Card.Text>
                Co-Lead Developer, Expert Division
              </Card.Text>
              <Card.Text>
                Co-Lead Developer, Themed Pack Division
              </Card.Text>
              <Card.Text>
                Developer, all Divisions (At least three positions open)
              </Card.Text>
              <Card.Text>
                Mod Developer
              </Card.Text>
              <Card.Text>
                Legacy Pack Maintainer
              </Card.Text>
              <Card.Text>
                Lore Writer
              </Card.Text>
              <Card.Text>
                Texture Artist
              </Card.Text>
          </Card.Body>
        </Card>
    </Row>
    
  </Container>
)

export default About;