import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductCard = ({products}) => {
  const {addToCart, cartItems} = useCart();
  const productInCart = cartItems.find((item) => item.id === products.id);

  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";
  return (
     
    <div className="product-card" key={products.id}>
                    <img src={products.image} alt="" className='product-card-image' />
                    <div className="product-card-content">
                        <h3 className='product-card-name'>{products.name}</h3>
                        <p className='product-card-price'>${products.price}</p>
                        <div className="product-card-actions">
                            <Link to={`/products/${products.id}`} className='btn btn-secondary'>View Details</Link> 
                            <button className ="btn btn-primary" onClick={() => addToCart(products.id)} >
                              Add to Cart {productQuantityLabel}
                              </button>
                        </div>
                    </div>
                </div>
    
  )
    
}

export default ProductCard