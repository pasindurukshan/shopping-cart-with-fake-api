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
        type: "DELITEM",
        payload: product
    }
}

export const addQtyOne = (product) => { 
    return {
        type: "ADDQTY",
        payload: product
    }
}

export const reduceQtyOne = (product) => { 
    return {
        type: "REDUCEQTY",
        payload: product
    }
}