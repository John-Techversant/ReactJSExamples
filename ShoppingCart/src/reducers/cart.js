const intialState = {
    cartProducts: []
}

const reducer = (state = intialState, action) => {
    switch (action.type) {


        case "ADD_PRODUCT":
            return {
                ...state,
                cartProducts: [{ ...action.product }, ...state.cartProducts]
            }

        case "DEL_PRODUCT":
            const prods = state.cartProducts.filter(p => p._id != action.delId);
            return {
                ...state,
                cartProducts: [...prods]
            }


        default: return state;
    }
}

export default reducer;