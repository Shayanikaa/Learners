import React, { useRef} from 'react'
import { Container } from 'reactstrap';
import './Header.css';

const navlinks =[
  {
    display: 'Home',
    url: '#'
  },
  {
    display: 'Courses',
    url: './Courses.jsx'
  },
  {
    display: 'Features',
    url: './Features.jsx'
  },
  {
    display: 'About Us',
    url: './About.jsx'
  }
]
const Header = () => {

  const menuRef = useRef()
  const menuToggle = ()=>menuRef.current.classList.toggle('active_menu')
  return (
    <header className='header '>
    <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className='logo'>
            <h2 className="d-flex align-items-center gap-1">
            <i className="ri-lightbulb-flash-line"></i> Learners
            </h2>
          </div>
           <div className="nav d-flex align-items-center">
            <div className='nav-menu' ref={menuRef} onClick={menuToggle}>
              <ul className='nav_list'>
                {
                  navlinks.map((item,index)=>(
                    <li key={index} className='nav-item'>
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='menu-sec'>
              <span><i className="ri-menu-fill" onClick={menuToggle}></i></span>
            </div>
           </div>
        </div>
    </Container>
    </header>
  )
}

export default Header
