import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCartShopping,
  faDollar,
  faClock
} from '@fortawesome/free-solid-svg-icons'

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div
      className='faq'
      id='faq'>
      <div className='faq__body'>
        <h3 data-aos='fade-up'>Preguntas frecuentes</h3>
        <section
          className='faq__location'
          data-aos='fade-up'>
          <h4>¿Dónde estamos?</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className='m-0'>
              ¡Estamos ubicados en Córdoba, Argentina, y tenemos envíos a todo
              el país a través del correo argentino! Además, si te encuentras en
              Ciudad de Córdoba, podremos coordinar la fecha de entrega en tu
              casa, con un envío completamente gratis.
            </p>
          </div>
        </section>
        <section
          className='faq__how-to-purchase'
          data-aos='fade-up'>
          <h4>¿Cómo comprar?</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className='m-0 faq__how-to-purchase-content'>
              <p>
                Nuestro proceso de compra se realiza a través de WhatsApp. Si
                bien siempre puedes escribirnos para preguntar respecto a
                cualquier producto; también puedes realizar el proceso de compra
                de esta forma:
              </p>
              <ol>
                <li>Ingresa a nuestro catálogo</li>
                <li>
                  Selecciona la categoría en la que estás interesado, o bien,
                  puedes ver todos los productos
                </li>
                <li>Selecciona el producto o productos que más te gusten</li>
                <li>Selecciona la opción “Añadir al carrito”</li>
                <li>
                  Una vez tu carrito esté listo, selecciona “Enviar a la
                  empresa”, de esta forma nos pondremos en contacto contigo
                </li>
              </ol>
              <h4>Envío/retiro</h4>
              <ul>
                <li>
                  Si seleccionaste retirar personalmente, nos comunicaremos
                  contigo para coordinar la entrega o puedes escribirnos a
                  nuestro WhatsApp
                </li>
                <li>
                  Si elegiste envío a domicilio, te contactaremos antes de
                  enviar tu pedido para asegurarnos que estés para recibirlo
                </li>
                <li>
                  Envío por correo al resto del país: Te enviaremos el número de
                  seguimiento cuando tu pedido sea despachado
                </li>
              </ul>
              <strong>
                En caso de perdida, extravío, robo, rotura o cualquier otro
                inconveniente ocasionado por la empresa de transporte, no somos
                responsables por el reintegro del dinero o devolución del
                producto, ya que excede nuestros límites y responsabilidades,
                quien deberá hacerse cargo es la empresa de transporte
                correspondiente.
              </strong>
            </div>
          </div>
        </section>
        <section
          className='faq__purchase-methods'
          data-aos='fade-up'>
          <h4>Medios de pago</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faDollar} />
            </div>
            <div className='m-0 faq__purchase-methods-content'>
              <p>Tenemos tres opciones:</p>
              <ol>
                <li>Transferencia bancaria</li>
                <li>Pago fácil o Rapipago</li>
                <li>
                  Mercado Pago (se redirigirá a Mercado Pago para realizar la
                  compra, puedes seleccionar las cuotas)
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section
          className='faq__time'
          data-aos='fade-up'>
          <h4>¿Cuánto demora la entrega?</h4>
          <div>
            <div className='faq_icon'>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <p className='m-0'>
              Como le ponemos mucho amor a nuestros productos y trabajamos de
              manera artesanal, los pedidos tienen una demora de siete (7) días
              hábiles aproximadamente. Si el producto está en stock, ese mismo
              día nos ponemos en contacto contigo para coordinar el envío.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQ
