import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatterPeso } from '../../helpers/formatterPeso'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Product = ({ id, image, name, price }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <article
      className='product col-7 col-sm-5 col-md-3'
      data-aos='fade-up'>
      <img
        src={image}
        alt={name}
      />
      <h3 className=''>{name}</h3>
      <strong>{formatterPeso(price)}</strong>
      <Link
        to={`/products/${id}`}
        className='a-button'>
        Ver detalle
      </Link>
    </article>
  )
}

export default Product
