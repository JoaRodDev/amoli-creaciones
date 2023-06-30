import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
import ProductDetail from '../ProductDetail/ProductDetail'
import Spinner from '../Spinner/Spinner'
import NoFound from '../NoFound/NoFound'

const ProductDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    setProduct(null)
    setLoading(true)

    const productRef = doc(db, 'products', productId)

    getDoc(productRef)
      .then((doc) => {
        setProduct({
          ...doc.data(),
          id: doc.id
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : product.name ? (
        <ProductDetail {...product} />
      ) : (
        <NoFound />
      )}
    </div>
  )
}

export default ProductDetailContainer
