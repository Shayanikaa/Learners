import React from 'react'
import { Container , Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Footer.css'


const footerQuickLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About US",
      url: "#",
    },
  
    {
      display: "Courses",
      url: "#",
    },
  
    {
      display: "Blog",
      url: "#",
    },
  ];
  const footerInfoLinks = [
    {
      display: "Privacy Policy",
      url: "#",
    },
    {
      display: "Membership",
      url: "#",
    },
  
    {
      display: "Purchases Guide",
      url: "#",
    },
  
    {
      display: "Terms of Service",
      url: "#",
    },
  ];  

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg="3" md="6" className="mb-4">
                    <h2 className='d-flex align-item-center gap-1'>
                    <i className="ri-lightbulb-flash-line"></i> Learners
                    </h2>
                    <div className='follows'>
                        <p>Follow us</p>
                        <span >
                            {" "}
                            <a href="facebook.com"></a>
                        <i className="ri-facebook-circle-fill"></i>
                        </span>
                        <span >
                            {" "}
                            <a href="instagram.com"></a>
                            <i className="ri-instagram-fill"></i>
                        </span>
                        <span >
                            {" "}
                            <a href="twitter.com"></a>
                        <i class="ri-twitter-fill"></i>
                        </span>
                        <span >
                            {" "}
                            <a href="linkedln.com"></a>
                        <i class="ri-linkedin-box-fil"></i>
                        </span>
                        <span >
                            {" "}
                            <a href="github.com"></a>
                        <i class="ri-github-fill"></i>
                        </span>
                    </div>
                </Col>
                <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Kolkata,India</p>
            <p> Phone: +919834567865 </p>
            <p>Email: example@gmail.com</p>
          </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
