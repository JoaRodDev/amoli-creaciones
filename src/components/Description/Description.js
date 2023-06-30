import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Description = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div className='description'>
      <div data-aos='fade-up'>
        <p className='description__body'>
          <strong><em>¡Montessori se siente!</em></strong>
          <br /> 
          <br /> 
          No solo se siente a través de sus hermosos materiales manipulativos;
          Montessori se siente dentro y deja una huella tanto en los niños como
          en los papás que han tenido la fortuna de conocer un método tan
          respetuoso con los niños como profundamente motivador, un increíble
          despertar a la curiosidad y el aprendizaje.
        </p>
        <Link
          to='/products'
          className='a-button'>
          Nuestros productos
        </Link>
      </div>
    </div>
  )
}

export default Description
