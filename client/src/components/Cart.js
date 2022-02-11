import React from 'react'
import { NavLink } from 'react-router-dom'


const Cart = () => {

     const state = JSON.parse(localStorage.getItem("cart")) || []
 
    const handleReduce = (product) => {
        //dispatch(delCart(item))
        const state = JSON.parse(localStorage.getItem("cart")) || []
        let cart = []

         const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                cart = state.filter((x) => x.id !== exist1.id);
            } else { 
               cart = state.map((x) => x.id === product.id ? {...x, qty: x.qty-1} : x);
        }
        localStorage.setItem("cart", JSON.stringify(cart))
         window.location.reload(false);
     }
    
    const handleAdd = (product) => {
        //dispatch(addCart(item))
          const state = JSON.parse(localStorage.getItem("cart")) || []
        let cart = []
        if (state.length !== 0) {
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //Increase the Quantity 
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
        cart[0] = product
        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.reload(false);
            return
     }

    const products = state.map((product) => { 
        return (
            <>
            <div className='px-4 my-5 bg-light rounded-3' key={ product.id}>
                <div className='container py-4'>
                    <div className='row'>
                        <div className='col-md-4'>
                                <img src={product.image} alt={product.title} height="200px" width="180px"/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>
                                {product.qty} X ${product.price} = $
                                {product.qty * product.price}
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={()=> handleReduce(product)}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className='btn btn-outline-dark' onClick={()=> handleAdd(product)}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    })



    return (
        <>
        {products}
        </>
        
    )
}

export default Cart