import React from 'react';
import './Mainsection.css';
import { Container , Row, Col } from 'reactstrap';
import pic from './Main.jpg'

function Mainsection() {
  return (
    <>
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className='main_content mb-4'>
                    <h2 className="mb-4">
                        Anytime AnyWhere Learn <br/> On your Suitable Schedule</h2>
                    <p className='mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Laudantium suscipit laboriosam reprehenderit nam <br/> odio ea autem aspernatur quibusdam, blanditiis numquam.</p>
                    <div className='search'>
                    <input type="text" placeholder='search' />
                    <button className='btn'>Search</button>
                </div>
                </div>
            </Col>
            <Col lg="6" md="6" mb="2">
                <img src={pic} alt="e-learm" className='w-100' />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Mainsection
