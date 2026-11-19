import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'
import { getAllProducts } from '../services/productService'

function AllProductPage() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  async function loadProducts(){
    try{
      const response = await getAllProducts()
      setProducts(response)
    } catch(err){
      setError(err.response.data.message)
    }
  }

  useEffect(()=>{
    loadProducts()
  },[])

  return (
    <div>
      <h1>All Products</h1>
      {products.map((oneProduct)=>
      <div key={oneProduct._id}>
        <p>Name: {oneProduct.title}</p>
        <Link to={`/products/${oneProduct._id}`}>See Details</Link>
      </div>
    )}

    <p>{error}</p>
    </div>
  )
}

export default AllProductPage
