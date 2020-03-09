
export const addProductToCart = ( product ) => {

    return {
        type: "ADD_PRODUCT", 
        product: product,
    }
}


export const deleteProductFromCart = ( delId ) => {

    return {
        type: "DEL_PRODUCT", 
        delId
    }
}

