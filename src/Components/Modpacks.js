import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';



const Modpacks = () => (
  <Container style={{ padding: 50 }}>
    <Row>
      <Col xs={12} md={6}>
        <h1>Our Modpacks</h1>
        <hr width="150px" />
      </Col>
      <Col xs={12} md={6}>
        <p>Since our inception, we have released twelve modpacks, on <em>Minecraft</em> versions ranging from 1.7.10 to 1.15.2.</p>
      </Col>
    </Row>
    <Row style={{padding: 100}}>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Volatile1LogoV3.png" />
        <Card.Body>
          <Card.Title>ADG Volatile</Card.Title>
          <Card.Text>
            Built for Minecraft 1.8.9 (Originally 1.8.0) - Released November 26, 2014 - Last Updated November 25, 2018
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Volatile2LogoV3.png" />
        <Card.Body>
          <Card.Title>ADG Volatile 2</Card.Title>
          <Card.Text>
          Built for Minecraft 1.10.2 (Originally 1.9.4) - Released June 1, 2016 - Last Updated September 10, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Volatile3LogoV3.png" />
        <Card.Body>
          <Card.Title>ADG Volatile 3</Card.Title>
          <Card.Text>
          Built for Minecraft 1.11.2 - Released May 24, 2017 - Last Updated March 25, 2018
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="GamerCityLogoV2.png" />
        <Card.Body>
          <Card.Title>ADG Presents Gamer City</Card.Title>
          <Card.Text>
          Built for Minecraft 1.10.2 - Released October 5, 2016 - Last Updated September 10, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="GreatAdventureLogoV2.png" />
        <Card.Body>
          <Card.Title>ADG The Great Adventure</Card.Title>
          <Card.Text>
          Built for Minecraft 1.7.10 - Released January 20, 2018 - Last Updated September 10, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="MCASeason3-logo-v2.png" />
        <Card.Body>
          <Card.Title>ADG Presents MCAdventureCity Season 3</Card.Title>
          <Card.Text>
          Built for Minecraft 1.7.10 - Released November 27, 2018
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omega1Logo.png" />
        <Card.Body>
          <Card.Title>ADG Omega 1</Card.Title>
          <Card.Text>
          Built for Minecraft 1.12.2 - Released June 11, 2017 - Last Updated October 3, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omega2Logo.png" />
        <Card.Body>
          <Card.Title>ADG Omega 2</Card.Title>
          <Card.Text>
          Built for Minecraft 1.13.2 - Released March 28, 2019 - Last Updated December 28, 2019
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omega3New.jpg" />
        <Card.Body>
          <Card.Title>ADG Omega 3</Card.Title>
          <Card.Text>
          Built for Minecraft 1.14.4 - Released October 19, 2019 - Last Updated October 26, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omega4Logo.png" />
        <Card.Body>
          <Card.Title>ADG Omega 4</Card.Title>
          <Card.Text>
          Built for Minecraft 1.15.2 - Released January 6, 2020 - Last Updated October 7, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omicron1LogoV3.png" />
        <Card.Body>
          <Card.Title>ADG Omicron 1</Card.Title>
          <Card.Text>
          Built for Minecraft 1.12.2 - Released December 25, 2018 - Last Updated October 26, 2020
    </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} bg='light'>
        <Card.Img variant="top" src="Omicron1LighterLogoV2.png" />
        <Card.Body>
          <Card.Title>ADG Omicron 1 Lighter Edition</Card.Title>
          <Card.Text>
          Built for Minecraft 1.12.2 - Released November 20, 2019 - Last Updated October 26, 2020
    </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  </Container>
)


export default Modpacks;