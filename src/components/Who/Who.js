import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Who = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div
      className='who'
      id='who-are-we'>
      <div
        className='who__body'
        data-aos='fade-up'>
        <h3>¿Quiénes somos?</h3>
        <p>
          Amoli Creaciones es un emprendimiento familiar que nace de la mano de
          Eliana y Nicolas.
          <br />
          ¿Por qué juguetes educativos?
          <br />
          Gracias a nuestro hijo, Oliver, y su discapacidad, nos llevó aprender
          y conocer nuevas metodologías. Con él descubrimos todo un mundo de
          juegos y materiales asombrosos. Con la llegada de nuestra hija, Amara,
          quisimos emprender nuestro propio universo de juguetes bonitos, de
          carácter educativo y acordes a nuestros valores.
          <br />
          En estas páginas puedes ver ese pequeño mundo que hemos creado.
          <br />
        </p>
          <strong><em>¡Ojalá lo disfrutes tanto como nosotros!</em></strong>
      </div>
    </div>
  )
}

export default Who
