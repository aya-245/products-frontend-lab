import { useParams, Link, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { deleteProduct, getProductById } from "../services/productService"

function ProductDetailsPage() {
  const [product, setProduct]= useState(null)
  const [error, setError]= useState(null)

  const {productId} = useParams()

  async function loadProduct(){
    try{
      const response = await getProductById(productId)
      setProduct(response)
    } catch(err){
      setError(err.response.data.message)

    }
  }

  const navigate = useNavigate()

  async function handleDelete(){
    const response = await deleteProduct(productId)

    navigate('/products')
  }

  useEffect(()=>{
    loadProduct()
  },[])

  return (
    <div>
      <h1>Product Details</h1>
      {product ? <>
        <p>Title: {product.title}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>

        <Link to={`/products/${product._id}/edit`}>Edit Product</Link> <br />
        <button onClick={handleDelete}>Delete Product</button>
      </> : null}

      <p>{error}</p>
    </div>
  )
}

export default ProductDetailsPage
