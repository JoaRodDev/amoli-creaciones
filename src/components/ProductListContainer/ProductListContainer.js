import { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
import Spinner from '../Spinner/Spinner'
import ProductList from '../ProductList/ProductList.js'

const ProductListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProducts([])
    setLoading(true)

    const productsRef = collection(db, 'products')

    let myQuery = query(productsRef, orderBy('name', 'asc'))

    getDocs(myQuery)
      .then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
        )
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>{loading ? <Spinner /> : <ProductList products={products} />}</div>
  )
}

export default ProductListContainer
