import React from 'react'
import { getProducts } from '../Data/Product'
import ProductCard from '../Components/ProductCard'

const Home = () => {
const products = getProducts()

  return (
    <div className='page'>
      <div className="home-hero">
        <h1 className='home-title'> Welcome to Buy-Fit </h1>
        <p className='home-subtitle'> Discover amazing products at great prices</p>
      </div>
      <div className="container">
        <h2 className='page-title'> Our Products </h2>
        <div className="product-grid">
            {products.map((products) => (
                <ProductCard products={products} key={products.id}/>

            ))}
        </div>
      </div>
    </div>
  )
}

export default Home