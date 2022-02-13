import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => { 
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) { 
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => { 
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


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

 
    //Search Handling 
    const [q, setQ] = useState("");
        //     set search parameters
        //     we only what to search countries by capital and name
        //     this list can be longer if you want
        //     you can search countries even by their population
        // just add it to this array
        const [searchParam] = useState(["capital", "name"]);

    
        useEffect(() => {
            const getProducts = async () => { 
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) { 
                setData(await response.clone().json());
                setFilter(await response.json());
                // setLoading(false);
                // console.log(filter);
            }

            // return () => { 
            //     componentMounted = false;
            // }
        }
        getProducts();
        }, []);

    
 

const ShowProducts = () => {
    return (
        <>   
        
        {filter.map((product) => {
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