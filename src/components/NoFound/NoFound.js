import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NoFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div className='no-found'>
      <div data-aos='fade-up'>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/404.png'}
          alt='404'
        />
        <h2>Oh, no hay nada aquí...</h2>
        <Link
          to='/'
          className='a-button'>
          Ir al inicio
        </Link>
      </div>
    </div>
  )
}

export default NoFound
