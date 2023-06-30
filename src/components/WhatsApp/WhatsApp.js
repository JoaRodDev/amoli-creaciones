import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsApp = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=543517461354&text=%C2%A1Hola%2C%20Amoli%20Creaciones%21%20Quiero%20informaci%C3%B3n%20de...'
      target='_blank'
      rel='noreferrer'
      className='whatsapp a-button'>
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  )
}

export default WhatsApp
