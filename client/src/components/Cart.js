import React, { useState } from 'react';
import swal from 'sweetalert2';


//cart implementation
const Cart = () => {  

    const state = JSON.parse(localStorage.getItem("cart")) || []
    
    let total = 0
    state.forEach(item => {
        total += +item.price * +item.qty
    });
 
    const handleReduce = (product) => {
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
          const state = JSON.parse(localStorage.getItem("cart")) || []
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
        cart[0] = product
        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.reload(false);
            return
     }

    
//cart
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
                                    {product.qty} X Rs. {(product.price)*100} = Rs.&nbsp;
                                    {product.qty * product.price*100}
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


//Checkout  
    const checkoutList = state.map((product) => {
        
            return (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0">{product.title.substring(0,12)}</h6>
                    </div>
                    <span className="text-muted">Rs. {(product.price)*100}</span>
                </li>
            );
        
    })


//Checkpout message
    function alertmessage() {
        // swal("Oops!", "Something went wrong!", "error")
        swal.fire(
            "Successfull",
            "Your order has been successfully placed",
            "success"
        )
    }

    
    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <br /><br />
                    <div className='border border-dark' style={{padding: '50px'}}>   
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {checkoutList}

                            <li className="list-group-item d-flex justify-content-between">
                                <span><h4>Total (Rs. )</h4></span>
                                <strong><h4>{(total*100).toFixed(2)}</h4></strong>
                            </li>
                        </ul>

                        <button type="submit" onClick={alertmessage} className="btn btn-primary w-100 mt-5">Checkout</button>
                        
                       

                           
                                               
                    </div>    

                        <a href="/">
                        <button type="submit" className="btn btn-primary w-100 mt-5">Continue Shopping</button></a>
                    </div>
                    <div className="col-md-7 col-lg-8">
                
                        {products}

                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Cart