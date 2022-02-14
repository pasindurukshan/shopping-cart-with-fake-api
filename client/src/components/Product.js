import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

//single component
const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const addProduct = (product) => {
        const state = JSON.parse(localStorage.getItem("cart")) || []
        console.log('cart', state)
        let cart = []
        if (state.length !== 0) {
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                cart = state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
              
            } else {
               cart = [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
               
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            
            window.location.reload(false);
            return
        }
        cart[0] = {
                        ...product,
                        qty: 1,
                    }
        localStorage.setItem("cart", JSON.stringify(cart))
        
            window.location.reload(false);
            return
    }

    useEffect(() => {
        const getProduct = async () => { 
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
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

//single component view swet
    const ShowProduct = () => { 
        return (
            <>
                
                <div className='col-md-6'>
                    <img src={product.image} alt={ product.title} height="350px" width="350px"/>
                </div>
                <div className='col-md-6'>
                    <h4>
                        { product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        Rs. {(product.price)*100}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className='container'>
            <div className='row py-5'>
                  {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product