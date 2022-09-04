import React from 'react'
import { Container , Row, Col } from 'reactstrap';
import './Feature.css'

function Features() {
  return (
    <>
    <Container>
        <Row>
        <Col lg='12' className='mb-5'>
                <div className='course_top  text-center'>
                    <div className='course_top_left'>
                        <h2>Features</h2>

                    </div>
                </div>
            </Col>
            <Col lg="4" md="6">
                <div className='single_feature text-center'>
                    <h2 className='mb-4'><i className="ri-draft-fill"></i></h2>
                    <h6>Quick Learning</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab beatae iusto possimus a delectus aliquam. Voluptates harum ipsum doloremque.</p>
                </div>
            </Col>
            <Col lg="4" md="6">
                <div className='single_feature text-center'>
                    <h2 className='mb-4'><i className="ri-chat-heart-line"></i></h2>
                    <h6>Doubt Clearing Sessions</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse quos nam totam earum corporis officiis quaerat eligendi veritatis in?</p>
                </div>
            </Col>
            <Col lg="4" md="6">
                <div className='single_feature text-center'>
                    <h2 className='mb-4'><i className="ri-task-line"></i></h2>
                    <h6>Free Certificate</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dolore in saepe reprehenderit autem quisquam non nobis maiores fugiat quidem!</p>
                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Features
