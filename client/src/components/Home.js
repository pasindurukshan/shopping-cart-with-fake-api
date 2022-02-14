import React from 'react'
import Products from './Products'

const Home = ({searchTerm}) => {
  return (
    <div>
        <Products searchTerm={searchTerm}/>
    </div>
  )
}

export default Home