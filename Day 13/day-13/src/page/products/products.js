import { useEffect, useState } from 'react'
import { api } from '../../utils/axiosInstance'
import "./products.css"

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        localStorage.setItem( "token", "1234567")
        const fetchProducts = async () => {
            try{
                const response = await api.get("/products")
                setProducts(response?.data)
                // console.log(response.data)
            } catch (error) {
                console.error("Failed to fetch Products", error);
            }
        }
        fetchProducts();
    },[])

  return (
    <div className="products-grid">
      {products?.map((product) => (
         <div className="product-card">
            <img src={product.image} alt={product.title} />

            <div className="product-info">
                <h4 className="category">{product.category}</h4>

                <p className="description">
                    {product.description.slice(0, 100)}...
                </p>

                <div className="price-rating">
                    <span className="price">₹ {product.price}</span>
                    <span className="rating">⭐ {product.rating.rate}</span>
                </div>

                <button>Add to Cart</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Products