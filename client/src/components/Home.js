import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px"/>
              <div className="card-img-overlay">
                <div className='container'>
                    <h5 className="card-title display-3">Zone 24x7</h5>
                </div>
            
        
        </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home