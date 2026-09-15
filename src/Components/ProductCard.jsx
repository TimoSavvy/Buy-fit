import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {
  return (
    <div className="product-card" key={products.id}>
                    <img src={products.image} alt="" className='product-card-image' />
                    <div className="product-card-content">
                        <h3 className='product-card-name'>{products.name}</h3>
                        <p className='product-card-price'>${products.price}</p>
                        <div className="product-card-actions">
                            <button className ="btn btn-secondary">View details</button>
                            <button className ="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>
  )
}

export default ProductCard