import React from 'react'



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
    // const Checkout = state.map((product) => {

    //     var total = 0;
    //     const productList = (product) => {
    //         total = total + product.price;
    //         return (
    //             <li className="list-group-item d-flex justify-content-between lh-sm">
    //                 <div>
    //                     <h6 className="my-0">{product.title}</h6>
    //                 </div>
    //                 <span className="text-muted">${product.price}</span>
    //             </li>
    //         );
    //     }
    // })


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
                            {/* {state.map(productList)} */}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (Rs. )</span>
                                {/* <strong>${total}</strong> */}
                            </li>
                        </ul>

                        <button type="submit" className="btn btn-primary w-100 mt-5">Checkout</button>
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