import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { formatterPeso } from '../../helpers/formatterPeso'
import ColorPalette from '../ColorPalette/ColorPalette'

const ProductDetail = ({ image, name, description, price }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <article className='product-detail'>
      <img
        data-aos='fade-up'
        src={process.env.PUBLIC_URL + image}
        alt={name}
      />
      <div
        className='product-detail__text-container'
        data-aos='fade-up'>
        <div className='product-detail__name'>
          <h3>{name}</h3>
        </div>
        <div className='product-detail__text-container-all'>
          <strong className='product-detail__text-container-price'>
            {formatterPeso(price)}
          </strong>
          <p>
            {description.split('\\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div>
            <strong>Materiales:</strong>
            <ul>
              <li>Trabajamos con madera de fibrofacil.</li>
              <li>
                Pinturas y lacas ecológicas, libres de tóxicos y solventes.
              </li>
            </ul>
          </div>
          <div>
            <strong>Ten en cuenta...</strong>
            <ul>
              <li>Puedes elegir el color de nuestra paleta:</li>
              <ColorPalette />
              <li>
                Se retira/despacha a los 7 días hábiles de realizada la compra.
              </li>
              <li>
                Los productos enviados por correo, se entregan desarmados.
              </li>
            </ul>
          </div>
          <div className='product-detail__buttons'>
            <a
              href={`https://api.whatsapp.com/send?phone=543517461354&text=%C2%A1Hola%2C%20Amoli%20Creaciones%21%20Quiero%20informaci%C3%B3n%20de%20su%20${name}...`}
              target='_blank'
              rel='noreferrer'
              className='a-button'>
              <FontAwesomeIcon icon={faWhatsapp} /> Comprar
            </a>
            <button
              className='a-button'
              onClick={handleGoBack}>
              <FontAwesomeIcon icon={faCircleArrowLeft} /> Volver
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductDetail
