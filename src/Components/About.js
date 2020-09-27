import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => (
    <Container style={{padding:50}}>
    <Row>
      <Col xs={12} md={6}>
      <h1>About Us</h1>
        <hr width="150px"/>
      </Col>
      <Col xs={12} md={6}>
      <p>The First Iteration of what would eventually become Asylum Dev Group, the CityTeam, was founded in early 2015 by MCAdventureCity. After a rocky start and several long periods of inactivity, the name was eventually changed to Asylum Dev Group. Our "first" modpack, ADG Volatile 2, was released in June 2016. Our most recently released pack, ADG Omega 4, was released January 2020. We currently have four developers, one of whom is inactive.</p>
          <h3>Our People</h3>
          <ul>
              <li>MCAdventureCity - Founder/Lead Developer</li>
              <li>Cranky Supertoon - Developer/Artist</li>
              <li>Between the Ashes - Developer</li>
              <li>Theta Sigma - Inactive Artist</li>
          </ul>
      </Col>
    </Row>
    
  </Container>
)

export default About;