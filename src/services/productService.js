import axios from 'axios'
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_SERVER_URL
})

async function getAllProducts(){
    const response = await api.get('/products')
    return response.data
}

async function getProductById(productId){
    const response = await api.get(`/products/${productId}`)
    return response.data
}

async function deleteProduct(productId){
    const response = await api.delete(`/products/${productId}`)
    return response.data
}

async function updateProduct(productId, productBody){
    const response = await api.put(`/products/${productId}`, productBody) 
    return response.date
}

async function createProduct(productBody){
    const response = await api.post('/products', productBody)
    return response.data
}

export {
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProduct
}