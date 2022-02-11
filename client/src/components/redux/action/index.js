//For Add Items to cart
export const addCart = (product) => { 
    return {
        type: "ADDITEM",
        payload: product
    }
}


//For Delete Items to cart
export const delCart = (product) => { 
    return {
        type: "DelITEM",
        payload: product
    }
}