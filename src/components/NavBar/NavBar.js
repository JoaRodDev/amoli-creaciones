import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

const ANavBar = ({ handleSectionChange, section }) => {
  const [color, setColor] = useState(false)
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const toggleNavbar = () => {
    setNavbarExpanded(!navbarExpanded)
  }

  const handleClick = (section) => {
    handleSectionChange(section)
    if (window.innerWidth < 992 ) {
      toggleNavbar()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`mb-3 navbar ${color ? 'navbar-bg' : ''}`}
          expanded={navbarExpanded}>
          <Container fluid>
            <Link to='/'>
              <img
                src={process.env.PUBLIC_URL + '/assets/images/full-logo.png'}
                alt='Logo'
                className='navbar__logo'
              />
            </Link>
            <div
              className='navbar-toggler'
              onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='start'>
              <Offcanvas.Header closeVariant='white'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ¡Bienvenido!
                  <button onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link
                    onClick={() => handleClick(section)}
                    as={Link}
                    to='/home'>
                    Inicio
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleClick(section)}
                    as={Link}
                    to='/products'>
                    Productos
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleClick(section)}
                    as={Link}
                    to='/home/who-are-we'>
                    ¿Quiénes somos?
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleClick(section)}
                    as={Link}
                    to='/home/faq'>
                    Preguntas frecuentes
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default ANavBar
