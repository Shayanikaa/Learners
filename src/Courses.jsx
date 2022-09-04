import React from 'react'
import { Container , Row, Col } from 'reactstrap';
import course1 from './course1.jpg'
import './Courses.css'
import Coursecard from './Coursecard';
import uiux from './uiUx.jpg';
import android from './android.jpg'
import data from './data.jpg'
import machine from './machine learning.jpg'
import graphic from './graphic.jpg'

const courseData = [
    {
        id:"01",
        tittle:"Web-Development Bootcamp 2022 for beginners",
        lesson:12,
        students:12.5,
        rating:4.5,
        imgUrl:course1
    },
    {
        id:"02",
        tittle:"UI/UX Bootcamp for beginners",
        lesson:15,
        students:20.5,
        rating:5.5,
        imgUrl:uiux
    },
    {
        id:"03",
        tittle:"App Development Bootcamp 2022 for beginners",
        lesson:40,
        students:10.5,
        rating:4.5,
        imgUrl:android
    },
    {
        id:"04",
        tittle:"Machine Learning Bootcamp 2022 for beginners",
        lesson:128,
        students:9.5,
        rating:4.5,
        imgUrl:machine 
    },
    {
        id:"05",
        tittle:"Data Analysis Bootcamp 2022 for beginners",
        lesson:98,
        students:11.1,
        rating:4.5,
        imgUrl:data
    },
    {
        id:"06",
        tittle:"Graphic Design tutorial for beginners",
        lesson:20,
        students:12.5,
        rating:4.5,
        imgUrl:graphic
    }
]

const Courses = () => {
  return (
    <>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <div className='course_top text-center'>
                    <div className='course_top_left'>
                        <h2>Our Courses</h2>
                        
                    </div>
                </div>
            </Col>
            {
                courseData.map(item=>(
                    <Col lg="4" md="4" >
                <Coursecard key={item.id} item={item}></Coursecard>
            </Col>

                ))
            }
            
        </Row>
    </Container>
    </>
  )
}

export default Courses
