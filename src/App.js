import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.scss'
import WhatsApp from './components/WhatsApp/WhatsApp'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Description from './components/Description/Description'
import Who from './components/Who/Who'
import FAQ from './components/FAQ/FAQ'
import ProductListContainer from './components/ProductListContainer/ProductListContainer'
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'
import Footer from './components/Footer/Footer'
import NoFound from './components/NoFound/NoFound'

function App() {
  const location = useLocation()
  const section = location.pathname.split('/').pop()

  const home = useRef(null)
  const whoAreWe = useRef(null)
  const faq = useRef(null)

  const handleSectionChange = (section) => {
    if (section === 'home') {
      home.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === 'who-are-we') {
      whoAreWe.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === 'faq') {
      faq.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    handleSectionChange(section)
  }, [section])

  return (
    <div>
      <WhatsApp />
      <NavBar
        handleSectionChange={handleSectionChange}
        section={section}
      />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Banner />
              <Description />
              <Who />
              <FAQ />
            </>
          }
        />
        <Route
          path='/home/:section?'
          element={
            <>
              <div ref={home}>
                <Banner />
              </div>
              <Description />
              <div ref={whoAreWe}>
                <Who />
              </div>
              <div ref={faq}>
                <FAQ />
              </div>
            </>
          }
        />
        <Route
          path='/products'
          element={<ProductListContainer />}
        />
        <Route
          path='/products/:productId'
          element={<ProductDetailContainer />}
        />
        <Route path='*' element={<NoFound />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
