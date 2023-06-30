import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Product from '../Product/Product'

const ProductList = ({ products }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div
      className='product-list'
      data-aos='fade-up'>
      <div className='product-list__title'>
        <div>
          <h2>Nuestros productos</h2>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/form.png'}
            alt='Título'
            className='product-list__form'
          />
        </div>
      </div>
      <div className='container-fluid product-list__products p-0'>
        <section className='row row-cols-lg-5 justify-content-center m-0'>
          {products.map((product) => (
            <Product
              {...product}
              key={product.id}
            />
          ))}
        </section>
        <a
          href='https://wa.me/c/5493517461354'
          target='_blank'
          rel='noreferrer'
          className='a-button'>
          Ver todos los productos
        </a>
      </div>
    </div>
  )
}

export default ProductList
