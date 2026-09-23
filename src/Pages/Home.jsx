import { getProducts } from '../Data/Product'
import ProductCard from '../Components/ProductCard'

const Home = () => {
const products = getProducts()

  return (
    <div className='page'>
      <marquee className='marq' behavior="" direction="Left">This is a Sample Website! Not Real Products </marquee>
      <div className="home-hero">
       <div className="glass-card">
         <h1 className='home-title '> Welcome to Buy-Fit </h1>
        <p className='home-subtitle '> Amazing Products  Excellent Prices</p>
       
       </div>
         
        
      </div>
      <div className="container">
        <h2 className='page-title'> Our Products </h2>
        <div className="product-grid">
            {products.map((products) => (
                <ProductCard products={products} key={products.id}/>

            ))}
        </div>
      </div>

      <div className="home-hero2">      
        <div className="glass-card">
        <h1 className='home-title'> Developed by: TimSavvy  </h1>
        <p className='home-subtitle'> Website developer, Mobile App developer  </p>
      </div>

      </div>
    </div>
  )
}

export default Home