import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//all product
const Products = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => { 
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
                if (props.searchTerm) {
                    const dataR = await response.clone().json()
                    const result = dataR.filter(product => product.title.toLowerCase().includes(props.searchTerm.toLowerCase()))
              
                    setData(result)
                }
                else {
                    setData(await response.clone().json());
                }
                setLoading(false);
        }
        getProducts();
    }, [props.searchTerm])    


    const Loading = () => { 
        return (
            <>
            <div id="root">
                    <div id="pre-loader">
                    <img src="/assets/lo1.gif" />
            </div>
            </div>

            </> 
        )
    }

//product view set
const ShowProducts = () => {
    return (
        <>   
        
        {data.map((product) => {
            return (
                <>
                    <div className="col-md-3 mb-5">
                        <div class="card h-100 text-center p-4" key={product.id}>
                        <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                        <div class="card-body">
                            <h5 class="card-title mb-0">{product.title.substring(0,12)}</h5>
                            <p class="card-text lead fw-bold">Rs. {(product.price)*100}</p>
                                <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Bye Now</NavLink>
                        </div>
                    </div>
                    </div>
                </>
            )
        })}
        </>
    )
    
}
    
  return (
    <div>
        <div className="container my-5 py-5">
              <div className="row justify-content-center">
                  {loading ? <Loading /> : <ShowProducts />}
                  
            </div>
        </div>
    </div>
  )
}

export default Products