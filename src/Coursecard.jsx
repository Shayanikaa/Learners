import React from 'react'

function Coursecard(props) {
    const {imgUrl, tittle, lesson, students,rating} = props.item
  return (
    <>
    <div className='course_item'>
                    <div className='course_img'>
                        <img src={imgUrl} alt="" className='w-100' />
                    </div>
                    <div className='course_details'>
                        <h6 className='course_tittle mb-8'>
                            {tittle}
                        </h6>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='lesson d-flex align-items-center gap-1'>
                            <i class="ri-book-open-line"></i> {lesson}lessons
                            </p>
                            <p className='students d-flex align-items-center gap-1'>
                            <i class="ri-user-3-fill"></i>{students}k users
                            </p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='rating d-flex align-items-center gap-1'>
                            <i class="ri-star-fill"></i> {rating}k
                            </p>
                            <p className='enroll d-flex align-items-center gap-1'>
                            <a href="#">Enroll Now</a>
                            </p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Coursecard
