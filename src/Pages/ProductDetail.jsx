import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getProductById } from '../Data/Product';
import { useCart } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()
  const [products, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      Navigate("./")
      return;
    }

    setProduct (foundProduct)
  }, [id]);
  
  if(!products) { 
    return <h1>Loading.....</h1>
  }
   const {addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) => item.id === products.id);
  
    const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src= {products.image} alt={products.name} />
          </div>
          <div className="product-detail-content">
            <h1 className='product-detail-name'> {products.name} </h1>
            <p className='product-detail-price'> ${products.price} </p>
            <p className='product-detail-description'> {products.description} </p>
            <div className="product-card-actions">  
              <button className='btn btn-large btn-primary' onClick={() => addToCart(products.id)}>
               Add to Cart {productQuantityLabel}
            </button> 
            
              <Link to="/Checkout" className='btn btn-large btn-secondary' > Go to Cart</Link>

            </div>
          
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails